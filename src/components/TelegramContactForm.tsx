import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

import { useTelegramWebApp } from '@/hooks/useTelegramWebApp';
import Icon from '@/components/ui/icon';

interface TelegramContactFormProps {
  title?: string;
  subtitle?: string;
  chatId?: string;
  onSuccess?: () => void;
}

export default function TelegramContactForm({ 
  title = "Связаться с нами", 
  subtitle = "Оставьте заявку и мы свяжемся с вами",
  chatId,
  onSuccess 
}: TelegramContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agreedToPolicy, setAgreedToPolicy] = useState(false);
  const { toast } = useToast();
  const telegramWebApp = useTelegramWebApp();

  // Автозаполнение из Telegram данных
  const fillFromTelegram = () => {
    if (telegramWebApp.user) {
      setFormData(prev => ({
        ...prev,
        name: telegramWebApp.user?.first_name + (telegramWebApp.user?.last_name ? ` ${telegramWebApp.user.last_name}` : '') || prev.name
      }));
      
      telegramWebApp.hapticFeedback('light');
      toast({
        title: "Данные заполнены",
        description: "Информация из Telegram добавлена в форму",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast({
        title: "Заполните обязательные поля",
        description: "Имя и телефон обязательны для заполнения",
        variant: "destructive",
      });
      return;
    }

    if (!agreedToPolicy) {
      toast({
        title: "Требуется согласие",
        description: "Необходимо согласие на обработку персональных данных",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    telegramWebApp.hapticFeedback('light');

    try {
      const response = await fetch('https://functions.poehali.dev/09d20db6-66dc-4441-860c-48bebddba56c', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          message: formData.message,
          source: telegramWebApp.isInTelegram ? 'Telegram Mini App' : 'Веб-сайт'
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        telegramWebApp.hapticFeedback('success');
        toast({
          title: "Заявка отправлена!",
          description: "Мы свяжемся с вами в ближайшее время",
        });
        
        setFormData({ name: '', phone: '', message: '' });
        setAgreedToPolicy(false);
        onSuccess?.();
        
        if (telegramWebApp.isInTelegram) {
          telegramWebApp.showAlert('Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.');
        }
      } else {
        throw new Error(result.error || 'Ошибка отправки');
      }
    } catch (error) {
      telegramWebApp.hapticFeedback('error');
      toast({
        title: "Ошибка отправки",
        description: error instanceof Error ? error.message : "Попробуйте позже",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-xl font-bold text-gray-900">
          {title}
        </CardTitle>
        <p className="text-gray-600 text-sm">{subtitle}</p>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {telegramWebApp.isInTelegram && telegramWebApp.user && (
            <Button
              type="button"
              variant="outline"
              onClick={fillFromTelegram}
              className="w-full mb-4"
            >
              <Icon name="Download" size={16} className="mr-2" />
              Заполнить из Telegram
            </Button>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="name">Имя *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Ваше имя"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Телефон *</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              placeholder="+7 (999) 123-45-67"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Сообщение</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              placeholder="Расскажите о вашем проекте..."
              rows={3}
            />
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="privacy-policy"
              checked={agreedToPolicy}
              onChange={(e) => setAgreedToPolicy(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
              required
            />
            <label htmlFor="privacy-policy" className="text-sm text-gray-600">
              Я согласен с{' '}
              <Link to="/privacy" className="text-orange-500 hover:underline" target="_blank">
                политикой конфиденциальности
              </Link>
              {' '}и{' '}
              <Link to="/terms" className="text-orange-500 hover:underline" target="_blank">
                пользовательским соглашением
              </Link>
            </label>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-orange-500 hover:bg-orange-600"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Icon name="Loader2" size={16} className="mr-2 animate-spin" />
                Отправляем...
              </>
            ) : (
              <>
                <Icon name="Send" size={16} className="mr-2" />
                Отправить заявку
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}