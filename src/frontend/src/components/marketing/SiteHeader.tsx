import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface SiteHeaderProps {
  currentPage: 'home' | 'pricing';
  onNavigate: (page: 'home' | 'pricing') => void;
}

export default function SiteHeader({ currentPage, onNavigate }: SiteHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (page: 'home' | 'pricing') => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  const handleGetStarted = () => {
    if (currentPage !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between">
        <button
          onClick={() => handleNavigation('home')}
          className="flex items-center space-x-2 transition-opacity hover:opacity-70"
        >
          <span className="text-2xl font-bold tracking-tight">webraft</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Button
            variant="ghost"
            onClick={() => onNavigate('home')}
            className={`text-base ${currentPage === 'home' ? 'text-primary' : 'text-muted-foreground'}`}
          >
            Home
          </Button>
          <Button
            variant="ghost"
            onClick={() => onNavigate('pricing')}
            className={`text-base ${currentPage === 'pricing' ? 'text-primary' : 'text-muted-foreground'}`}
          >
            Pricing
          </Button>
          <Button
            onClick={handleGetStarted}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur-md">
          <nav className="container py-6 flex flex-col gap-3">
            <Button
              variant="ghost"
              onClick={() => handleNavigation('home')}
              className={`justify-start text-base ${currentPage === 'home' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Home
            </Button>
            <Button
              variant="ghost"
              onClick={() => handleNavigation('pricing')}
              className={`justify-start text-base ${currentPage === 'pricing' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Pricing
            </Button>
            <Button
              onClick={handleGetStarted}
              className="bg-primary text-primary-foreground hover:bg-primary/90 mt-2"
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
