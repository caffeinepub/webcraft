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
      className="fixed bottom-6 right-6 z-50 shadow-lg hover:shadow-xl transition-shadow"
    >
      <Button
        size="lg"
        className="rounded-full w-14 h-14 p-0 gradient-blue-purple text-white hover:opacity-90"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </a>
  );
}
