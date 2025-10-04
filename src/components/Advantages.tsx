import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Advantages() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const advantagesList = [
    {
      icon: 'https://cdn.poehali.dev/files/f39461bd-9724-47be-9362-a4631464d743.png',
      title: 'Быстрый старт',
      description: 'Начните работу уже сегодня без закупки оборудования и лицензий. Просто выберите нужную программу 1С и начинайте работать.',
      image: 'https://cdn.poehali.dev/files/d5aeb505-189a-4ef9-9b56-8e210dd6df06.png'
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

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe && activeIndex < advantagesList.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
    
    if (isRightSwipe && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
    
    setTouchStart(0);
    setTouchEnd(0);
  };

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
        
        {/* Desktop version */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 items-center">
          {/* Static image on the left */}
          <div className="order-2 lg:order-1 overflow-hidden" style={{ borderTopRightRadius: '30px', borderBottomRightRadius: '30px' }}>
            <div className="relative w-full aspect-[4/3]">
              <img
                src={advantagesList[0].image}
                alt="1C Fresh"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* List on the right */}
          <div className="order-1 lg:order-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {advantagesList.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 hover:bg-gray-50"
              >
                <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <img src={item.icon} alt={item.title} className="w-7 h-7 object-contain" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile slider */}
        <div className="lg:hidden">
          <div 
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {advantagesList.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="text-center p-6">
                    <CardContent className="p-0">
                      <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mb-4 mx-auto">
                        <img src={item.icon} alt={item.title} className="w-12 h-12 object-contain" />
                      </div>
                      <h3 className="font-bold text-xl text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {advantagesList.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-orange-500 w-8' 
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}