'''
Business: Create deal in Bitrix24 CRM from website forms
Args: event - dict with httpMethod, body containing name, phone, email, company, message, service, source
      context - object with request_id attribute
Returns: HTTP response with success status
'''

import json
import os
from typing import Dict, Any
import urllib.request
import urllib.parse
import urllib.error

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    method: str = event.get('httpMethod', 'POST')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    body_data = json.loads(event.get('body', '{}'))
    
    name = body_data.get('name', '')
    phone = body_data.get('phone', '')
    email = body_data.get('email', '')
    company = body_data.get('company', '')
    message = body_data.get('message', '')
    service = body_data.get('service', 'Не указано')
    source = body_data.get('source', 'Сайт')
    price = body_data.get('price', '')
    
    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Name and phone are required'}),
            'isBase64Encoded': False
        }
    
    bitrix_webhook = os.environ.get('BITRIX_WEBHOOK_URL')
    if not bitrix_webhook:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Bitrix webhook not configured'}),
            'isBase64Encoded': False
        }
    
    deal_title = f"Заявка: {service} - {name}"
    
    deal_data = {
        'fields': {
            'TITLE': deal_title,
            'SOURCE_ID': 'WEB',
            'SOURCE_DESCRIPTION': '1С-FRESH-Lending',
            'COMMENTS': message,
            'CONTACT_ID': None,
        }
    }
    
    if price:
        price_clean = price.replace('₽', '').replace('руб', '').replace(' ', '').replace('от', '').strip()
        try:
            price_numeric = float(price_clean)
            deal_data['fields']['OPPORTUNITY'] = price_numeric
            deal_data['fields']['CURRENCY_ID'] = 'RUB'
        except ValueError:
            pass
    
    contact_data = {
        'fields': {
            'NAME': name,
            'TYPE_ID': 'CLIENT',
            'SOURCE_ID': 'WEB',
        }
    }
    
    if phone:
        contact_data['fields']['PHONE'] = [{'VALUE': phone, 'VALUE_TYPE': 'WORK'}]
    
    if email:
        contact_data['fields']['EMAIL'] = [{'VALUE': email, 'VALUE_TYPE': 'WORK'}]
    
    if company:
        contact_data['fields']['COMPANY_TITLE'] = company
    
    try:
        contact_url = f"{bitrix_webhook}crm.contact.add.json"
        contact_json = json.dumps(contact_data).encode('utf-8')
        
        contact_req = urllib.request.Request(
            contact_url,
            data=contact_json,
            headers={'Content-Type': 'application/json'}
        )
        
        with urllib.request.urlopen(contact_req) as response:
            contact_result = json.loads(response.read().decode('utf-8'))
            
            if 'result' in contact_result:
                contact_id = contact_result['result']
                deal_data['fields']['CONTACT_ID'] = contact_id
        
        deal_url = f"{bitrix_webhook}crm.deal.add.json"
        deal_json = json.dumps(deal_data).encode('utf-8')
        
        deal_req = urllib.request.Request(
            deal_url,
            data=deal_json,
            headers={'Content-Type': 'application/json'}
        )
        
        with urllib.request.urlopen(deal_req) as response:
            deal_result = json.loads(response.read().decode('utf-8'))
            
            if 'result' in deal_result:
                return {
                    'statusCode': 200,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'body': json.dumps({
                        'success': True,
                        'dealId': deal_result['result'],
                        'contactId': contact_id if 'contact_id' in locals() else None
                    }),
                    'isBase64Encoded': False
                }
            else:
                error_msg = deal_result.get('error_description', 'Unknown error')
                return {
                    'statusCode': 500,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'body': json.dumps({'error': f'Bitrix error: {error_msg}'}),
                    'isBase64Encoded': False
                }
    
    except urllib.error.HTTPError as e:
        error_body = e.read().decode('utf-8')
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': f'HTTP error: {error_body}'}),
            'isBase64Encoded': False
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': str(e)}),
            'isBase64Encoded': False
        }