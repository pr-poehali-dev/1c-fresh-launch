import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-600">
            Готовы ответить на ваши вопросы и помочь с выбором тарифа
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="p-8">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="font-display font-bold text-2xl text-gray-900">
                Оставьте заявку
              </CardTitle>
              <CardDescription>
                Заполните форму и мы свяжемся с вами в течение часа
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <form className="space-y-4">
                <Input placeholder="Ваше имя" />
                <Input type="email" placeholder="Email" />
                <Input type="tel" placeholder="Телефон" />
                <Textarea placeholder="Сообщение" rows={4} />
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-[30px]">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <div>
              <h3 className="font-display font-bold text-xl text-gray-900 mb-6">Контактная информация</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Icon name="Phone" className="text-orange-500 mr-3 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">Телефон</p>
                    <p className="text-gray-600">+7 958 240 00 10</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Mail" className="text-orange-500 mr-3 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">info@1cfresh-partner.ru</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Clock" className="text-orange-500 mr-3 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">Режим работы</p>
                    <p className="text-gray-600">Пн-Пт: 9:00-18:00<br />Поддержка: 24/7</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="MapPin" className="text-orange-500 mr-3 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">Адрес</p>
                    <p className="text-gray-600">г. Москва, ул. Примерная, 123</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="p-6 bg-gradient-to-br from-orange-50 to-indigo-50 border-orange-200">
              <CardContent className="p-0">
                <h4 className="font-display font-semibold text-lg text-gray-900 mb-2">
                  Нужна консультация?
                </h4>
                <p className="text-gray-600 mb-4">
                  Наши специалисты помогут подобрать оптимальное решение для вашего бизнеса
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-[30px]">
                  <Icon name="Phone" size={16} className="mr-2" />
                  Заказать звонок
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}