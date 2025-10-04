import { useState, useEffect } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function FAQ() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
  const videos = [
    'https://rutube.ru/play/embed/65cbf55962ba91cdd6e5bf428f9129e5/',
    'https://rutube.ru/play/embed/a7caca849e981fb92a567e5694057359/',
    'https://rutube.ru/play/embed/cad31522e38cb1a6d5c6c2b52a8945e9/'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [videos.length]);

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

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-[1980px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left side - Title and Video */}
          <div>
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4 uppercase">
              Частые вопросы
            </h2>
            <p className="text-gray-500 mb-8">
              Ответы на наиболее популярные вопросы о сервисе amoCRM
            </p>
            
            {/* Rutube Video Embed - hidden on mobile, rotating videos on desktop */}
            <div className="hidden lg:block aspect-video bg-gray-100 rounded-lg overflow-hidden relative">
              <iframe 
                key={currentVideoIndex}
                src={videos[currentVideoIndex]}
                frameBorder="0" 
                allow="clipboard-write; autoplay" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
              
              {/* Video indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {videos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentVideoIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentVideoIndex 
                        ? 'bg-white w-6' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Видео ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right side - FAQ Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-b border-gray-200 pb-4"
                >
                  <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline group flex items-start justify-between gap-4">
                    <span className="flex-1">{faq.question}</span>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center group-data-[state=open]:rotate-180 transition-transform">
                      <Icon name="Minus" className="text-white" size={20} />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 leading-relaxed pt-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}