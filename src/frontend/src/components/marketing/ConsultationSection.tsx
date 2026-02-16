import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { useState } from 'react';

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
    <section id="consultation" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-muted/30 scroll-mt-16">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
              Book Your Free Website Consultation in Ahmedabad
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how we can help your business grow online.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Contact Info */}
            <div className="space-y-4 md:space-y-6">
              <Card className="border-2">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg gradient-blue-purple flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold mb-1 text-sm md:text-base">Call Us</h3>
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
              
              <Card className="border-2">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg gradient-blue-purple flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold mb-1 text-sm md:text-base">Email Us</h3>
                      <a 
                        href="mailto:freelancingdurg@gmail.com"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors break-words"
                      >
                        freelancingdurg@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-2">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg gradient-blue-purple flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold mb-1 text-sm md:text-base">WhatsApp</h3>
                      <a 
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors break-words"
                      >
                        Chat with us
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Form */}
            <Card className="lg:col-span-2 border-2">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">Send us a message</CardTitle>
                <CardDescription className="text-sm md:text-base">
                  Fill out the form below and we'll get back to you shortly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4 md:space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm md:text-base">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="text-base"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm md:text-base">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="text-base break-words"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm md:text-base">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 1234567890"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="text-base"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm md:text-base">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="text-base resize-none"
                    />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      type="button"
                      onClick={handleMailtoClick}
                      className="gradient-blue-purple text-white hover:opacity-90 w-full sm:flex-1"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Send via Email
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => window.open(whatsappUrl, '_blank')}
                      className="border-2 w-full sm:flex-1"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Send via WhatsApp
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
