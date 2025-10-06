import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function TelegramFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Для чего нужен 1cfresh.com?',
      answer: '1cfresh.com — это сервис для работы с программами 1С через интернет. Вам не нужно покупать серверы, устанавливать программы и нанимать ИТ-специалистов. Просто выберите нужную конфигурацию 1С, и начинайте работать из любой точки мира через браузер.'
    },
    {
      question: 'Как зарегистрироваться?',
      answer: 'Для регистрации оставьте заявку на сайте или позвоните нам. Наши специалисты помогут подобрать подходящий тариф, настроят ваш аккаунт и предоставят данные для входа. Процесс регистрации занимает всего несколько минут.'
    },
    {
      question: 'Подойдет ли это для моего бизнеса?',
      answer: '1C Fresh подходит для бизнеса любого масштаба: от индивидуальных предпринимателей до крупных компаний. Сервис используют организации в торговле, производстве, сфере услуг и других отраслях. Выбирайте нужную конфигурацию и масштабируйте по мере роста.'
    },
    {
      question: 'Каковы преимущества по сравнению с использованием локальной программы?',
      answer: 'Главные преимущества: не нужно покупать серверы и лицензии, не требуется обслуживание оборудования, автоматические обновления, доступ из любой точки мира, надежное резервное копирование, техподдержка 24/7. Вы платите только за то, что используете.'
    },
    {
      question: 'Каковы отличия от работы с локальной программой?',
      answer: 'Основное отличие — работа через интернет-браузер вместо установленной программы. Интерфейс и функционал остаются теми же. Вам нужен только стабильный интернет. Все данные надежно защищены и хранятся в облаке с автоматическим резервным копированием.'
    },
    {
      question: 'Сколько это стоит?',
      answer: 'Стоимость зависит от выбранной конфигурации 1С и количества пользователей. Вы платите ежемесячную подписку без единовременных затрат на оборудование и лицензии. Точную цену уточняйте у наших менеджеров — они помогут подобрать оптимальный тариф для вашего бизнеса.'
    },
    {
      question: 'Список обслуживающих организаций сервиса 1cfresh.com',
      answer: 'Мы являемся официальным партнером 1C Fresh. Наша компания предоставляет полный спектр услуг: подключение, настройка, миграция данных, обучение персонала и техническая поддержка 24/7. Свяжитесь с нами для получения подробной консультации.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white pb-6">
      <div className="bg-gradient-to-r from-orange-500 to-indigo-500 text-white px-4 py-6 sticky top-0 z-10 shadow-lg">
        <h1 className="text-2xl font-bold text-center">Частые вопросы</h1>
        <p className="text-center text-sm mt-1 text-white/90">Ответы на популярные вопросы о сервисе</p>
      </div>

      <div className="px-4 mt-4 space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          
          return (
            <Card 
              key={index}
              className="overflow-hidden border-2 border-gray-200 rounded-3xl shadow-md transition-all"
            >
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-4 flex items-start justify-between gap-3"
                >
                  <span className="flex-1 font-semibold text-base text-gray-900 leading-tight">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    isOpen 
                      ? 'bg-orange-500 rotate-180' 
                      : 'bg-yellow-400'
                  }`}>
                    <Icon name="ChevronDown" className="text-white" size={20} />
                  </div>
                </button>
                
                {isOpen && (
                  <div className="px-4 pb-4 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="pt-3 border-t border-gray-200">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="px-4 mt-6">
        <Card className="rounded-3xl bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-xl border-0">
          <CardContent className="p-6 text-center">
            <Icon name="MessageCircle" className="mx-auto mb-3 text-orange-400" size={36} />
            <h3 className="font-bold text-lg mb-2">Не нашли ответ?</h3>
            <p className="text-sm text-white/80 mb-4">
              Наши специалисты ответят на любые вопросы
            </p>
            <div className="flex gap-3">
              <button 
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white rounded-full py-3 px-4 font-semibold shadow-lg flex items-center justify-center gap-2 transition-all"
                onClick={() => window.open('tel:+73422700001', '_self')}
              >
                <Icon name="Phone" size={18} />
                <span>Позвонить</span>
              </button>
              <button 
                className="flex-1 bg-white/10 hover:bg-white/20 text-white rounded-full py-3 px-4 font-semibold shadow-lg flex items-center justify-center gap-2 transition-all border border-white/20"
                onClick={() => window.open('mailto:ivanickiy@centerai.tech', '_self')}
              >
                <Icon name="Mail" size={18} />
                <span>Написать</span>
              </button>
            </div>
          </CardContent>
        </Card>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500 mb-2">Поддержка 24/7</p>
          <a 
            href="tel:88003337227" 
            className="text-lg font-bold text-orange-600 hover:text-orange-700 transition-colors"
          >
            8 (800) 333-72-27
          </a>
        </div>
      </div>
    </div>
  );
}
