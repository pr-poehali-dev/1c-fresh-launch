import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function FAQ() {
  const faqs = [
    {
      question: 'Какие версии 1С доступны в сервисе?',
      answer: 'В сервисе доступны все актуальные версии программных продуктов 1С:Предприятие 8, включая основные конфигурации: 1С:Бухгалтерия, 1С:ЗУП, 1С:ERP, 1С:Документооборот и многие другие. Все продукты регулярно обновляются автоматически.'
    },
    {
      question: 'Как происходит миграция моих данных в облако?',
      answer: 'Миграция данных происходит автоматически. Наши специалисты помогут перенести вашу базу данных из локальной установки в облако без потери информации. Процесс обычно занимает от нескольких часов до одного дня.'
    },
    {
      question: 'Какие требования к интернету для комфортной работы?',
      answer: 'Для комфортной работы рекомендуется стабильное подключение к интернету со скоростью от 5 Мбит/с. При более высокой скорости работа будет еще более плавной.'
    },
    {
      question: 'Можно ли расширить функционал или добавить пользователей?',
      answer: 'Да, вы можете в любой момент расширить функционал, добавить новые модули или увеличить количество пользователей. Изменения вступают в силу сразу после оплаты.'
    },
    {
      question: 'Как обеспечивается безопасность моих данных?',
      answer: 'Данные хранятся в защищенных дата-центрах с многоуровневой системой безопасности. Используется шифрование данных, регулярное резервное копирование и защита от несанкционированного доступа.'
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
            
            {/* Rutube Video Embed */}
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
              <iframe 
                src="https://rutube.ru/play/embed/2d92c19297394084e43ab966c8f50a53/"
                frameBorder="0" 
                allow="clipboard-write; autoplay" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
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