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
        
        <div className="container relative z-10 py-12 sm:py-16 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-3 md:space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Professional Website Developer in Ahmedabad, Gujarat
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
                  We help small businesses in Ahmedabad build modern, mobile-friendly websites that attract customers and grow revenue.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  size="lg"
                  onClick={() => onNavigate('pricing')}
                  className="gradient-blue-purple text-white hover:opacity-90 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
                >
                  View Pricing
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => {
                    document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 border-2 w-full sm:w-auto"
                >
                  Book Free Consultation
                </Button>
              </div>
            </div>
            
            {/* Right: Laptop Mockup */}
            <div className="relative order-first lg:order-last">
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
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-background">
        <div className="container">
          <div className="text-center mb-12 md:mb-16 space-y-3 md:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-4">
              Your Customers Are Searching Online in Ahmedabad
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
              If you run a business in Ahmedabad, your customers are already searching for your services on Google. A professional website builds trust, increases visibility, and helps you stand out from competitors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
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
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 px-4">
              Website Development Services in Ahmedabad
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
              We provide affordable website development services in Ahmedabad designed specifically for small and growing businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            <Card className="border-2 hover:shadow-soft-lg transition-shadow">
              <CardContent className="pt-6 space-y-3">
                <div className="w-12 h-12 rounded-lg gradient-blue-purple flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">Mobile-Friendly Website Design</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Your website looks perfect on all devices - phones, tablets, and desktops.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:shadow-soft-lg transition-shadow">
              <CardContent className="pt-6 space-y-3">
                <div className="w-12 h-12 rounded-lg gradient-blue-purple flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">WhatsApp Integration</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Let customers reach you instantly with one-click WhatsApp messaging.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:shadow-soft-lg transition-shadow">
              <CardContent className="pt-6 space-y-3">
                <div className="w-12 h-12 rounded-lg gradient-blue-purple flex items-center justify-center">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">SEO-Ready Structure</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Built with search engines in mind to help customers find you online.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:shadow-soft-lg transition-shadow">
              <CardContent className="pt-6 space-y-3">
                <div className="w-12 h-12 rounded-lg gradient-blue-purple flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">Lead-Focused Layouts</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Designed to convert visitors into customers with strategic call-to-action placement.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:shadow-soft-lg transition-shadow">
              <CardContent className="pt-6 space-y-3">
                <div className="w-12 h-12 rounded-lg gradient-blue-purple flex items-center justify-center">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">Secure Hosting and SSL</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Your website is secure, fast, and reliable with professional hosting.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:shadow-soft-lg transition-shadow">
              <CardContent className="pt-6 space-y-3">
                <div className="w-12 h-12 rounded-lg gradient-blue-purple flex items-center justify-center">
                  <Headphones className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">Ongoing Support</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  We're here to help with updates, changes, and technical support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-background">
        <div className="container">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 px-4">
              Our Simple Process
            </h2>
          </div>
          
          <div className="max-w-5xl mx-auto space-y-8 md:space-y-12">
            <ProcessSteps />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-8">
              <Card className="border-2">
                <CardContent className="pt-6 space-y-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    1
                  </div>
                  <h3 className="text-lg font-semibold">Consultation</h3>
                  <p className="text-sm text-muted-foreground">
                    We understand your business goals and target audience in Ahmedabad.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2">
                <CardContent className="pt-6 space-y-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    2
                  </div>
                  <h3 className="text-lg font-semibold">Design</h3>
                  <p className="text-sm text-muted-foreground">
                    We create a modern website design tailored to your brand.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2">
                <CardContent className="pt-6 space-y-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    3
                  </div>
                  <h3 className="text-lg font-semibold">Development</h3>
                  <p className="text-sm text-muted-foreground">
                    We build a fast, SEO-optimized website that performs well on Google.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2">
                <CardContent className="pt-6 space-y-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    4
                  </div>
                  <h3 className="text-lg font-semibold">Launch</h3>
                  <p className="text-sm text-muted-foreground">
                    Your website goes live and starts attracting customers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <ConsultationSection />

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 px-4">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6 md:space-y-8">
              <Card className="border-2">
                <CardContent className="pt-6 space-y-3">
                  <h3 className="text-lg sm:text-xl font-semibold">
                    How much does website development cost in Ahmedabad?
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Website development in Ahmedabad typically starts from ₹5,000 depending on features and pages required.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2">
                <CardContent className="pt-6 space-y-3">
                  <h3 className="text-lg sm:text-xl font-semibold">
                    Do you provide SEO services in Ahmedabad?
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Yes, we provide basic and advanced SEO services to help businesses in Ahmedabad rank higher on Google.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2">
                <CardContent className="pt-6 space-y-3">
                  <h3 className="text-lg sm:text-xl font-semibold">
                    How long does it take to build a website?
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Most websites are completed within 7–14 days depending on project requirements.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2">
                <CardContent className="pt-6 space-y-3">
                  <h3 className="text-lg sm:text-xl font-semibold">
                    Do you work with businesses outside Ahmedabad?
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Yes, we serve businesses across Gujarat and India.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 gradient-blue-purple text-white">
        <div className="container text-center space-y-6 md:space-y-8 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Ready to Grow Your Business Online?
          </h2>
          <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Join small businesses across Ahmedabad and Gujarat who have transformed their online presence with professional website development.
          </p>
          <Button
            size="lg"
            onClick={() => onNavigate('pricing')}
            className="bg-white text-primary hover:bg-white/90 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
          >
            View Our Pricing Plans
          </Button>
        </div>
      </section>
    </div>
  );
}
