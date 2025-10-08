import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { toast } from 'sonner';
import Icon from "@/components/ui/icon";

interface CustomerOrderFormProps {
  serviceType: string;
  serviceDetails?: string;
  price?: string;
  onClose: () => void;
}

export default function CustomerOrderForm({ 
  serviceType, 
  serviceDetails = '', 
  price = '',
  onClose 
}: CustomerOrderFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [agreedToPolicy, setAgreedToPolicy] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast.error('Пожалуйста, заполните обязательные поля (имя и телефон)');
      return;
    }

    if (!agreedToPolicy) {
      toast.error('Необходимо согласие на обработку персональных данных');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('https://functions.poehali.dev/09d20db6-66dc-4441-860c-48bebddba56c', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          message: `🎯 Услуга: ${serviceType}\n${price ? `💰 Стоимость: ${price}\n` : ''}${formData.email ? `✉️ Email: ${formData.email}\n` : ''}${formData.company ? `🏢 Компания: ${formData.company}\n` : ''}${serviceDetails ? `📋 Детали: ${serviceDetails}\n` : ''}${formData.message ? `💬 Дополнительно: ${formData.message}` : ''}`,
          source: 'Форма заказа'
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
        onClose();
      } else {
        toast.error(`Ошибка: ${result.error || 'Не удалось отправить заявку'}`);
      }
    } catch (error) {
      console.error('Order submission error:', error);
      toast.error(`Ошибка: ${error instanceof Error ? error.message : 'Не удалось отправить заявку'}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl font-semibold">
                {serviceType}
              </CardTitle>
              <CardDescription>
                Заполните данные для связи
              </CardDescription>
              {price && (
                <div className="mt-2 text-lg font-semibold text-orange-600">
                  {price}
                </div>
              )}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-6 w-6 p-0"
            >
              <Icon name="X" size={16} />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                placeholder="Ваше имя *"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                required
              />
            </div>
            
            <div>
              <Input
                type="tel"
                placeholder="Телефон *"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                required
              />
            </div>
            
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              />
            </div>
            
            <div>
              <Input
                placeholder="Название компании"
                value={formData.company}
                onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
              />
            </div>
            
            <div>
              <Textarea
                placeholder="Дополнительная информация"
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                rows={3}
              />
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="order-privacy-policy"
                checked={agreedToPolicy}
                onChange={(e) => setAgreedToPolicy(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                required
              />
              <label htmlFor="order-privacy-policy" className="text-sm text-gray-600">
                Я согласен с{' '}
                <Link to="/privacy" className="text-orange-500 hover:underline" target="_blank">
                  политикой конфиденциальности
                </Link>
                {' '}и{' '}
                <Link to="/terms" className="text-orange-500 hover:underline" target="_blank">
                  пользовательским соглашением
                </Link>
              </label>
            </div>
            
            <div className="flex gap-2 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
              >
                Отмена
              </Button>
              <Button
                type="submit"
                disabled={isLoading}
                className="flex-1 bg-orange-500 hover:bg-orange-600"
              >
                {isLoading ? 'Отправка...' : 'Отправить заявку'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}