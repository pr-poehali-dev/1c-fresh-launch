import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import CustomerOrderForm from '@/components/CustomerOrderForm';

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState('6months');
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [orderFormData, setOrderFormData] = useState({ serviceType: '', serviceDetails: '', price: '' });
  const [activePlanIndex, setActivePlanIndex] = useState(1);

  const handlePlanSelection = (plan: any, period: string) => {
    const featuresText = plan.features.map((f: any) => typeof f === 'string' ? f : f.text).join(', ');
    setOrderFormData({
      serviceType: plan.isFree ? plan.name : `Тариф ${plan.name} (${period === '6months' ? '6 месяцев' : '12 месяцев'})`,
      serviceDetails: `${plan.description}. Функции: ${featuresText}`,
      price: plan.isFree ? 'Бесплатно' : `${plan.price} ₽/месяц`
    });
    setShowOrderForm(true);
  };

  const handleCustomCalculation = () => {
    setOrderFormData({
      serviceType: 'Индивидуальный расчет тарифа',
      serviceDetails: 'Рассчитаем оптимальный тариф под ваши задачи и объем работ',
      price: ''
    });
    setShowOrderForm(true);
  };

  const plans = {
    '6months': [
      {
        name: 'Бесплатно 14 дней',
        description: '10 баз, 5 пользователей',
        price: '0',
        features: [
          { text: '10 баз приложений', available: true },
          { text: '5 одновременных сеансов', available: true },
          { text: 'До 50 ЭДО бесплатно', available: false },
          { text: 'Доступ к 1С:ИТС', available: false },
          { text: '1С-Отчетность', available: false }
        ],
        isFree: true
      },
      {
        name: 'БАЗОВЫЙ',
        description: '1 база, 2 пользователя',
        price: '1,730',
        features: [
          { text: '1 база любого приложения', available: true },
          { text: '2 одновременных сеанса', available: true },
          { text: 'До 50 ЭДО бесплатно', available: true },
          { text: 'Доступ к 1С:ИТС', available: true },
          { text: 'Техническая поддержка', available: true }
        ],
        popular: true
      },
      {
        name: 'ПРОФ',
        description: '10 баз, 5 пользователей',
        price: '5,310',
        features: [
          { text: '10 баз приложений', available: true },
          { text: '5 одновременных сеансов', available: true },
          { text: 'До 100 ЭДО бесплатно', available: true },
          { text: '1С-Отчетность', available: true },
          { text: 'Электронная подпись', available: true }
        ]
      }
    ],
    '12months': [
      {
        name: 'Бесплатно 14 дней',
        description: '10 баз, 5 пользователей',
        price: '0',
        features: [
          { text: '10 баз приложений', available: true },
          { text: '5 одновременных сеансов', available: true },
          { text: 'До 50 ЭДО бесплатно', available: false },
          { text: 'Доступ к 1С:ИТС', available: false },
          { text: '1С-Отчетность', available: false }
        ],
        isFree: true
      },
      {
        name: 'БАЗОВЫЙ',
        description: '1 база, 2 пользователя',
        price: '1,640',
        features: [
          { text: '1 база любого приложения', available: true },
          { text: '2 одновременных сеанса', available: true },
          { text: 'До 50 ЭДО бесплатно', available: true },
          { text: 'Доступ к 1С:ИТС', available: true },
          { text: 'Техническая поддержка', available: true }
        ],
        popular: true
      },
      {
        name: 'ПРОФ',
        description: '10 баз, 5 пользователей',
        price: '4,999',
        features: [
          { text: '10 баз приложений', available: true },
          { text: '5 одновременных сеансов', available: true },
          { text: 'До 100 ЭДО бесплатно', available: true },
          { text: '1С-Отчетность', available: true },
          { text: 'Электронная подпись', available: true }
        ]
      }
    ]
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="max-w-[1980px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
            Тарифные планы
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Гибкие подписки для бизнеса любого размера. Изменяйте тариф в любой момент
          </p>
          
          {/* Plan Toggle */}
          <div className="inline-flex bg-white rounded-full p-1 shadow-sm border">
            <button
              onClick={() => setSelectedPlan('6months')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedPlan === '6months'
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              6 месяцев
            </button>
            <button
              onClick={() => setSelectedPlan('12months')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedPlan === '12months'
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              12 месяцев
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left column - pricing cards */}
          <div className="space-y-4">
            {plans[selectedPlan].map((plan, index) => {
              const isActive = activePlanIndex === index;
              const isHighlighted = plan.isFree ? false : index === plans[selectedPlan].length - 1;
              
              return (
                <div
                  key={index}
                  onClick={() => setActivePlanIndex(index)}
                  className={`relative rounded-[40px] px-8 py-6 flex items-center justify-between transition-all cursor-pointer ${
                    isHighlighted
                      ? 'bg-gradient-to-r from-orange-400 to-yellow-400 text-white shadow-xl'
                      : plan.popular
                      ? 'bg-white border-2 border-gray-900 shadow-lg hover:shadow-xl'
                      : 'bg-white border border-gray-300 shadow-sm hover:shadow-md'
                  } ${isActive ? 'ring-4 ring-orange-300' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                      <Icon name="Check" size={20} />
                    </div>
                  )}
                  {isHighlighted && (
                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 bg-white text-orange-500 rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                      <Icon name="Star" size={20} fill="currentColor" />
                    </div>
                  )}
                  <div className={`flex-1 ${plan.popular || isHighlighted ? 'pl-4' : ''}`}>
                    <h3 className={`font-bold text-xl mb-1 ${
                      isHighlighted ? 'text-white' : 'text-gray-900'
                    }`}>
                      {plan.name}
                    </h3>
                    <p className={`text-sm ${
                      isHighlighted ? 'text-white/90' : 'text-gray-600'
                    }`}>
                      {plan.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className={`text-3xl font-bold ${
                      isHighlighted ? 'text-white' : 'text-gray-900'
                    }`}>
                      {plan.price} <span className="text-lg font-normal">₽</span>
                    </div>
                    <div className={`text-sm ${
                      isHighlighted ? 'text-white/80' : 'text-gray-500'
                    }`}>
                      {plan.isFree ? '' : '/МЕСЯЦ'}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right column - features list */}
          <div className="bg-white rounded-[40px] border border-gray-200 p-8 shadow-lg">
            <h3 className="font-bold text-xl text-gray-900 mb-6">Включает:</h3>
            <ul className="space-y-4">
              {plans[selectedPlan][activePlanIndex].features.map((feature: any, index: number) => {
                const isAvailable = typeof feature === 'string' ? true : feature.available;
                const text = typeof feature === 'string' ? feature : feature.text;
                return (
                  <li key={index} className="flex items-start">
                    <div className={`rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 ${
                      isAvailable ? 'bg-gray-900' : 'bg-gray-300'
                    }`}>
                      <Icon name={isAvailable ? "Check" : "X"} className="text-white" size={14} />
                    </div>
                    <span className={`${isAvailable ? 'text-gray-700' : 'text-gray-400'}`}>{text}</span>
                  </li>
                );
              })}
            </ul>
            <Button
              onClick={() => handlePlanSelection(plans[selectedPlan][activePlanIndex], selectedPlan)}
              className="w-full mt-8 bg-white text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-white rounded-[30px] py-6 text-lg font-semibold"
            >
              Оформить подписку
            </Button>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <h3 className="font-bold text-2xl text-gray-900 mb-4">
            Нужен индивидуальный тариф для<br />вашего бизнеса?
          </h3>
          <Button 
            onClick={handleCustomCalculation}
            className="bg-gray-900 text-white hover:bg-gray-800 rounded-[30px] px-8 py-6 text-lg font-semibold shadow-lg"
          >
            Запросить расчет →
          </Button>
        </div>
      </div>
      
      {showOrderForm && (
        <CustomerOrderForm
          serviceType={orderFormData.serviceType}
          serviceDetails={orderFormData.serviceDetails}
          price={orderFormData.price}
          onClose={() => setShowOrderForm(false)}
        />
      )}
    </section>
  );
}