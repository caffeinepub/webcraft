import { Badge } from '@/components/ui/badge';
import PricingCard from '../components/marketing/PricingCard';
import Reveal from '../components/marketing/Reveal';

interface PricingPageProps {
  onGetStarted?: () => void;
}

export default function PricingPage({ onGetStarted }: PricingPageProps) {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-24 md:py-32 lg:py-40 bg-muted/30">
        <div className="container text-center space-y-6 max-w-4xl mx-auto">
          <Reveal>
            <Badge variant="secondary" className="mb-4 text-sm px-4 py-1.5">
              Investment Options
            </Badge>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              Transparent Pricing
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Choose the solution that aligns with your business goals. No hidden fees, no surprises.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto">
            <Reveal delay={0}>
              <PricingCard
                name="Essential"
                price="₹5,000"
                description="Perfect for establishing your online presence"
                features={[
                  'Single-page professional website',
                  'WhatsApp integration',
                  'Contact form',
                  'Mobile-responsive design',
                  'SSL security included'
                ]}
                maintenance="Annual Maintenance: ₹3,500"
                isPopular={false}
                onGetStarted={onGetStarted}
              />
            </Reveal>
            
            <Reveal delay={150}>
              <PricingCard
                name="Growth"
                price="₹8,000"
                description="Ideal for businesses ready to scale"
                features={[
                  'Multi-page website',
                  'SEO-optimized structure',
                  'Lead capture system',
                  'Analytics integration',
                  'All Essential features'
                ]}
                maintenance="Annual Maintenance: ₹3,500"
                isPopular={true}
                onGetStarted={onGetStarted}
              />
            </Reveal>
            
            <Reveal delay={300}>
              <PricingCard
                name="Premium"
                price="₹12,000"
                description="For businesses demanding excellence"
                features={[
                  'Custom premium design',
                  'Advanced functionality',
                  'Conversion optimization',
                  'Priority support',
                  'All Growth features'
                ]}
                maintenance="Hosting billed separately • Maintenance: ₹4,000–₹5,000 yearly"
                isPopular={false}
                onGetStarted={onGetStarted}
              />
            </Reveal>
          </div>
          
          <Reveal delay={400}>
            <div className="mt-16 text-center">
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                All plans include secure hosting, mobile optimization, and our commitment to your success.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container max-w-5xl">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 md:mb-20">
              What's Included
            </h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            <Reveal delay={0}>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Design & Development</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Custom design tailored to your brand identity, professional development with clean code, 
                  and comprehensive testing across all devices and browsers.
                </p>
              </div>
            </Reveal>
            
            <Reveal delay={150}>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Hosting & Security</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Enterprise-grade hosting with 99.9% uptime, SSL certificate for secure connections, 
                  and regular security updates to protect your business.
                </p>
              </div>
            </Reveal>
            
            <Reveal delay={300}>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Performance</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Optimized for speed with fast load times, responsive design that works flawlessly 
                  on mobile, tablet, and desktop devices.
                </p>
              </div>
            </Reveal>
            
            <Reveal delay={450}>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Support & Maintenance</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Annual maintenance includes content updates, technical support, security patches, 
                  and performance monitoring to keep your site running smoothly.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
