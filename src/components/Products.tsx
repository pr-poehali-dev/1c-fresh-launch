import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    {
      title: '1С:Бухгалтерия 8',
      description: 'Комплексное решение для автоматизации бухгалтерского и налогового учета.',
      fullDescription: 'Программа 1с:Бухгалтерия 8 предназначена для автоматизации бухгалтерского и налогового учета в организациях, осуществляющих любые виды коммерческой деятельности.',
      image: 'https://cdn.poehali.dev/files/04e368c8-f4e0-434b-8b9b-2444d2ea8e45.png',
      sliderImages: [
        'https://cdn.poehali.dev/files/04e368c8-f4e0-434b-8b9b-2444d2ea8e45.png',
        'https://1cfresh.com/resources/images/content/solutions/ea/slide-1.png',
        'https://1cfresh.com/resources/images/content/solutions/ea/slide-2.png'
      ],
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
      sliderImages: [
        'https://cdn.poehali.dev/files/d4d52983-a447-47da-8365-55c422fe5030.png',
        'https://1cfresh.com/resources/images/content/solutions/hrm/slide-1.png',
        'https://1cfresh.com/resources/images/content/solutions/hrm/slide-2.png'
      ],
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
      sliderImages: [
        'https://cdn.poehali.dev/files/f110eb28-cebc-46d9-af7a-9343e2c02271.png',
        'https://1cfresh.com/resources/images/content/solutions/sbm/slide-1.png',
        'https://1cfresh.com/resources/images/content/solutions/sbm/slide-2.png'
      ],
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
                <div className="flex flex-col gap-3">
                  <Button 
                    variant="outline" 
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 rounded-[30px]"
                    onClick={() => openModal(product)}
                  >
                    Подробнее
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-gray-900 text-gray-900 hover:bg-gray-50 rounded-[30px] font-medium"
                    onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Выбрать тариф
                  </Button>
                </div>
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
                    <Carousel className="w-full">
                      <CarouselContent>
                        {selectedProduct.sliderImages?.map((image: string, index: number) => (
                          <CarouselItem key={index}>
                            <div className="rounded-[30px] overflow-hidden">
                              <img 
                                src={image} 
                                alt={`${selectedProduct.title} - ${index + 1}`}
                                className="w-full h-auto object-cover"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-2" />
                      <CarouselNext className="right-2" />
                    </Carousel>
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