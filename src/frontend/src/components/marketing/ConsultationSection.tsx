import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import Reveal from './Reveal';

export default function ConsultationSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleMailtoClick = () => {
    const subject = encodeURIComponent('Consultation Request');
    const body = encodeURIComponent(
      `Name: ${formData.name}\n\nEmail: ${formData.email}\n\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:freelancingdurg@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  };

  const whatsappNumber = '918780410844';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <section id="consultation" className="py-24 md:py-32 lg:py-40 bg-background scroll-mt-20">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16 md:mb-20 space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Let's Start a Conversation
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Schedule a consultation to discuss your vision and explore how we can bring it to life.
              </p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <Reveal delay={0}>
                <Card className="border hover:shadow-premium-md transition-all">
                  <CardContent className="pt-6 pb-6 space-y-3">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-semibold mb-1.5">Call Us</h3>
                        <a 
                          href="tel:+918780410844"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors break-words"
                        >
                          +91 8780410844
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
              
              <Reveal delay={100}>
                <Card className="border hover:shadow-premium-md transition-all">
                  <CardContent className="pt-6 pb-6 space-y-3">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-semibold mb-1.5">Email Us</h3>
                        <a 
                          href="mailto:freelancingdurg@gmail.com"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors break-all"
                        >
                          freelancingdurg@gmail.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
              
              <Reveal delay={200}>
                <Card className="border hover:shadow-premium-md transition-all">
                  <CardContent className="pt-6 pb-6 space-y-3">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-semibold mb-1.5">WhatsApp</h3>
                        <a 
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          Chat with us
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            </div>
            
            {/* Contact Form */}
            <Reveal delay={300}>
              <Card className="lg:col-span-2 border shadow-premium-md">
                <CardContent className="pt-8 pb-8">
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-base">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="h-12"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-base">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-12"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-base">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-12"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-base">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={5}
                        className="resize-none"
                      />
                    </div>
                    
                    <Button
                      type="button"
                      onClick={handleMailtoClick}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base"
                      size="lg"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
