import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products = [
    {
      title: '1С:Бухгалтерия 8',
      description: 'Комплексное решение для автоматизации бухгалтерского и налогового учета.',
      fullDescription: 'Программа 1С:Бухгалтерия 8 предназначена для автоматизации бухгалтерского и налогового учета в организациях, осуществляющих любые виды коммерческой деятельности. Ведение учета в программе организовано в соответствии с требованиями российского законодательства. Программа обеспечивает ведение учета хозяйственной деятельности в соответствии с требованиями российского законодательства: ведение книги покупок и книги продаж, формирование деклараций по НДС, налогу на прибыль, расчет налога на имущество и земельного налога.',
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
      fullDescription: 'Программа предназначена для автоматизации кадрового учета и расчета заработной платы в организациях различных форм собственности. Обеспечивает решение задач комплексной автоматизации расчета заработной платы и управления персоналом, включая ведение кадрового учета, табельного учета, расчета всех видов оплат и удержаний сотрудников, налогов и взносов.',
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
      title: '1С:ERP Управление предприятием 2',
      description: 'Комплексное решение для управления ресурсами предприятия различных масштабов.',
      fullDescription: 'Простое и удобное решение для автоматизации учета и управления в малом бизнесе. Программа позволяет вести учет товаров и услуг, контрагентов, денежных средств, а также формировать необходимые документы и отчеты. Подходит для организаций с небольшим объемом операций.',
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

  const openModal = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-[1980px] mx-auto px-4 sm:px-6 lg:px-8">
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
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 rounded-[30px]">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-display font-bold text-lg text-gray-900 mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {product.description}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-gray-900 text-gray-900 hover:bg-gray-50 rounded-[30px] font-medium"
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Выбрать тариф
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 z-10 rounded-full bg-gray-100 hover:bg-gray-200 p-2 transition-colors"
            >
              <Icon name="X" size={20} />
            </button>
            
            {selectedProduct && (
              <>
                <DialogHeader className="pr-12">
                  <DialogTitle className="text-2xl font-display font-bold text-gray-900">
                    {selectedProduct.title}
                  </DialogTitle>
                  <DialogDescription className="text-lg text-gray-600">
                    {selectedProduct.description}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="grid md:grid-cols-2 gap-8 mt-6">
                  <div className="order-2 md:order-1">
                    <h3 className="font-display font-bold text-xl text-gray-900 mb-4">
                      Подробное описание
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {selectedProduct.fullDescription}
                    </p>
                    
                    <h4 className="font-display font-semibold text-lg text-gray-900 mb-4">
                      Основные возможности:
                    </h4>
                    <ul className="space-y-2">
                      {selectedProduct.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <Icon name="Check" className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={16} />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-8">
                      <Button 
                        className="bg-orange-500 hover:bg-orange-600 text-white rounded-[30px] px-8"
                        onClick={() => {
                          closeModal();
                          document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        Выбрать тариф
                        <Icon name="ArrowRight" size={16} className="ml-2" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="order-1 md:order-2">
                    <div className="bg-gradient-to-br from-orange-50 to-indigo-50 rounded-2xl p-8 text-center">
                      <div className="bg-gradient-to-br from-orange-500 to-indigo-500 rounded-3xl w-32 h-32 flex items-center justify-center mx-auto mb-6">
                        <Icon name={selectedProduct.icon} className="text-white" size={64} />
                      </div>
                      <h4 className="font-display font-bold text-xl text-gray-900 mb-2">
                        {selectedProduct.title}
                      </h4>
                      <p className="text-gray-600">
                        Профессиональное решение для вашего бизнеса
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}