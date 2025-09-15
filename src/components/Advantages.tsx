import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Advantages() {
  const advantagesList = [
    {
      icon: 'Zap',
      title: 'Быстрый старт',
      description: 'Начните работу уже сегодня без закупки оборудования и лицензий'
    },
    {
      icon: 'Shield',
      title: 'Надежность',
      description: 'Гарантированная доступность 99.9% и защита данных в российских ЦОД'
    },
    {
      icon: 'HeadphonesIcon',
      title: 'Поддержка',
      description: 'Квалифицированная техническая поддержка 24/7 от наших специалистов'
    },
    {
      icon: 'RefreshCw',
      title: 'Всегда актуально',
      description: 'Автоматические обновления — всегда свежие версии программ'
    },
    {
      icon: 'Globe',
      title: 'Доступно везде',
      description: 'Работайте из любого места с любого устройства через браузер'
    },
    {
      icon: 'DollarSign',
      title: 'Экономия бюджета',
      description: 'Оплачивайте только нужный функционал без затрат на инфраструктуру'
    }
  ];

  return (
    <section id="advantages" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
            Почему выбирают 1C Fresh?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Современное решение для бизнеса любого масштаба с максимальной надежностью и удобством
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantagesList.map((item, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-orange-500 to-indigo-500 rounded-2xl w-14 h-14 flex items-center justify-center mb-4">
                  <Icon name={item.icon} className="text-white" size={28} />
                </div>
                <h3 className="font-display font-semibold text-xl text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}