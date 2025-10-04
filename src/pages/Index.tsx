import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Advantages from '@/components/Advantages';
import Products from '@/components/Products';
import Pricing from '@/components/Pricing';
import HowToStart from '@/components/HowToStart';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import { useTelegramWebApp } from '@/hooks/useTelegramWebApp';

export default function Index() {
  const telegramWebApp = useTelegramWebApp();

  return (
    <div className="min-h-screen bg-white">
      {/* Показываем навигацию всегда, кроме Telegram WebApp */}
      <Navigation />
      
      {/* Показываем приветствие пользователя Telegram */}
      {telegramWebApp.isInTelegram && telegramWebApp.user && (
        <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white py-4 px-6">
          <div className="container mx-auto">
            <p className="text-center font-medium">
              Привет, {telegramWebApp.user.first_name}! 👋
            </p>
          </div>
        </div>
      )}
      
      <Hero />
      <Advantages />
      <Products />
      <Pricing />
      <HowToStart />
      <FAQ />
      <Contact />
      <Footer />
      
      {/* Cookie Consent */}
      <CookieConsent />
    </div>
  );
}