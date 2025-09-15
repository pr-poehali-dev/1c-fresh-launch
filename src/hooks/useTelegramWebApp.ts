import { useEffect, useState } from 'react';
import WebApp from '@twa-dev/sdk';

export interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  is_premium?: boolean;
  photo_url?: string;
}

export interface TelegramWebAppData {
  user: TelegramUser | null;
  isInTelegram: boolean;
  themeParams: any;
  colorScheme: 'light' | 'dark';
  isExpanded: boolean;
  viewportHeight: number;
  viewportStableHeight: number;
}

export const useTelegramWebApp = () => {
  const [webAppData, setWebAppData] = useState<TelegramWebAppData>({
    user: null,
    isInTelegram: false,
    themeParams: {},
    colorScheme: 'light',
    isExpanded: false,
    viewportHeight: window.innerHeight,
    viewportStableHeight: window.innerHeight,
  });

  useEffect(() => {
    const initTelegramWebApp = () => {
      try {
        // Проверяем, запущено ли приложение в Telegram
        const isInTelegram = Boolean(window.Telegram?.WebApp);
        
        if (isInTelegram) {
          // Инициализируем WebApp
          WebApp.ready();
          
          // Расширяем окно на весь экран
          WebApp.expand();
          
          // Включаем закрытие по свайпу вниз
          WebApp.enableClosingConfirmation();
          
          // Получаем данные пользователя
          const user = WebApp.initDataUnsafe?.user || null;
          
          // Устанавливаем цвет заголовка
          WebApp.setHeaderColor('#ffffff');
          
          // Устанавливаем цвет фона
          WebApp.setBackgroundColor('#ffffff');
          
          setWebAppData({
            user,
            isInTelegram: true,
            themeParams: WebApp.themeParams,
            colorScheme: WebApp.colorScheme,
            isExpanded: WebApp.isExpanded,
            viewportHeight: WebApp.viewportHeight,
            viewportStableHeight: WebApp.viewportStableHeight,
          });

          // Подписываемся на изменения viewport
          WebApp.onEvent('viewportChanged', () => {
            setWebAppData(prev => ({
              ...prev,
              viewportHeight: WebApp.viewportHeight,
              viewportStableHeight: WebApp.viewportStableHeight,
              isExpanded: WebApp.isExpanded,
            }));
          });

          // Подписываемся на изменения темы
          WebApp.onEvent('themeChanged', () => {
            setWebAppData(prev => ({
              ...prev,
              themeParams: WebApp.themeParams,
              colorScheme: WebApp.colorScheme,
            }));
          });
        }
      } catch (error) {
        console.error('Ошибка инициализации Telegram WebApp:', error);
      }
    };

    // Инициализируем сразу или ждем загрузки Telegram WebApp
    if (window.Telegram?.WebApp) {
      initTelegramWebApp();
    } else {
      // Ждем загрузки Telegram WebApp
      const checkTelegram = setInterval(() => {
        if (window.Telegram?.WebApp) {
          clearInterval(checkTelegram);
          initTelegramWebApp();
        }
      }, 100);

      // Очищаем интервал через 5 секунд, если Telegram не загрузился
      setTimeout(() => clearInterval(checkTelegram), 5000);
    }
  }, []);

  const showAlert = (message: string) => {
    if (webAppData.isInTelegram) {
      WebApp.showAlert(message);
    } else {
      alert(message);
    }
  };

  const showConfirm = (message: string, callback?: (confirmed: boolean) => void) => {
    if (webAppData.isInTelegram) {
      WebApp.showConfirm(message, callback);
    } else {
      const confirmed = confirm(message);
      callback?.(confirmed);
    }
  };

  const hapticFeedback = (type: 'light' | 'medium' | 'heavy' | 'error' | 'success' = 'light') => {
    if (webAppData.isInTelegram) {
      switch (type) {
        case 'light':
          WebApp.HapticFeedback.impactOccurred('light');
          break;
        case 'medium':
          WebApp.HapticFeedback.impactOccurred('medium');
          break;
        case 'heavy':
          WebApp.HapticFeedback.impactOccurred('heavy');
          break;
        case 'error':
          WebApp.HapticFeedback.notificationOccurred('error');
          break;
        case 'success':
          WebApp.HapticFeedback.notificationOccurred('success');
          break;
      }
    }
  };

  const openLink = (url: string, tryInstantView = false) => {
    if (webAppData.isInTelegram) {
      WebApp.openLink(url, { try_instant_view: tryInstantView });
    } else {
      window.open(url, '_blank');
    }
  };

  const close = () => {
    if (webAppData.isInTelegram) {
      WebApp.close();
    } else {
      window.close();
    }
  };

  return {
    ...webAppData,
    showAlert,
    showConfirm,
    hapticFeedback,
    openLink,
    close,
    WebApp: webAppData.isInTelegram ? WebApp : null,
  };
};