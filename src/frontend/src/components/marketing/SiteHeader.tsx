import { Button } from '@/components/ui/button';

interface SiteHeaderProps {
  currentPage: 'home' | 'pricing';
  onNavigate: (page: 'home' | 'pricing') => void;
}

export default function SiteHeader({ currentPage, onNavigate }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center space-x-2 transition-opacity hover:opacity-80"
        >
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gradient">webraft</span>
          </div>
        </button>

        <nav className="flex items-center gap-6">
          <Button
            variant="ghost"
            onClick={() => onNavigate('home')}
            className={currentPage === 'home' ? 'text-primary' : ''}
          >
            Home
          </Button>
          <Button
            variant="ghost"
            onClick={() => onNavigate('pricing')}
            className={currentPage === 'pricing' ? 'text-primary' : ''}
          >
            Pricing
          </Button>
          <Button
            onClick={() => {
              if (currentPage !== 'home') {
                onNavigate('home');
                setTimeout(() => {
                  document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              } else {
                document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="gradient-blue-purple text-white hover:opacity-90"
          >
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  );
}
