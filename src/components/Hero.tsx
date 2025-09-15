import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Hero() {
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

  return (
    <section className="pt-20 md:pt-24 lg:pt-20 pb-12 md:pb-16 bg-gradient-to-br from-orange-50 via-orange-100 to-indigo-50 relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-indigo-500/10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 lg:mb-6 leading-tight">
              Профессиональные<br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-orange-500 to-indigo-500 bg-clip-text text-transparent">
                подписки на 1C Fresh
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-3 sm:mb-4 md:mb-6 lg:mb-8 leading-relaxed">
              Официальный партнер 1C Fresh.<br className="hidden sm:block" />
              <span className="block sm:inline">Без серверов, без сложных настроек — просто работайте!</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center lg:justify-start">
              <Button 
                size="default" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 w-full sm:w-auto text-sm sm:text-base rounded-[30px]"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Выбрать тариф
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
              <Button variant="outline" size="default" className="border-orange-500 text-orange-500 hover:bg-orange-50 px-4 sm:px-6 md:px-8 py-2 sm:py-3 w-full sm:w-auto text-sm sm:text-base rounded-[30px]">
                Консультация
              </Button>
            </div>
          </div>
          <div className="flex justify-center order-1 lg:order-2 mb-3 sm:mb-4 md:mb-6 lg:mb-0">
            <img 
              src="/img/f9205f3c-fa15-4f45-a4bb-2a473d1a858d.jpg" 
              alt="1C Fresh Solutions" 
              className="w-full max-w-[200px] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl md:shadow-2xl animate-float"
            />
          </div>
        </div>
        
        {/* Advantage Cards in Hero */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mt-6 md:mt-8 lg:mt-12 xl:mt-16">
          {advantages.map((advantage, index) => (
            <Card key={index} className="bg-white/60 backdrop-blur-sm border-0 shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-2 sm:p-3 md:p-4 text-center">
                <div className="bg-orange-100 rounded-full w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 flex items-center justify-center mx-auto mb-1 sm:mb-2 md:mb-3">
                  <Icon name={advantage.icon} className="text-orange-500" size={16} />
                </div>
                <h3 className="font-display font-semibold text-[10px] sm:text-xs md:text-sm text-gray-900 mb-1 leading-tight">{advantage.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}