import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function FAQ() {
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
  );
}