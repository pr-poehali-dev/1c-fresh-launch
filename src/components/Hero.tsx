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
    <section className="pt-16 md:pt-20 pb-12 md:pb-16 bg-gradient-to-br from-orange-50 via-orange-100 to-indigo-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-indigo-500/10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              Профессиональные<br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-orange-500 to-indigo-500 bg-clip-text text-transparent">
                подписки на 1C Fresh
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed px-4 lg:px-0">
              Официальный партнер 1C Fresh.<br className="hidden sm:block" />
              <span className="block sm:inline">Без серверов, без сложных настроек — просто работайте!</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start px-4 lg:px-0">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-6 md:px-8 py-3 w-full sm:w-auto">
                Выбрать тариф
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-orange-500 text-orange-500 hover:bg-orange-50 px-6 md:px-8 py-3 w-full sm:w-auto">
                Консультация
              </Button>
            </div>
          </div>
          <div className="flex justify-center order-1 lg:order-2 mb-6 lg:mb-0">
            <img 
              src="/img/f9205f3c-fa15-4f45-a4bb-2a473d1a858d.jpg" 
              alt="1C Fresh Solutions" 
              className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl animate-float"
            />
          </div>
        </div>
        
        {/* Advantage Cards in Hero */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mt-8 md:mt-12 lg:mt-16">
          {advantages.map((advantage, index) => (
            <Card key={index} className="bg-white/60 backdrop-blur-sm border-0 shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-3 md:p-4 text-center">
                <div className="bg-orange-100 rounded-full w-10 md:w-12 h-10 md:h-12 flex items-center justify-center mx-auto mb-2 md:mb-3">
                  <Icon name={advantage.icon} className="text-orange-500" size={20} />
                </div>
                <h3 className="font-display font-semibold text-xs md:text-sm text-gray-900 mb-1 leading-tight">{advantage.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}