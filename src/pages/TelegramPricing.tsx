import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function TelegramPricing() {
  const [selectedPlan, setSelectedPlan] = useState('6months');
  const [activePlanIndex, setActivePlanIndex] = useState(1);

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

  const currentPlan = plans[selectedPlan][activePlanIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50 pb-6">
      <div className="bg-gradient-to-r from-orange-500 to-indigo-500 text-white px-4 py-6 sticky top-0 z-10 shadow-lg">
        <h1 className="text-2xl font-bold text-center">Тарифные планы</h1>
        <p className="text-center text-sm mt-1 text-white/90">Гибкие подписки для любого бизнеса</p>
      </div>

      <div className="px-4 mt-4">
        <div className="flex bg-white rounded-full p-1 shadow-md border border-gray-200 mb-4">
          <button
            onClick={() => setSelectedPlan('6months')}
            className={`flex-1 px-4 py-2.5 rounded-full font-semibold text-sm transition-all ${
              selectedPlan === '6months'
                ? 'bg-orange-500 text-white shadow-md'
                : 'text-gray-600'
            }`}
          >
            6 месяцев
          </button>
          <button
            onClick={() => setSelectedPlan('12months')}
            className={`flex-1 px-4 py-2.5 rounded-full font-semibold text-sm transition-all ${
              selectedPlan === '12months'
                ? 'bg-orange-500 text-white shadow-md'
                : 'text-gray-600'
            }`}
          >
            12 месяцев
          </button>
        </div>

        <div className="space-y-3 mb-4">
          {plans[selectedPlan].map((plan, index) => {
            const isActive = activePlanIndex === index;
            const isHighlighted = plan.isFree ? false : index === plans[selectedPlan].length - 1;
            
            return (
              <div
                key={index}
                onClick={() => setActivePlanIndex(index)}
                className={`relative rounded-3xl px-5 py-4 flex items-center justify-between transition-all cursor-pointer ${
                  isHighlighted
                    ? 'bg-gradient-to-r from-orange-400 to-yellow-400 text-white shadow-xl'
                    : plan.popular
                    ? 'bg-white border-2 border-gray-900 shadow-lg'
                    : 'bg-white border border-gray-300 shadow-sm'
                } ${isActive ? 'ring-4 ring-orange-300' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 bg-gray-900 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
                    <Icon name="Check" size={16} />
                  </div>
                )}
                {isHighlighted && (
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 bg-white text-orange-500 rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
                    <Icon name="Star" size={16} fill="currentColor" />
                  </div>
                )}
                <div className={`flex-1 ${plan.popular || isHighlighted ? 'pl-3' : ''}`}>
                  <h3 className={`font-bold text-base mb-0.5 ${
                    isHighlighted ? 'text-white' : 'text-gray-900'
                  }`}>
                    {plan.name}
                  </h3>
                  <p className={`text-xs ${
                    isHighlighted ? 'text-white/90' : 'text-gray-600'
                  }`}>
                    {plan.description}
                  </p>
                </div>
                <div className="text-right">
                  <div className={`text-2xl font-bold ${
                    isHighlighted ? 'text-white' : 'text-gray-900'
                  }`}>
                    {plan.price} <span className="text-sm font-normal">₽</span>
                  </div>
                  <div className={`text-xs ${
                    isHighlighted ? 'text-white/80' : 'text-gray-500'
                  }`}>
                    {plan.isFree ? '' : '/МЕСЯЦ'}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <Card className="rounded-3xl border-2 border-gray-200 shadow-xl mb-4">
          <CardContent className="p-5">
            <h3 className="font-bold text-lg text-gray-900 mb-4">Включает:</h3>
            <ul className="space-y-3 mb-5">
              {currentPlan.features.map((feature: any, index: number) => {
                const isAvailable = feature.available;
                const text = feature.text;
                return (
                  <li key={index} className="flex items-start">
                    <div className={`rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 ${
                      isAvailable ? 'bg-gray-900' : 'bg-gray-300'
                    }`}>
                      <Icon name={isAvailable ? "Check" : "X"} className="text-white" size={12} />
                    </div>
                    <span className={`text-sm ${isAvailable ? 'text-gray-700' : 'text-gray-400'}`}>{text}</span>
                  </li>
                );
              })}
            </ul>
            <Button
              className="w-full bg-gray-900 text-white hover:bg-gray-800 rounded-full py-6 text-base font-semibold shadow-lg"
              onClick={() => window.open('https://t.me/yourbotname', '_blank')}
            >
              Оформить подписку
            </Button>
          </CardContent>
        </Card>

        <Card className="rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-xl border-0">
          <CardContent className="p-6 text-center">
            <Icon name="Sparkles" className="mx-auto mb-3 text-yellow-300" size={36} />
            <h3 className="font-bold text-lg mb-2">
              Нужен индивидуальный тариф?
            </h3>
            <p className="text-sm text-white/90 mb-4">
              Рассчитаем оптимальное решение для вашего бизнеса
            </p>
            <Button 
              className="w-full bg-white text-gray-900 hover:bg-gray-100 rounded-full py-3 font-semibold shadow-lg"
              onClick={() => window.open('https://t.me/yourbotname', '_blank')}
            >
              Запросить расчет
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
