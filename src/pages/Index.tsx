import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Advantages from '@/components/Advantages';
import Products from '@/components/Products';
import Pricing from '@/components/Pricing';
import HowToStart from '@/components/HowToStart';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Advantages />
      <Products />
      <Pricing />
      <HowToStart />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}