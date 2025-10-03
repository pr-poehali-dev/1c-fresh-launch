import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useTelegramWebApp } from "@/hooks/useTelegramWebApp";
import CustomerOrderForm from "@/components/CustomerOrderForm";
import TelegramContactForm from "@/components/TelegramContactForm";

export default function Hero() {
  const telegramWebApp = useTelegramWebApp();
  const [showOrderForm, setShowOrderForm] = useState(false);

  const handleConsultation = () => {
    // Всегда показываем форму заказа для сбора данных клиента
    setShowOrderForm(true);
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
      <div className="hidden md:block absolute inset-0 flex items-center justify-center">
        <div
          className="animate-float-blob opacity-90"
          style={{
            background:
              'url("https://cdn.poehali.dev/files/3e6d04f2-9a72-40f3-9a00-96b245d87d4f.png")',
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            width: "800px",
            height: "400px",
          }}
        ></div>
      </div>

      {/* Mobile version - behind text and above buttons */}
      <div className="md:hidden absolute top-0 left-0 w-full h-full flex items-start justify-center pt-24">
        <div
          className="animate-float-blob w-[110%] h-[350px] opacity-70"
          style={{
            background:
              'url("https://cdn.poehali.dev/files/3e6d04f2-9a72-40f3-9a00-96b245d87d4f.png")',
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
            <svg
              className="h-16 md:h-20 lg:h-24 w-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
            >
              <path
                d="M0.5 13.4375H5.9V43H11.3V8.0625H0.5V13.4375Z"
                fill="#F0F0F0"
              />
              <path
                d="M5.90039 5.375H14.0004V43H19.4004V0H5.90039V5.375ZM30.2004 21.5C30.2004 12.6071 37.4661 5.375 46.4004 5.375C55.3347 5.375 62.6004 12.6071 62.6004 21.5H68.0004C68.0004 9.64544 58.3101 0 46.4004 0C34.4907 0 24.8004 9.64544 24.8004 21.5C24.8004 33.3546 34.4907 43 46.4004 43H81.5004V37.625H46.4004C37.4661 37.625 30.2004 30.3929 30.2004 21.5Z"
                fill="#F0F0F0"
              />
              <path
                d="M46.3996 26.875C43.4215 26.875 40.9996 24.4643 40.9996 21.5C40.9996 18.5357 43.4215 16.125 46.3996 16.125C49.3777 16.125 51.7996 18.5357 51.7996 21.5H57.1996C57.1996 15.5714 52.3558 10.75 46.3996 10.75C40.4434 10.75 35.5996 15.5714 35.5996 21.5C35.5996 27.4286 40.4434 32.25 46.3996 32.25H81.4996V26.875H46.3996Z"
                fill="#F0F0F0"
              />
            </svg>
          </div>
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-4 md:mb-6 leading-tight"
            style={{ color: "#FFFFFF" }}
          >
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

      {showOrderForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          {telegramWebApp.isInTelegram ? (
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">
                  Консультация по 1C Fresh
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowOrderForm(false)}
                  className="h-6 w-6 p-0"
                >
                  <Icon name="X" size={16} />
                </Button>
              </div>
              <TelegramContactForm
                title="Консультация по 1C Fresh"
                subtitle="Бесплатная консультация по выбору оптимального тарифа"
                onSuccess={() => setShowOrderForm(false)}
              />
            </div>
          ) : (
            <CustomerOrderForm
              serviceType="Консультация по 1C Fresh"
              serviceDetails="Бесплатная консультация по выбору оптимального тарифа и настройке сервиса"
              onClose={() => setShowOrderForm(false)}
            />
          )}
        </div>
      )}
    </section>
  );
}