import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { telegramBot } from '@/services/telegramBot';
import { toast } from 'sonner';
import Icon from "@/components/ui/icon";
import TelegramContactForm from "@/components/TelegramContactForm";
import CustomerOrderForm from "@/components/CustomerOrderForm";
import { useTelegramWebApp } from "@/hooks/useTelegramWebApp";

export default function Contact() {
  const [showOrderForm, setShowOrderForm] = useState(false);
  
  const handleCallbackRequest = () => {
    setShowOrderForm(true);
  };
  
  const testTelegramBot = async () => {
    try {
      console.log('🧪 Тестирование Telegram бота...');
      
      // Сначала проверим бота
      const botInfo = await telegramBot.getMe();
      console.log('Bot info:', botInfo);
      
      if (botInfo.success) {
        toast.success('Бот активен: ' + botInfo.botInfo?.first_name);
        
        // Получить доступные чаты
        const updates = await telegramBot.getUpdates();
        if (updates.success && updates.updates?.length) {
          console.log('📋 Доступные чаты:', updates.updates);
          toast.success(`Найдено чатов: ${updates.updates.length}. Проверьте консоль для chat_id`);
          
          // Показать chat_id в консоли
          updates.updates.forEach((chat: any, index: number) => {
            console.log(`💬 Чат ${index + 1}:`, {
              chatId: chat.chatId,
              тип: chat.chatType,
              название: chat.chatTitle,
              от: chat.from
            });
          });
          
          const chatIds = updates.updates.map((chat: any) => chat.chatId).join(', ');
          toast.info(`Chat IDs: ${chatIds}`);
        } else {
          toast.warning('❗ Нет доступных чатов. Напишите боту сообщение сначала!');
        }
      } else {
        toast.error('❌ Бот недоступен: ' + botInfo.error);
      }
    } catch (error) {
      console.error('Test error:', error);
      toast.error('❌ Ошибка теста: ' + (error as Error).message);
    }
  };
  const telegramWebApp = useTelegramWebApp();

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
          {/* Используем Telegram форму если запущено в Telegram, обычную в браузере */}
          {telegramWebApp.isInTelegram ? (
            <TelegramContactForm 
              title="Оставьте заявку"
              subtitle="Заполните форму и мы свяжемся с вами в течение часа"
            />
          ) : (
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
          )}

          <div className="space-y-8">
            <div>
              <h3 className="font-display font-bold text-xl text-gray-900 mb-6">
                Контактная информация
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Icon
                    name="Phone"
                    className="text-orange-500 mr-3 mt-1"
                    size={20}
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Телефон</p>
                    <p className="text-gray-600">+7 (342) 270‒00‒01</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon
                    name="Mail"
                    className="text-orange-500 mr-3 mt-1"
                    size={20}
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">ivanickiy@centerai.tech</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon
                    name="Clock"
                    className="text-orange-500 mr-3 mt-1"
                    size={20}
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Режим работы</p>
                    <p className="text-gray-600">
                      Пн-Пт: 9:00-18:00
                      <br />
                      Поддержка: 24/7
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon
                    name="MapPin"
                    className="text-orange-500 mr-3 mt-1"
                    size={20}
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Адрес</p>
                    <p className="text-gray-600">
                      614007, Пермский край, город Пермь,
                      <br />
                      ул. Революции, д. 14, кв. 57
                    </p>
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
                  Наши специалисты помогут подобрать оптимальное решение для
                  вашего бизнеса
                </p>
                <div className="space-y-2">
                  <Button 
                    onClick={handleCallbackRequest}
                    className="bg-orange-500 hover:bg-orange-600 text-white rounded-[30px]"
                  >
                    <Icon name="Phone" size={16} className="mr-2" />
                    Заказать звонок
                  </Button>
                  <Button 
                    onClick={testTelegramBot}
                    variant="outline" 
                    className="w-full rounded-[30px]"
                  >
                    🧪 Тест Telegram бота
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {showOrderForm && (
        <CustomerOrderForm
          serviceType="Заказ обратного звонка"
          serviceDetails="Запрос консультации по телефону в удобное время"
          onClose={() => setShowOrderForm(false)}
        />
      )}
    </section>
  );
}