import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Shield, 
  Clock, 
  TrendingUp, 
  Award,
  Smartphone,
  MessageCircle,
  Search,
  Lock,
  Headphones,
  Zap
} from 'lucide-react';
import IconCard from '../components/marketing/IconCard';
import ProcessSteps from '../components/marketing/ProcessSteps';
import ConsultationSection from '../components/marketing/ConsultationSection';
import PortfolioSection from '../components/marketing/PortfolioSection';
import Reveal from '../components/marketing/Reveal';

interface HomePageProps {
  onNavigate: (page: 'home' | 'pricing') => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background">
        {/* Subtle background texture */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.03]"
          style={{
            backgroundImage: 'url(/assets/generated/agency-bg-texture.dim_2400x1400.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="container relative z-10 py-20 md:py-28 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8 lg:space-y-10">
              <Reveal>
                <div className="space-y-6">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                    Transform Your Business with a{' '}
                    <span className="text-primary">Premium</span> Digital Presence
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl">
                    We build high-converting websites that drive growth and establish your brand as an industry leader.
                  </p>
                </div>
              </Reveal>
              
              <Reveal delay={200}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    onClick={() => {
                      document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 h-auto"
                  >
                    Start Your Project
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => onNavigate('pricing')}
                    className="text-lg px-8 py-6 h-auto border-2"
                  >
                    View Investment
                  </Button>
                </div>
              </Reveal>
            </div>
            
            {/* Right: Hero Image */}
            <Reveal delay={300}>
              <div className="relative order-first lg:order-last">
                <div className="relative rounded-lg overflow-hidden shadow-premium-xl">
                  <img
                    src="/assets/generated/hero-laptop-mockup-premium.dim_1400x1000.png"
                    alt="Premium website showcase"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 md:py-32 lg:py-40 bg-muted/30">
        <div className="container">
          <Reveal>
            <div className="text-center mb-16 md:mb-20 space-y-4 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Your Website Should Work as Hard as You Do
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                In today's digital economy, your website is your most powerful business asset. 
                We create experiences that convert visitors into customers and drive measurable growth.
              </p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
            <Reveal delay={0}>
              <IconCard
                icon={TrendingUp}
                title="Drive Revenue"
                description="Strategic design focused on converting visitors into paying customers."
              />
            </Reveal>
            <Reveal delay={100}>
              <IconCard
                icon={Shield}
                title="Build Authority"
                description="Establish credibility and trust with a professional digital presence."
              />
            </Reveal>
            <Reveal delay={200}>
              <IconCard
                icon={Clock}
                title="Save Time"
                description="Automate inquiries and bookings while you focus on your business."
              />
            </Reveal>
            <Reveal delay={300}>
              <IconCard
                icon={Award}
                title="Stand Out"
                description="Differentiate from competitors with premium design and functionality."
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-32 lg:py-40 bg-background">
        <div className="container">
          <Reveal>
            <div className="text-center mb-16 md:mb-20 space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Comprehensive Digital Solutions
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Everything you need to succeed online, delivered with precision and care.
              </p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Smartphone,
                title: 'Responsive Design',
                description: 'Flawless experience across all devices, from mobile to desktop.'
              },
              {
                icon: Zap,
                title: 'Performance Optimized',
                description: 'Lightning-fast load times that keep visitors engaged.'
              },
              {
                icon: Search,
                title: 'SEO Foundation',
                description: 'Built to rank well and attract organic traffic from day one.'
              },
              {
                icon: MessageCircle,
                title: 'Lead Generation',
                description: 'Strategic CTAs and forms designed to capture quality leads.'
              },
              {
                icon: Lock,
                title: 'Secure & Reliable',
                description: 'Enterprise-grade security and 99.9% uptime guarantee.'
              },
              {
                icon: Headphones,
                title: 'Dedicated Support',
                description: 'Ongoing maintenance and expert assistance when you need it.'
              }
            ].map((service, index) => (
              <Reveal key={index} delay={index * 100}>
                <Card className="border hover:shadow-premium-md transition-all duration-300 h-full">
                  <CardContent className="pt-8 pb-8 space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 md:py-32 lg:py-40 bg-muted/30">
        <div className="container">
          <Reveal>
            <div className="text-center mb-16 md:mb-20 space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Why Partner With Us
              </h2>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
            <Reveal delay={0}>
              <div className="text-center space-y-4">
                <div className="text-5xl md:text-6xl font-bold text-primary">
                  100+
                </div>
                <h3 className="text-xl font-semibold">
                  Projects Delivered
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Proven track record of successful launches across diverse industries.
                </p>
              </div>
            </Reveal>
            
            <Reveal delay={150}>
              <div className="text-center space-y-4">
                <div className="text-5xl md:text-6xl font-bold text-primary">
                  98%
                </div>
                <h3 className="text-xl font-semibold">
                  Client Satisfaction
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our clients love working with us and see real business results.
                </p>
              </div>
            </Reveal>
            
            <Reveal delay={300}>
              <div className="text-center space-y-4">
                <div className="text-5xl md:text-6xl font-bold text-primary">
                  24/7
                </div>
                <h3 className="text-xl font-semibold">
                  Support Available
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Round-the-clock assistance to keep your business running smoothly.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Process Section */}
      <section className="py-24 md:py-32 lg:py-40 bg-muted/30">
        <div className="container">
          <Reveal>
            <div className="text-center mb-16 md:mb-20 space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Our Proven Process
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                A streamlined approach that delivers exceptional results, every time.
              </p>
            </div>
          </Reveal>
          
          <ProcessSteps />
        </div>
      </section>

      {/* Consultation Section */}
      <ConsultationSection />

      {/* Final CTA Section */}
      <section className="py-24 md:py-32 lg:py-40 bg-primary text-primary-foreground">
        <div className="container text-center space-y-8 max-w-4xl mx-auto">
          <Reveal>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Ready to Elevate Your Business?
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Join forward-thinking businesses who have transformed their digital presence and accelerated growth.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <Button
              size="lg"
              onClick={() => {
                document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-background text-foreground hover:bg-background/90 text-lg px-10 py-6 h-auto"
            >
              Schedule Your Consultation
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
