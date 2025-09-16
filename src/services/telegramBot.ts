interface TelegramBotConfig {
  botToken: string;
  chatId?: string;
}

interface SendMessageOptions {
  chatId?: string;
  parseMode?: "HTML" | "Markdown";
  disableWebPagePreview?: boolean;
  disableNotification?: boolean;
}

class TelegramBotService {
  private botToken: string;
  private defaultChatId?: string;
  private baseUrl: string;

  constructor(config: TelegramBotConfig) {
    this.botToken = config.botToken;
    this.defaultChatId = config.chatId;
    this.baseUrl = `https://api.telegram.org/bot${this.botToken}`;
  }

  async sendMessage(
    text: string,
    options: SendMessageOptions = {},
  ): Promise<{ success: boolean; error?: string }> {
    try {
      const chatId = options.chatId || this.defaultChatId;

      if (!chatId) {
        console.error("⚠️ Telegram Bot: Chat ID не настроен");
        throw new Error(
          "Chat ID не настроен. Укажите chatId в конфигурации бота.",
        );
      }

      const payload = {
        chat_id: chatId,
        text,
        parse_mode: options.parseMode || "HTML",
        disable_web_page_preview: options.disableWebPagePreview || false,
        disable_notification: options.disableNotification || false,
      };

      console.log("🤖 Отправка в Telegram:", {
        url: `${this.baseUrl}/sendMessage`,
        chatId,
        textLength: text.length,
      });

      const response = await fetch(`${this.baseUrl}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      console.log("📨 Ответ от Telegram API:", {
        status: response.status,
        ok: response.ok,
        result,
      });

      if (!response.ok) {
        const errorMsg =
          result.description ||
          `HTTP ${response.status}: ${response.statusText}`;
        console.error("❌ Ошибка Telegram API:", errorMsg);
        throw new Error(errorMsg);
      }

      console.log("✅ Сообщение отправлено успешно");
      return { success: true };
    } catch (error) {
      console.error("Ошибка отправки в Telegram:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Неизвестная ошибка",
      };
    }
  }

  async sendContactForm(data: {
    name: string;
    phone: string;
    message?: string;
    source?: string;
  }): Promise<{ success: boolean; error?: string }> {
    const text = `
🔔 <b>Новая заявка с сайта</b>

👤 <b>Имя:</b> ${data.name}
📞 <b>Телефон:</b> ${data.phone}
${data.message ? `💬 <b>Сообщение:</b> ${data.message}` : ""}
${data.source ? `📍 <b>Источник:</b> ${data.source}` : ""}

📅 <b>Время:</b> ${new Date().toLocaleString("ru-RU")}
    `.trim();

    return this.sendMessage(text);
  }

  async sendOrderNotification(data: {
    service: string;
    name: string;
    phone: string;
    email?: string;
    company?: string;
    price?: string;
    message?: string;
  }): Promise<{ success: boolean; error?: string }> {
    const text = `
🛒 <b>Новый заказ</b>

🎯 <b>Услуга:</b> ${data.service}
👤 <b>Клиент:</b> ${data.name}
📞 <b>Телефон:</b> ${data.phone}
${data.email ? `✉️ <b>Email:</b> ${data.email}` : ""}
${data.company ? `🏢 <b>Компания:</b> ${data.company}` : ""}
${data.price ? `💰 <b>Стоимость:</b> ${data.price}` : ""}
${data.message ? `💬 <b>Комментарий:</b> ${data.message}` : ""}

📅 <b>Время заказа:</b> ${new Date().toLocaleString("ru-RU")}
    `.trim();

    return this.sendMessage(text);
  }

  async sendQuestionNotification(data: {
    question: string;
    name: string;
    contact: string;
  }): Promise<{ success: boolean; error?: string }> {
    const text = `
❓ <b>Новый вопрос</b>

👤 <b>От:</b> ${data.name}
📧 <b>Контакт:</b> ${data.contact}
❓ <b>Вопрос:</b> ${data.question}

📅 <b>Время:</b> ${new Date().toLocaleString("ru-RU")}
    `.trim();

    return this.sendMessage(text);
  }

  async getMe(): Promise<{ success: boolean; botInfo?: any; error?: string }> {
    try {
      console.log("🔍 Проверка бота:", `${this.baseUrl}/getMe`);
      const response = await fetch(`${this.baseUrl}/getMe`);
      const result = await response.json();

      console.log("🤖 Информация о боте:", result);

      if (!response.ok) {
        throw new Error(
          result.description || "Ошибка получения информации о боте",
        );
      }

      return { success: true, botInfo: result.result };
    } catch (error) {
      console.error("❌ Ошибка получения информации о боте:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Неизвестная ошибка",
      };
    }
  }

  // Тестовая функция для проверки отправки
  async testMessage(): Promise<{ success: boolean; error?: string }> {
    const testText = `🧪 Тест бота\n\nВремя: ${new Date().toLocaleString("ru-RU")}\nБот работает корректно!`;
    return this.sendMessage(testText);
  }

  // Получить доступные чаты (последние сообщения)
  async getUpdates(): Promise<{
    success: boolean;
    updates?: any[];
    error?: string;
  }> {
    try {
      console.log("📥 Получение обновлений:", `${this.baseUrl}/getUpdates`);
      const response = await fetch(`${this.baseUrl}/getUpdates?limit=10`);
      const result = await response.json();

      console.log("📨 Обновления от Telegram:", result);

      if (!response.ok) {
        throw new Error(result.description || "Ошибка получения обновлений");
      }

      // Извлечь chat_id из сообщений
      const chatIds = result.result
        .filter((update: any) => update.message?.chat?.id)
        .map((update: any) => ({
          chatId: update.message.chat.id,
          chatType: update.message.chat.type,
          chatTitle:
            update.message.chat.title ||
            update.message.chat.first_name ||
            "Без названия",
          from: update.message.from?.first_name || "Неизвестно",
        }));

      console.log("💬 Найденные чаты:", chatIds);

      return { success: true, updates: chatIds };
    } catch (error) {
      console.error("❌ Ошибка получения обновлений:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Неизвестная ошибка",
      };
    }
  }
}

// Создаем экземпляр бота с токеном
export const telegramBot = new TelegramBotService({
  botToken: "7547487408:AAFQnLgkanxSA0Fe5cXZW6x64YImH_sU-gA",
  // TODO: Укажите ваш chat_id для получения уведомлений
  // Чтобы узнать chat_id, напишите боту @userinfobot или @raw_data_bot
  chatId: "-4970200666", // Правильный chat_id группы
});

export default TelegramBotService;