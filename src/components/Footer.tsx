import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-[1980px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-display font-bold bg-gradient-to-r from-orange-500 to-indigo-500 bg-clip-text text-transparent mb-4">
              1C FRESH
            </div>
            <p className="text-gray-400 mb-4">
              Официальный партнер 1C Fresh. Надежные облачные решения для вашего бизнеса.
            </p>
            <div className="flex space-x-4">
              <Icon name="Phone" className="text-orange-500" size={20} />
              <Icon name="Mail" className="text-orange-500" size={20} />
              <Icon name="MessageCircle" className="text-orange-500" size={20} />
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#products" className="hover:text-orange-500 transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }); }}>1С:Бухгалтерия</a></li>
              <li><a href="#products" className="hover:text-orange-500 transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }); }}>1С:Зарплата и кадры</a></li>
              <li><a href="#products" className="hover:text-orange-500 transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }); }}>1С:Управление фирмой</a></li>
              <li><a href="#products" className="hover:text-orange-500 transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }); }}>1С:ERP</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Компания</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#advantages" className="hover:text-orange-500 transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); document.getElementById('advantages')?.scrollIntoView({ behavior: 'smooth' }); }}>О нас</a></li>
              <li><a href="#faq" className="hover:text-orange-500 transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' }); }}>Новости</a></li>
              <li><a href="#contact" className="hover:text-orange-500 transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>Партнерство</a></li>
              <li><a href="#pricing" className="hover:text-orange-500 transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }); }}>Тарифы</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Поддержка</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#faq" className="hover:text-orange-500 transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' }); }}>База знаний</a></li>
              <li><a href="#faq" className="hover:text-orange-500 transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' }); }}>Документация</a></li>
              <li><a href="#faq" className="hover:text-orange-500 transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' }); }}>Обучение</a></li>
              <li><a href="#contact" className="hover:text-orange-500 transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>Контакты</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Официальный партнер 1C Fresh. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}