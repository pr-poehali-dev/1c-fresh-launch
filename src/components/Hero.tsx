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
    <section className="pt-20 md:pt-24 lg:pt-20 pb-12 md:pb-16 relative overflow-hidden min-h-screen flex items-center">
      {/* Organic Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-orange-400 to-red-400 opacity-90"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-200 rounded-full blur-3xl opacity-60 -translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-300 rounded-full blur-3xl opacity-60 translate-x-20 translate-y-20"></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full z-10">
        <div className="text-center">
          {/* Logo Icon */}
          <div className="flex justify-center mb-6">
            <div className="text-white text-6xl md:text-8xl font-bold">
              1C
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white mb-4 md:mb-6 leading-tight">
            ПРОФЕССИОНАЛЬНЫЕ<br />
            ПОДПИСКИ НА 1C FRESH
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed">
            Официальный партнер 1C Fresh.<br />
            Без серверов, без сложных настроек — просто работайте!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-orange-500 hover:bg-orange-50 px-8 py-4 text-lg font-semibold rounded-[30px] shadow-lg hover:shadow-xl transition-all"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Выбрать тариф
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-4 text-lg font-semibold rounded-[30px] transition-all"
            >
              Консультация
            </Button>
          </div>
        </div>
        
        {/* Advantage Cards in Hero */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-16 lg:mt-20">
          {advantages.map((advantage, index) => (
            <Card key={index} className="bg-white/20 backdrop-blur-md border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/30">
              <CardContent className="p-4 md:p-6 text-center">
                <div className="bg-white/30 backdrop-blur-sm rounded-full w-12 md:w-16 h-12 md:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Icon name={advantage.icon} className="text-white" size={24} />
                </div>
                <h3 className="font-display font-semibold text-sm md:text-base text-white mb-2 leading-tight">{advantage.title}</h3>
                <p className="text-xs md:text-sm text-white/80 leading-relaxed">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}