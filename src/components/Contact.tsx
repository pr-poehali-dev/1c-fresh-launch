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
  const [activeTab, setActiveTab] = useState<'contact' | 'company'>('contact');
  
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
      <div className="max-w-[1980px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Form */}
          <div>
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4 uppercase">
              Остались вопросы?
            </h2>
            <p className="text-gray-500 mb-8">
              Напишите нам, и мы подробно ответим на все ваши вопросы по подпискам 1C Fresh
            </p>

            {/* Используем Telegram форму если запущено в Telegram, обычную в браузере */}
            {telegramWebApp.isInTelegram ? (
              <TelegramContactForm 
                title=""
                subtitle=""
              />
            ) : (
              <form className="space-y-4">
                <Input 
                  placeholder="Имя*" 
                  className="bg-white border-gray-200 rounded-full px-6 py-6 text-gray-400"
                />
                <Input 
                  type="tel" 
                  placeholder="Телефон*" 
                  className="bg-white border-gray-200 rounded-full px-6 py-6 text-gray-400"
                />
                <Input 
                  type="email" 
                  placeholder="Почта*" 
                  className="bg-white border-gray-200 rounded-full px-6 py-6 text-gray-400"
                />
                <Textarea 
                  placeholder="Ваш вопрос или конфигурация 1С" 
                  rows={6}
                  className="bg-white border-gray-200 rounded-3xl px-6 py-4 text-gray-400 resize-none"
                />
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-full py-6 text-base font-medium">
                  Отправить запрос
                </Button>
                <p className="text-sm text-gray-400 text-center">
                  Нажимая кнопку, вы соглашаетесь с <span className="underline cursor-pointer">политикой конфиденциальности</span>
                </p>
              </form>
            )}
          </div>

          {/* Right side - Decorative Gradient */}
          <div className="relative h-[600px] rounded-[60px] overflow-hidden bg-gradient-to-br from-yellow-300 via-orange-400 to-yellow-500">
            {/* Decorative gradient blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
              <div className="absolute top-[10%] right-[15%] w-72 h-72 rounded-full bg-gradient-to-br from-red-400 to-orange-500 opacity-80 blur-2xl"></div>
              <div className="absolute bottom-[15%] left-[20%] w-96 h-96 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 opacity-70 blur-3xl"></div>
              <div className="absolute top-[40%] right-[25%] w-64 h-64 rounded-full bg-gradient-to-br from-orange-300 to-red-400 opacity-60 blur-2xl"></div>
            </div>
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