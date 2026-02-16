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
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 shadow-lg hover:shadow-xl transition-shadow safe-area-inset"
    >
      <Button
        size="lg"
        className="rounded-full w-12 h-12 sm:w-14 sm:h-14 p-0 gradient-blue-purple text-white hover:opacity-90"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      </Button>
    </a>
  );
}
