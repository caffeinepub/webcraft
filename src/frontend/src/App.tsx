import { useState } from 'react';
import SiteHeader from './components/marketing/SiteHeader';
import SiteFooter from './components/marketing/SiteFooter';
import WhatsAppChatButton from './components/marketing/WhatsAppChatButton';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';

type Page = 'home' | 'pricing';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToConsultation = () => {
    // If already on home, just scroll
    if (currentPage === 'home') {
      setTimeout(() => {
        document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // Navigate to home first, then scroll after render
      setCurrentPage('home');
      setTimeout(() => {
        document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader currentPage={currentPage} onNavigate={navigateTo} />
      <main className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={navigateTo} />}
        {currentPage === 'pricing' && <PricingPage onGetStarted={navigateToConsultation} />}
      </main>
      <SiteFooter onNavigate={navigateTo} />
      <WhatsAppChatButton />
    </div>
  );
}

export default App;
