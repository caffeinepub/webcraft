import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppChatButton() {
  const whatsappNumber = '918780410844';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 shadow-premium-lg hover:shadow-premium-xl transition-shadow safe-area-inset"
    >
      <Button
        size="lg"
        className="rounded-full w-14 h-14 sm:w-16 sm:h-16 p-0 bg-primary text-primary-foreground hover:bg-primary/90"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
      </Button>
    </a>
  );
}
