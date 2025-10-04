import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Advantages() {
  const advantagesList = [
    {
      icon: 'https://cdn.poehali.dev/files/f39461bd-9724-47be-9362-a4631464d743.png',
      title: 'Быстрый старт',
      description: 'Начните работу уже сегодня без закупки оборудования и лицензий. Просто выберите нужную программу 1С и начинайте работать.'
    },
    {
      icon: 'https://cdn.poehali.dev/files/bc931099-356b-4db2-a48e-07d2e419ac72.png',
      title: 'Надежность',
      description: 'Ваши данные надежно защищены и регулярно резервируются на серверах в России. Гарантированная доступность 99.9%.'
    },
    {
      icon: 'https://cdn.poehali.dev/files/4a7707c7-d3cb-4cf6-b55b-97edd0d78127.png',
      title: 'Поддержка',
      description: 'Квалифицированная техническая поддержка 24/7. Наши специалисты помогут с любыми вопросами по работе сервиса.'
    },
    {
      icon: 'https://cdn.poehali.dev/files/eea063f2-7df3-4d0a-841b-b8ed9cb5f274.png',
      title: 'Всегда актуально',
      description: 'Автоматические обновления в рамках подписки. Вам не нужно думать о покупке новых версий — всегда всё самое свежее.'
    },
    {
      icon: 'https://cdn.poehali.dev/files/d1f82b9b-5429-4b0b-acf8-42c1a0cd5091.png',
      title: 'Доступ откуда угодно',
      description: 'Работайте с 1С из офиса, дома или в командировке с любого устройства. Нужен только интернет и браузер.'
    },
    {
      icon: 'https://cdn.poehali.dev/files/96e91cc7-46f1-4b66-b4f9-f8ccf4bbf24e.png',
      title: 'Экономия бюджета',
      description: 'Не тратьте деньги на серверы, ИТ-специалистов и лицензии. Оплачивайте только тот функционал, который вам нужен.'
    }
  ];

  return (
    <section id="advantages" className="py-20 bg-gray-50">
      <div className="max-w-[1980px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
            Почему выбирают 1C Fresh?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Современное решение для бизнеса любого масштаба с максимальной надежностью и удобством
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12">
          {advantagesList.map((item, index) => (
            <div key={index} className="text-center animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
              <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto">
                <img src={item.icon} alt={item.title} className="w-12 h-12 object-contain" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}