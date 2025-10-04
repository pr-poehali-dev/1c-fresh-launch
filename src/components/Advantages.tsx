import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Advantages() {
  const [activeIndex, setActiveIndex] = useState(0);

  const advantagesList = [
    {
      icon: 'https://cdn.poehali.dev/files/f39461bd-9724-47be-9362-a4631464d743.png',
      title: 'Быстрый старт',
      description: 'Начните работу уже сегодня без закупки оборудования и лицензий. Просто выберите нужную программу 1С и начинайте работать.',
      image: 'https://1cfresh.com/resources/images/content/why/slide-1.jpg'
    },
    {
      icon: 'https://cdn.poehali.dev/files/bc931099-356b-4db2-a48e-07d2e419ac72.png',
      title: 'Надежность',
      description: 'Ваши данные надежно защищены и регулярно резервируются на серверах в России. Гарантированная доступность 99.9%.',
      image: 'https://1cfresh.com/resources/images/content/why/slide-2.jpg'
    },
    {
      icon: 'https://cdn.poehali.dev/files/4a7707c7-d3cb-4cf6-b55b-97edd0d78127.png',
      title: 'Поддержка',
      description: 'Квалифицированная техническая поддержка 24/7. Наши специалисты помогут с любыми вопросами по работе сервиса.',
      image: 'https://1cfresh.com/resources/images/content/why/slide-3.jpg'
    },
    {
      icon: 'https://cdn.poehali.dev/files/eea063f2-7df3-4d0a-841b-b8ed9cb5f274.png',
      title: 'Всегда актуально',
      description: 'Автоматические обновления в рамках подписки. Вам не нужно думать о покупке новых версий — всегда всё самое свежее.',
      image: 'https://1cfresh.com/resources/images/content/why/slide-4.jpg'
    },
    {
      icon: 'https://cdn.poehali.dev/files/d1f82b9b-5429-4b0b-acf8-42c1a0cd5091.png',
      title: 'Доступ откуда угодно',
      description: 'Работайте с 1С из офиса, дома или в командировке с любого устройства. Нужен только интернет и браузер.',
      image: 'https://1cfresh.com/resources/images/content/why/slide-5.jpg'
    },
    {
      icon: 'https://cdn.poehali.dev/files/96e91cc7-46f1-4b66-b4f9-f8ccf4bbf24e.png',
      title: 'Экономия бюджета',
      description: 'Не тратьте деньги на серверы, ИТ-специалистов и лицензии. Оплачивайте только тот функционал, который вам нужен.',
      image: 'https://1cfresh.com/resources/images/content/why/slide-6.jpg'
    }
  ];

  return (
    <section id="advantages" className="py-20 bg-white">
      <div className="max-w-[1980px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
            Почему выбирают 1C Fresh?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Современное решение для бизнеса любого масштаба с максимальной надежностью и удобством
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Image slider on the left */}
          <div className="order-2 lg:order-1 overflow-hidden" style={{ borderTopRightRadius: '30px', borderBottomRightRadius: '30px' }}>
            <div className="relative w-full aspect-[4/3]">
              {advantagesList.map((item, index) => (
                <img
                  key={index}
                  src={item.image}
                  alt={item.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    index === activeIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* List on the right */}
          <div className="order-1 lg:order-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {advantagesList.map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                className={`text-center p-4 rounded-2xl transition-all duration-300 cursor-pointer ${
                  index === activeIndex ? 'bg-gray-50 shadow-md' : 'hover:bg-gray-50'
                }`}
              >
                <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <img src={item.icon} alt={item.title} className="w-10 h-10 object-contain" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}