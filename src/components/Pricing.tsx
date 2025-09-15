import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { telegramBot } from '@/services/telegramBot';
import { toast } from 'sonner';

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState('6months');
  const [isLoading, setIsLoading] = useState(false);

  const handlePlanSelection = async (plan: any, period: string) => {
    console.log('🎯 Выбор тарифа:', { plan: plan.name, period, price: plan.price });
    setIsLoading(true);
    try {
      const orderData = {
        service: `Тариф ${plan.name} (${period === '6months' ? '6 месяцев' : '12 месяцев'})`,
        name: 'Клиент с сайта',
        phone: 'Требуется уточнить',
        price: `${plan.price} ₽/месяц`,
        message: `${plan.description}. Функции: ${plan.features.join(', ')}`
      };
      
      console.log('📦 Отправка данных заказа:', orderData);
      const result = await telegramBot.sendOrderNotification(orderData);
      
      console.log('📨 Результат отправки:', result);

      if (result.success) {
        toast.success('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
      } else {
        console.error('❌ Telegram error:', result.error);
        toast.error(`Ошибка: ${result.error || 'Не удалось отправить заявку'}`);
      }
    } catch (error) {
      console.error('Plan selection error:', error);
      toast.error(`Ошибка: ${error instanceof Error ? error.message : 'Не удалось отправить заявку'}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCustomCalculation = async () => {
    console.log('💰 Запрос индивидуального расчета');
    setIsLoading(true);
    try {
      const orderData = {
        service: 'Индивидуальный расчет тарифа',
        name: 'Клиент с сайта',
        phone: 'Требуется уточнить',
        message: 'Запрос индивидуального расчета тарифного плана'
      };
      
      console.log('📦 Отправка запроса расчета:', orderData);
      const result = await telegramBot.sendOrderNotification(orderData);
      
      console.log('📨 Результат отправки расчета:', result);

      if (result.success) {
        toast.success('Запрос отправлен! Мы рассчитаем индивидуальный тариф и свяжемся с вами.');
      } else {
        console.error('❌ Telegram error:', result.error);
        toast.error(`Ошибка: ${result.error || 'Не удалось отправить запрос'}`);
      }
    } catch (error) {
      console.error('Custom calculation error:', error);
      toast.error(`Ошибка: ${error instanceof Error ? error.message : 'Не удалось отправить запрос'}`);
    } finally {
      setIsLoading(false);
    }
  };

  const plans = {
    '6months': [
      {
        name: 'БАЗОВЫЙ',
        description: '1 база, 2 пользователя',
        price: '1,730',
        features: ['1 база любого приложения', '2 одновременных сеанса', 'До 50 ЭДО бесплатно', 'Доступ к 1С:ИТС']
      },
      {
        name: 'ПРОФ',
        description: '10 баз, 5 пользователей',
        price: '5,310',
        features: ['10 баз приложений', '5 одновременных сеансов', 'До 100 ЭДО бесплатно', '1С-Отчетность', 'Электронная подпись'],
        popular: true
      },
      {
        name: 'КОРП',
        description: '10 баз, 10 пользователей',
        price: '8,850',
        features: ['2 базы КА', '10 других баз', '10 одновременных сеансов', 'Расширенный функционал', 'До 8 Гб на базу']
      }
    ],
    '12months': [
      {
        name: 'БАЗОВЫЙ',
        description: '1 база, 2 пользователя',
        price: '1,640',
        features: ['1 база любого приложения', '2 одновременных сеанса', 'До 50 ЭДО бесплатно', 'Доступ к 1С:ИТС']
      },
      {
        name: 'ПРОФ',
        description: '10 баз, 5 пользователей',
        price: '4,999',
        features: ['10 баз приложений', '5 одновременных сеансов', 'До 100 ЭДО бесплатно', '1С-Отчетность', 'Электронная подпись'],
        popular: true
      },
      {
        name: 'КОРП',
        description: '10 баз, 10 пользователей',
        price: '8,330',
        features: ['2 базы КА', '10 других баз', '10 одновременных сеансов', 'Расширенный функционал', 'До 8 Гб на базу']
      }
    ]
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans[selectedPlan].map((plan, index) => (
            <Card key={index} className={`relative overflow-hidden ${plan.popular ? 'ring-2 ring-orange-500 scale-105' : ''}`}>
              {plan.popular && (
                <Badge className="absolute top-4 right-4 bg-orange-500 text-white">
                  Популярный
                </Badge>
              )}
              <CardHeader className="text-center p-8">
                <CardTitle className="font-display font-bold text-2xl text-gray-900 mb-2">
                  Тариф {plan.name}
                </CardTitle>
                <CardDescription className="text-gray-600 mb-6">
                  {plan.description}
                </CardDescription>
                <div className="text-center">
                  <span className="text-4xl font-display font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-2">₽/месяц</span>
                </div>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Icon name="Check" className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={() => handlePlanSelection(plan, selectedPlan)}
                  disabled={isLoading}
                  className={`w-full ${plan.popular ? 'bg-orange-500 hover:bg-orange-600' : 'bg-gray-900 hover:bg-gray-800'} text-white rounded-[30px]`}
                >
                  {isLoading ? 'Отправка...' : 'Выбрать план'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Card className="inline-block p-8 bg-gradient-to-r from-orange-500 to-indigo-500 text-white">
            <h3 className="font-display font-bold text-xl mb-2">Нужен индивидуальный тариф?</h3>
            <p className="mb-4">Рассчитаем оптимальное решение для вашего бизнеса</p>
            <Button 
              onClick={handleCustomCalculation}
              disabled={isLoading}
              variant="secondary" 
              className="bg-white text-orange-500 hover:bg-gray-100 rounded-[30px]"
            >
              {isLoading ? 'Отправка...' : 'Запросить расчет'}
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}