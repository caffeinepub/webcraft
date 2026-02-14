import { Heart, Phone, Mail, MessageCircle } from 'lucide-react';

interface SiteFooterProps {
  onNavigate: (page: 'home' | 'pricing') => void;
}

export default function SiteFooter({ onNavigate }: SiteFooterProps) {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'webraft'
  );
  const whatsappUrl = 'https://wa.me/918780410844';

  return (
    <footer className="border-t bg-background">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight">webraft</h3>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Building premium digital experiences that drive business growth and establish market leadership.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('pricing')}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Pricing
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a 
                  href="tel:+918780410844"
                  className="hover:text-foreground transition-colors"
                >
                  +91 8780410844
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a 
                  href="mailto:freelancingdurg@gmail.com"
                  className="hover:text-foreground transition-colors break-all"
                >
                  freelancingdurg@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <MessageCircle className="w-4 h-4 flex-shrink-0" />
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  WhatsApp Chat
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1.5 flex-wrap">
            © {currentYear} webraft. Built with{' '}
            <Heart className="w-4 h-4 text-primary fill-primary" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
