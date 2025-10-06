
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTelegramWebApp } from "@/hooks/useTelegramWebApp";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TelegramProducts from "./pages/TelegramProducts";
import TelegramPricing from "./pages/TelegramPricing";
import TelegramFAQ from "./pages/TelegramFAQ";

const queryClient = new QueryClient();

const App = () => {
  const telegramWebApp = useTelegramWebApp();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div 
            className={telegramWebApp.isInTelegram ? 'telegram-app' : ''}
            style={{
              minHeight: telegramWebApp.isInTelegram 
                ? `${telegramWebApp.viewportStableHeight}px` 
                : '100vh'
            }}
          >
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/telegram/products" element={<TelegramProducts />} />
              <Route path="/telegram/pricing" element={<TelegramPricing />} />
              <Route path="/telegram/faq" element={<TelegramFAQ />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;