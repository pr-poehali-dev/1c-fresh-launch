import { useState } from 'react';

export default function HowToStart() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const steps = [
    {
      number: '1',
      title: 'Выберите тариф',
      description: 'Подберите оптимальный тарифный план для вашего бизнеса'
    },
    {
      number: '2',
      title: 'Оставьте заявку',
      description: 'Заполните форму или позвоните нам для оформления подписки'
    },
    {
      number: '3',
      title: 'Получите доступ',
      description: 'Мы настроим ваш аккаунт и отправим данные для входа'
    },
    {
      number: '4',
      title: 'Начните работать',
      description: 'Войдите в систему через браузер и приступайте к работе'
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
    
    if (isLeftSwipe && currentSlide < steps.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
    
    if (isRightSwipe && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
    
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1980px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-4 uppercase">
            Как начать работу
          </h2>
          <p className="text-lg text-gray-500">
            Всего несколько простых шагов для начала работы с 1С в облаке
          </p>
        </div>
        
        {/* Desktop version */}
        <div className="hidden lg:block relative max-w-6xl mx-auto">
          {/* Connecting line */}
          <div className="absolute top-16 left-0 right-0 h-[2px] bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400" style={{margin: '0 12.5%'}}></div>
          
          <div className="grid grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mb-6 flex justify-center">
                  <div 
                    className="rounded-full w-32 h-32 flex items-center justify-center text-white font-bold text-5xl transition-transform hover:scale-105"
                    style={{
                      background: index === 0 
                        ? 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)' 
                        : index === 1 
                        ? 'linear-gradient(135deg, #FDE68A 0%, #FCD34D 100%)' 
                        : index === 2 
                        ? 'linear-gradient(135deg, #FCD34D 0%, #FBBF24 100%)' 
                        : 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)'
                    }}
                  >
                    {step.number}
                  </div>
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-3 uppercase">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile carousel */}
        <div className="lg:hidden">
          <div 
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {steps.map((step, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="text-center">
                    <div className="mb-6 flex justify-center">
                      <div 
                        className="rounded-full w-32 h-32 flex items-center justify-center text-white font-bold text-5xl"
                        style={{
                          background: index === 0 
                            ? 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)' 
                            : index === 1 
                            ? 'linear-gradient(135deg, #FDE68A 0%, #FCD34D 100%)' 
                            : index === 2 
                            ? 'linear-gradient(135deg, #FCD34D 0%, #FBBF24 100%)' 
                            : 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)'
                        }}
                      >
                        {step.number}
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-3 uppercase">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
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