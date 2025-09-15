import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [selectedPlan, setSelectedPlan] = useState('6months');

  const advantages = [
    {
      icon: 'Shield',
      title: 'Официальный партнер',
      description: 'Работаем напрямую с 1C, гарантируем качество и надежность сервиса'
    },
    {
      icon: 'Clock',
      title: 'Поддержка 24/7',
      description: 'Круглосуточная техническая поддержка от сертифицированных специалистов'
    },
    {
      icon: 'Lock',
      title: 'Безопасность данных',
      description: 'Надежная защита и регулярное резервное копирование в российских ЦОД'
    },
    {
      icon: 'RefreshCw',
      title: 'Автообновления',
      description: 'Всегда актуальные версии программ без дополнительных затрат'
    }
  ];

  const products = [
    {
      title: '1С:Бухгалтерия 8',
      description: 'Комплексное решение для автоматизации бухгалтерского и налогового учета',
      icon: 'Calculator'
    },
    {
      title: '1С:Зарплата и управление персоналом 8',
      description: 'Автоматизация кадрового учета, расчета зарплаты и управления персоналом',
      icon: 'Users'
    },
    {
      title: '1С:Управление нашей фирмой',
      description: 'Современное решение для комплексной автоматизации малого бизнеса',
      icon: 'Building'
    },
    {
      title: '1С:ERP Управление предприятием',
      description: 'Решение для крупных предприятий с множественными бизнес-процессами',
      icon: 'Factory'
    },
    {
      title: '1С:Розница',
      description: 'Специализированное решение для автоматизации розничной торговли',
      icon: 'ShoppingCart'
    },
    {
      title: '1С:Комплексная автоматизация',
      description: 'Управление финансами, продажами, закупками и производством',
      icon: 'Cog'
    }
  ];

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

  const steps = [
    {
      step: '01',
      title: 'Выберите тариф',
      description: 'Подберите оптимальный тарифный план для вашего бизнеса'
    },
    {
      step: '02',
      title: 'Оставьте заявку',
      description: 'Заполните форму или позвоните нам для оформления подписки'
    },
    {
      step: '03',
      title: 'Получите доступ',
      description: 'Мы настроим ваш аккаунт и отправим данные для входа'
    },
    {
      step: '04',
      title: 'Начните работать',
      description: 'Войдите в систему через браузер и приступайте к работе'
    }
  ];

  const faqs = [
    {
      question: 'Для чего нужен 1C Fresh?',
      answer: 'Сервис 1C Fresh предоставляет доступ к программам 1С через интернет без необходимости покупки и установки серверов. Это удобно, экономично и всегда актуально.'
    },
    {
      question: 'Есть ли пробный период?',
      answer: 'Да, мы предоставляем 14-дневный бесплатный пробный период для большинства тарифов, чтобы вы могли оценить возможности сервиса.'
    },
    {
      question: 'Как получить поддержку?',
      answer: 'Наша служба поддержки работает 24/7. Вы можете обратиться через чат на сайте, по телефону или электронной почте.'
    },
    {
      question: 'Безопасны ли мои данные?',
      answer: 'Абсолютно! Ваши данные хранятся в защищенных российских дата-центрах с регулярным резервным копированием и соответствуют всем требованиям безопасности.'
    },
    {
      question: 'Можно ли изменить тариф?',
      answer: 'Да, вы можете изменить тарифный план в любое время в зависимости от потребностей вашего бизнеса.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-display font-bold bg-gradient-to-r from-orange-500 to-indigo-500 bg-clip-text text-transparent">
                1C FRESH
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#advantages" className="text-gray-600 hover:text-orange-500 transition-colors">Преимущества</a>
              <a href="#products" className="text-gray-600 hover:text-orange-500 transition-colors">Продукты</a>
              <a href="#pricing" className="text-gray-600 hover:text-orange-500 transition-colors">Тарифы</a>
              <a href="#faq" className="text-gray-600 hover:text-orange-500 transition-colors">FAQ</a>
              <a href="#contact" className="text-gray-600 hover:text-orange-500 transition-colors">Контакты</a>
            </div>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white">
              <Icon name="Phone" size={16} className="mr-2" />
              +7 958 240 00 10
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-orange-50 via-orange-100 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-indigo-500/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
                Профессиональные<br />
                <span className="bg-gradient-to-r from-orange-500 to-indigo-500 bg-clip-text text-transparent">
                  подписки на 1C Fresh
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Официальный партнер 1C Fresh.<br />
                Без серверов, без сложных настроек — просто работайте!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                  Выбрать тариф
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3">
                  Консультация
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="/img/f9205f3c-fa15-4f45-a4bb-2a473d1a858d.jpg" 
                alt="1C Fresh Solutions" 
                className="w-full max-w-lg rounded-3xl shadow-2xl animate-float"
              />
            </div>
          </div>
          
          {/* Advantage Cards in Hero */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
            {advantages.map((advantage, index) => (
              <Card key={index} className="bg-white/60 backdrop-blur-sm border-0 shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <Icon name={advantage.icon} className="text-orange-500" size={24} />
                  </div>
                  <h3 className="font-display font-semibold text-sm text-gray-900 mb-1">{advantage.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Почему выбирают 1C Fresh?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Современное решение для бизнеса любого масштаба с максимальной надежностью и удобством
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'Zap',
                title: 'Быстрый старт',
                description: 'Начните работу уже сегодня без закупки оборудования и лицензий'
              },
              {
                icon: 'Shield',
                title: 'Надежность',
                description: 'Гарантированная доступность 99.9% и защита данных в российских ЦОД'
              },
              {
                icon: 'HeadphonesIcon',
                title: 'Поддержка',
                description: 'Квалифицированная техническая поддержка 24/7 от наших специалистов'
              },
              {
                icon: 'RefreshCw',
                title: 'Всегда актуально',
                description: 'Автоматические обновления — всегда свежие версии программ'
              },
              {
                icon: 'Globe',
                title: 'Доступно везде',
                description: 'Работайте из любого места с любого устройства через браузер'
              },
              {
                icon: 'DollarSign',
                title: 'Экономия бюджета',
                description: 'Оплачивайте только нужный функционал без затрат на инфраструктуру'
              }
            ].map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-orange-500 to-indigo-500 rounded-2xl w-14 h-14 flex items-center justify-center mb-4">
                    <Icon name={item.icon} className="text-white" size={28} />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Популярные продукты
            </h2>
            <p className="text-xl text-gray-600">
              Все основные конфигурации 1С доступны в облаке с полным функционалом
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardHeader className="bg-gradient-to-br from-gray-50 to-gray-100 p-8">
                  <div className="bg-gradient-to-br from-orange-500 to-indigo-500 rounded-2xl w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon name={product.icon} className="text-white" size={32} />
                  </div>
                  <CardTitle className="font-display font-bold text-xl text-gray-900">{product.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <CardDescription className="text-gray-600 text-base leading-relaxed mb-6">
                    {product.description}
                  </CardDescription>
                  <Button variant="outline" className="w-full border-orange-500 text-orange-500 hover:bg-orange-50">
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
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
                  <Button className={`w-full ${plan.popular ? 'bg-orange-500 hover:bg-orange-600' : 'bg-gray-900 hover:bg-gray-800'} text-white`}>
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Card className="inline-block p-8 bg-gradient-to-r from-orange-500 to-indigo-500 text-white">
              <h3 className="font-display font-bold text-xl mb-2">Нужен индивидуальный тариф?</h3>
              <p className="mb-4">Рассчитаем оптимальное решение для вашего бизнеса</p>
              <Button variant="secondary" className="bg-white text-orange-500 hover:bg-gray-100">
                Запросить расчет
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Start Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Как начать работу
            </h2>
            <p className="text-xl text-gray-600">
              Всего несколько простых шагов для начала работы с 1С в облаке
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="bg-gradient-to-br from-orange-500 to-indigo-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-display font-bold text-xl">{step.step}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-orange-200 to-indigo-200"></div>
                  )}
                </div>
                <h3 className="font-display font-semibold text-xl text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Частые вопросы
            </h2>
            <p className="text-xl text-gray-600">
              Ответы на наиболее популярные вопросы о сервисе 1C Fresh
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-display font-semibold text-lg hover:text-orange-500 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-gray-600">
              Готовы ответить на ваши вопросы и помочь с выбором тарифа
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="font-display font-bold text-2xl text-gray-900">
                  Оставьте заявку
                </CardTitle>
                <CardDescription>
                  Заполните форму и мы свяжемся с вами в течение часа
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <form className="space-y-4">
                  <Input placeholder="Ваше имя" />
                  <Input type="email" placeholder="Email" />
                  <Input type="tel" placeholder="Телефон" />
                  <Textarea placeholder="Сообщение" rows={4} />
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-display font-bold text-xl text-gray-900 mb-6">Контактная информация</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Icon name="Phone" className="text-orange-500 mr-3 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900">Телефон</p>
                      <p className="text-gray-600">+7 958 240 00 10</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Icon name="Mail" className="text-orange-500 mr-3 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">info@1cfresh-partner.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Icon name="Clock" className="text-orange-500 mr-3 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900">Режим работы</p>
                      <p className="text-gray-600">Пн-Пт: 9:00-18:00<br />Поддержка: 24/7</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Icon name="MapPin" className="text-orange-500 mr-3 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900">Адрес</p>
                      <p className="text-gray-600">г. Москва, ул. Примерная, 123</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="p-6 bg-gradient-to-br from-orange-50 to-indigo-50 border-orange-200">
                <CardContent className="p-0">
                  <h4 className="font-display font-semibold text-lg text-gray-900 mb-2">
                    Нужна консультация?
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Наши специалисты помогут подобрать оптимальное решение для вашего бизнеса
                  </p>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    <Icon name="Phone" size={16} className="mr-2" />
                    Заказать звонок
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-display font-bold bg-gradient-to-r from-orange-500 to-indigo-500 bg-clip-text text-transparent mb-4">
                1C FRESH
              </div>
              <p className="text-gray-400 mb-4">
                Официальный партнер 1C Fresh. Надежные облачные решения для вашего бизнеса.
              </p>
              <div className="flex space-x-4">
                <Icon name="Phone" className="text-orange-500" size={20} />
                <Icon name="Mail" className="text-orange-500" size={20} />
                <Icon name="MessageCircle" className="text-orange-500" size={20} />
              </div>
            </div>
            
            <div>
              <h4 className="font-display font-semibold text-lg mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">1С:Бухгалтерия</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">1С:Зарплата и кадры</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">1С:Управление фирмой</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">1С:ERP</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-display font-semibold text-lg mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Новости</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Партнерство</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Вакансии</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-display font-semibold text-lg mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">База знаний</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Обучение</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Контакты</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Официальный партнер 1C Fresh. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}