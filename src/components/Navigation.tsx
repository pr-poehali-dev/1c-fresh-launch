import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handlePhoneCall = () => {
    window.location.href = "tel:+73422700001";
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-[1980px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img
              src="https://cdn.poehali.dev/files/9cdb632b-9883-4574-85fb-43d2feb4beac.png"
              alt="ЦАВ - Центр Автоматизации и Внедрений"
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#advantages"
              className="text-gray-600 hover:text-orange-500 transition-colors"
            >
              Преимущества
            </a>
            <a
              href="#products"
              className="text-gray-600 hover:text-orange-500 transition-colors"
            >
              Продукты
            </a>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-orange-500 transition-colors"
            >
              Тарифы
            </a>
            <a
              href="#faq"
              className="text-gray-600 hover:text-orange-500 transition-colors"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-orange-500 transition-colors"
            >
              Контакты
            </a>
          </div>

          <div className="flex items-center space-x-2">
            {/* Phone Button */}
            <Button
              onClick={handlePhoneCall}
              className="hidden sm:flex bg-gray-900 hover:bg-gray-800 text-white rounded-[30px] px-4 py-2"
            >
              <Icon name="Phone" size={16} className="mr-2" />
              <span className="hidden lg:inline">+7 (958) 240‒00‒10</span>
              <span className="lg:hidden">Звонок</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              className="md:hidden p-2 rounded-[30px]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              <a
                href="#advantages"
                className="block text-gray-600 hover:text-orange-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Преимущества
              </a>
              <a
                href="#products"
                className="block text-gray-600 hover:text-orange-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Продукты
              </a>
              <a
                href="#pricing"
                className="block text-gray-600 hover:text-orange-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Тарифы
              </a>
              <a
                href="#faq"
                className="block text-gray-600 hover:text-orange-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <a
                href="#contact"
                className="block text-gray-600 hover:text-orange-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Контакты
              </a>
              <div className="pt-2 border-t border-gray-100">
                <Button
                  onClick={handlePhoneCall}
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-[30px]"
                >
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (342) 270‒00‒01
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
