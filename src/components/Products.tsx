import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Products() {
  const products = [
    {
      title: '1С:Бухгалтерия 8',
      description: 'Комплексное решение для автоматизации бухгалтерского и налогового учета',
      icon: 'Calculator'
    },
    {
      title: '1С:Зарплата и управление персоналом 8',
      description: 'Автоматизация кадрового учета, расчета зарплаты и управления персоналом',
      icon: 'Users'
    },
    {
      title: '1С:Управление нашей фирмой',
      description: 'Современное решение для комплексной автоматизации малого бизнеса',
      icon: 'Building'
    },
    {
      title: '1С:ERP Управление предприятием',
      description: 'Решение для крупных предприятий с множественными бизнес-процессами',
      icon: 'Factory'
    },
    {
      title: '1С:Розница',
      description: 'Специализированное решение для автоматизации розничной торговли',
      icon: 'ShoppingCart'
    },
    {
      title: '1С:Комплексная автоматизация',
      description: 'Управление финансами, продажами, закупками и производством',
      icon: 'Cog'
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
            Популярные продукты
          </h2>
          <p className="text-xl text-gray-600">
            Все основные конфигурации 1С доступны в облаке с полным функционалом
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-gray-50 to-gray-100 p-8">
                <div className="bg-gradient-to-br from-orange-500 to-indigo-500 rounded-2xl w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={product.icon} className="text-white" size={32} />
                </div>
                <CardTitle className="font-display font-bold text-xl text-gray-900">{product.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <CardDescription className="text-gray-600 text-base leading-relaxed mb-6">
                  {product.description}
                </CardDescription>
                <Button variant="outline" className="w-full border-orange-500 text-orange-500 hover:bg-orange-50">
                  Выбрать тариф
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}