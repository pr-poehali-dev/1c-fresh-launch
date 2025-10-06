import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function TelegramProducts() {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const products = [
    {
      title: '1С:Бухгалтерия 8',
      description: 'Комплексное решение для автоматизации бухгалтерского и налогового учета.',
      fullDescription: 'Программа 1с:Бухгалтерия 8 предназначена для автоматизации бухгалтерского и налогового учета в организациях, осуществляющих любые виды коммерческой деятельности.',
      image: 'https://cdn.poehali.dev/files/04e368c8-f4e0-434b-8b9b-2444d2ea8e45.png',
      icon: 'Calculator',
      features: [
        'Ведение бухгалтерского учета',
        'Расчет налогов и взносов',
        'Формирование отчетности',
        'Банк и касса',
        'Основные средства',
        'Товарно-материальные ценности'
      ]
    },
    {
      title: '1С:Зарплата и управление персоналом 8',
      description: 'Автоматизация кадрового учета, расчета заработной платы и кадрового делопроизводства.',
      fullDescription: 'Программа предназначена для автоматизации кадрового учета и расчета заработной платы в организациях различных форм собственности.',
      image: 'https://cdn.poehali.dev/files/d4d52983-a447-47da-8365-55c422fe5030.png',
      icon: 'Users',
      features: [
        'Кадровый учет сотрудников',
        'Расчет заработной платы',
        'Табельный учет рабочего времени',
        'Расчет отпусков и больничных',
        'Персонифицированный учет',
        'Формирование кадровых документов'
      ]
    },
    {
      title: '1С:Управление нашей фирмой',
      description: 'Современное решение для комплексной автоматизации малого бизнеса.',
      fullDescription: 'Простое и удобное решение для автоматизации учета и управления в малом бизнесе.',
      image: 'https://cdn.poehali.dev/files/f110eb28-cebc-46d9-af7a-9343e2c02271.png',
      icon: 'Building',
      features: [
        'Простой интерфейс',
        'Учет товаров и услуг',
        'Работа с контрагентами',
        'Денежные операции',
        'Базовая отчетность',
        'Управление задачами'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white pb-6">
      <div className="bg-gradient-to-r from-orange-500 to-indigo-500 text-white px-4 py-6 sticky top-0 z-10 shadow-lg">
        <h1 className="text-2xl font-bold text-center">Популярные продукты</h1>
        <p className="text-center text-sm mt-1 text-white/90">Все основные конфигурации 1С в облаке</p>
      </div>

      <div className="px-4 mt-4 space-y-4">
        {products.map((product, index) => (
          <Card 
            key={index} 
            className="overflow-hidden border-2 border-gray-200 rounded-3xl shadow-lg"
          >
            <div 
              className="aspect-[16/9] overflow-hidden relative cursor-pointer"
              onClick={() => setSelectedProduct(selectedProduct === index ? null : index)}
            >
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-gradient-to-br from-orange-500 to-indigo-500 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                <Icon name={product.icon} className="text-white" size={20} />
              </div>
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center">
                <Icon 
                  name={selectedProduct === index ? "ChevronUp" : "ChevronDown"} 
                  size={20} 
                  className="text-gray-700"
                />
              </div>
            </div>

            <CardContent className="p-4">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                {product.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                {product.description}
              </p>

              {selectedProduct === index && (
                <div className="mt-4 pt-4 border-t border-gray-200 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {product.fullDescription}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">
                      Основные возможности:
                    </h4>
                    <ul className="space-y-1.5">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <Icon name="Check" className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={14} />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              <div className="flex gap-2 mt-4">
                <Button 
                  className="flex-1 bg-gradient-to-r from-orange-500 to-indigo-500 hover:from-orange-600 hover:to-indigo-600 text-white rounded-full font-medium shadow-md"
                  onClick={() => window.open('https://t.me/yourbotname', '_blank')}
                >
                  Выбрать тариф
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="px-4 mt-6">
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-3xl p-6 text-center shadow-xl">
          <Icon name="Headphones" className="mx-auto mb-3 text-orange-400" size={32} />
          <h3 className="font-bold text-lg mb-2">Нужна консультация?</h3>
          <p className="text-sm text-white/80 mb-4">Наши специалисты помогут подобрать решение</p>
          <Button 
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-full w-full font-medium"
            onClick={() => window.open('tel:+73422700001', '_self')}
          >
            <Icon name="Phone" size={16} className="mr-2" />
            Позвонить
          </Button>
        </div>
      </div>
    </div>
  );
}
