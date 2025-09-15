import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useTelegramWebApp } from "@/hooks/useTelegramWebApp";

export default function Hero() {
  const telegramWebApp = useTelegramWebApp();

  const handleConsultation = () => {
    // Проверяем если это мобильное устройство
    const isMobile = window.innerWidth <= 768;

    if (isMobile || telegramWebApp.isInTelegram) {
      // Для мобильных устройств или Telegram WebApp - открываем Telegram бота
      const telegramBotUrl = "https://t.me/SaasFreshBot";

      if (telegramWebApp.isInTelegram) {
        // Если в Telegram WebApp, используем встроенный метод
        telegramWebApp.openLink(telegramBotUrl);
      } else {
        // Если обычный мобильный браузер, открываем ссылку
        window.open(telegramBotUrl, "_blank");
      }
    } else {
      // Для десктопа - скроллим к контактной форме
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const advantages = [
    {
      icon: "Shield",
      title: "Официальный партнер",
      description:
        "Работаем напрямую с 1C, гарантируем качество и надежность сервиса",
    },
    {
      icon: "Clock",
      title: "Поддержка 24/7",
      description:
        "Круглосуточная техническая поддержка от сертифицированных специалистов",
    },
    {
      icon: "Lock",
      title: "Безопасность данных",
      description:
        "Надежная защита и регулярное резервное копирование в российских ЦОД",
    },
    {
      icon: "RefreshCw",
      title: "Автообновления",
      description:
        "Всегда актуальные версии программ без дополнительных затрат",
    },
  ];

  return (
    <section className="pt-20 md:pt-24 lg:pt-20 pb-12 md:pb-16 relative overflow-hidden min-h-screen flex items-center bg-white">
      {/* Animated Gradient Blob */}
      {/* Desktop version - properly centered */}
      <div className="hidden md:block absolute inset-0">
        <div
          className="animate-float-blob w-full h-full opacity-90"
          style={{
            background:
              'url("https://cdn.poehali.dev/files/abf41b44-2c91-4b72-91e7-9567e81a7898.jpg")',
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            maxWidth: "1200px",
            margin: "0 auto",
            left: "50%",
            transform: "translateX(-50%)",
            position: "absolute"
          }}
        ></div>
      </div>

      {/* Mobile version - behind text and above buttons */}
      <div className="md:hidden absolute top-0 left-0 w-full h-full flex items-start justify-center pt-24">
        <div
          className="animate-float-blob w-[110%] h-[350px] opacity-70"
          style={{
            background:
              'url("https://cdn.poehali.dev/files/abf41b44-2c91-4b72-91e7-9567e81a7898.jpg")',
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full z-10">
        <div className="text-center">
          {/* Logo Icon */}
          <div className="flex justify-center mb-6">
            <img 
              src="/img/9cf2c296-470e-4a41-871b-84da60673a25.jpg" 
              alt="1C Logo" 
              className="h-16 md:h-20 lg:h-24 w-auto"
            />
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-4 md:mb-6 leading-tight" style={{ color: '#cccccc' }}>
            ПРОФЕССИОНАЛЬНЫЕ
            <br />
            ПОДПИСКИ НА 1C FRESH
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed">
            Официальный партнер 1C Fresh.
            <br />
            Без серверов, без сложных настроек — просто работайте!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-[30px] shadow-lg hover:shadow-xl transition-all"
              onClick={() =>
                document
                  .getElementById("pricing")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Выбрать тариф
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleConsultation}
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-[30px] transition-all"
            >
              Консультация
              <Icon name="MessageCircle" size={20} className="ml-2" />
            </Button>
          </div>
        </div>

        {/* Advantage Cards in Hero */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-16 lg:mt-20">
          {advantages.map((advantage, index) => (
            <Card
              key={index}
              className="bg-white/90 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white"
            >
              <CardContent className="p-4 md:p-6 text-center">
                <div className="bg-orange-100 rounded-full w-12 md:w-16 h-12 md:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Icon
                    name={advantage.icon}
                    className="text-orange-500"
                    size={24}
                  />
                </div>
                <h3 className="font-display font-semibold text-sm md:text-base text-gray-900 mb-2 leading-tight">
                  {advantage.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}