import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Clock, 
  MessageSquare, 
  Award,
  Smartphone,
  MessageCircle,
  Search,
  Lock,
  Headphones
} from 'lucide-react';
import IconCard from '../components/marketing/IconCard';
import ProcessSteps from '../components/marketing/ProcessSteps';
import ConsultationSection from '../components/marketing/ConsultationSection';

interface HomePageProps {
  onNavigate: (page: 'home' | 'pricing') => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/assets/generated/hero-abstract-gradient-bg.dim_2400x1400.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15
          }}
        />
        <div className="absolute inset-0 gradient-blue-purple-soft z-0" />
        
        <div className="container relative z-10 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Let's Build a Website That Reflects the{' '}
                  <span className="text-gradient">True Quality</span> of Your Business
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                  We help local businesses in India create modern, professional websites that build trust, 
                  attract customers, and grow your online presence.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => onNavigate('pricing')}
                  className="gradient-blue-purple text-white hover:opacity-90 text-lg px-8 py-6"
                >
                  View Pricing
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => {
                    document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-lg px-8 py-6 border-2"
                >
                  Book Free Consultation
                </Button>
              </div>
            </div>
            
            {/* Right: Laptop Mockup */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-soft-xl">
                <img
                  src="/assets/generated/hero-laptop-mockup.dim_1400x1000.png"
                  alt="Modern website mockup"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why a Website Matters Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Your Customers Are Already Online
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              In today's digital world, your website is often the first impression customers have of your business. 
              A professional online presence builds trust, increases visibility, and helps you stand out from competitors 
              who haven't made the leap yet.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <IconCard
              icon={Shield}
              title="Builds Trust"
              description="A professional website establishes credibility and shows customers you're a legitimate, modern business."
            />
            <IconCard
              icon={Clock}
              title="24/7 Online Presence"
              description="Your website works around the clock, providing information and capturing leads even when you're closed."
            />
            <IconCard
              icon={MessageSquare}
              title="Direct Customer Inquiries"
              description="Make it easy for customers to reach you with contact forms, WhatsApp integration, and clear calls-to-action."
            />
            <IconCard
              icon={Award}
              title="Professional Brand Image"
              description="Stand out from competitors with a polished, modern website that reflects the quality of your services."
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              What We Offer
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="border-2 hover:shadow-soft-lg transition-shadow">
              <CardContent className="pt-6 space-y-3">
                <div className="w-12 h-12 rounded-lg gradient-blue-purple flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Mobile-Friendly Design</h3>
                <p className="text-muted-foreground">
                  Your website looks perfect on all devices - phones, tablets, and desktops.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:shadow-soft-lg transition-shadow">
              <CardContent className="pt-6 space-y-3">
                <div className="w-12 h-12 rounded-lg gradient-blue-purple flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">WhatsApp Integration</h3>
                <p className="text-muted-foreground">
                  Let customers reach you instantly with one-click WhatsApp messaging.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:shadow-soft-lg transition-shadow">
              <CardContent className="pt-6 space-y-3">
                <div className="w-12 h-12 rounded-lg gradient-blue-purple flex items-center justify-center">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">SEO-Ready Structure</h3>
                <p className="text-muted-foreground">
                  Built with search engines in mind to help customers find you online.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:shadow-soft-lg transition-shadow">
              <CardContent className="pt-6 space-y-3">
                <div className="w-12 h-12 rounded-lg gradient-blue-purple flex items-center justify-center">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Secure SSL Hosting</h3>
                <p className="text-muted-foreground">
                  Your website is secure, fast, and reliable with professional hosting.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:shadow-soft-lg transition-shadow">
              <CardContent className="pt-6 space-y-3">
                <div className="w-12 h-12 rounded-lg gradient-blue-purple flex items-center justify-center">
                  <Headphones className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Ongoing Support</h3>
                <p className="text-muted-foreground">
                  We're here to help with updates, changes, and technical support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our Simple Process
            </h2>
          </div>
          
          <ProcessSteps />
        </div>
      </section>

      {/* Consultation Section */}
      <ConsultationSection />

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 gradient-blue-purple text-white">
        <div className="container text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Ready to Build Your Online Presence?
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Join hundreds of local businesses who have transformed their online presence with webraft.
          </p>
          <Button
            size="lg"
            onClick={() => onNavigate('pricing')}
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
          >
            View Our Pricing Plans
          </Button>
        </div>
      </section>
    </div>
  );
}
