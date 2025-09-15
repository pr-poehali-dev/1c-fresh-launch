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
    <section className="pt-20 pb-16 bg-gradient-to-br from-orange-50 via-orange-100 to-indigo-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-indigo-500/10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
              Профессиональные<br />
              <span className="bg-gradient-to-r from-orange-500 to-indigo-500 bg-clip-text text-transparent">
                подписки на 1C Fresh
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Официальный партнер 1C Fresh.<br />
              Без серверов, без сложных настроек — просто работайте!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                Выбрать тариф
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3">
                Консультация
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src="/img/f9205f3c-fa15-4f45-a4bb-2a473d1a858d.jpg" 
              alt="1C Fresh Solutions" 
              className="w-full max-w-lg rounded-3xl shadow-2xl animate-float"
            />
          </div>
        </div>
        
        {/* Advantage Cards in Hero */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {advantages.map((advantage, index) => (
            <Card key={index} className="bg-white/60 backdrop-blur-sm border-0 shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-4 text-center">
                <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Icon name={advantage.icon} className="text-orange-500" size={24} />
                </div>
                <h3 className="font-display font-semibold text-sm text-gray-900 mb-1">{advantage.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}