import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-display font-bold bg-gradient-to-r from-orange-500 to-indigo-500 bg-clip-text text-transparent">
              1C FRESH
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#advantages" className="text-gray-600 hover:text-orange-500 transition-colors">Преимущества</a>
            <a href="#products" className="text-gray-600 hover:text-orange-500 transition-colors">Продукты</a>
            <a href="#pricing" className="text-gray-600 hover:text-orange-500 transition-colors">Тарифы</a>
            <a href="#faq" className="text-gray-600 hover:text-orange-500 transition-colors">FAQ</a>
            <a href="#contact" className="text-gray-600 hover:text-orange-500 transition-colors">Контакты</a>
          </div>
          <Button className="bg-gray-900 hover:bg-gray-800 text-white">
            <Icon name="Phone" size={16} className="mr-2" />
            +7 958 240 00 10
          </Button>
        </div>
      </div>
    </nav>
  );
}