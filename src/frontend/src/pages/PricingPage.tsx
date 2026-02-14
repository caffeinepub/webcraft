import { Badge } from '@/components/ui/badge';
import PricingCard from '../components/marketing/PricingCard';

export default function PricingPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-blue-purple-soft">
        <div className="container text-center space-y-4">
          <Badge variant="secondary" className="mb-4">
            Transparent Pricing
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Choose Your Perfect Plan
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple, transparent pricing for local businesses. No hidden fees, no surprises.
          </p>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard
              name="Essential"
              price="₹5,000"
              description="Perfect for getting started online"
              features={[
                '1-page website',
                'WhatsApp integration',
                'Contact form',
                'Mobile optimized'
              ]}
              maintenance="Annual Maintenance: ₹3,500"
              isPopular={false}
            />
            
            <PricingCard
              name="Growth"
              price="₹8,000"
              description="Most popular for growing businesses"
              features={[
                'Multi-section or multi-page',
                'SEO structured content',
                'Lead-focused design',
                'All Essential features'
              ]}
              maintenance="Annual Maintenance: ₹3,500"
              isPopular={true}
            />
            
            <PricingCard
              name="Premium"
              price="₹12,000"
              description="For businesses that want the best"
              features={[
                'Custom premium layout',
                'Advanced visual design',
                'Conversion-focused structure',
                'All Growth features'
              ]}
              maintenance="Hosting billed separately • Maintenance: ₹4,000–₹5,000 yearly"
              isPopular={false}
            />
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-muted-foreground">
              All plans include secure SSL hosting, mobile optimization, and our standard support.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ or Additional Info Section */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What's Included
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Design & Development</h3>
              <p className="text-muted-foreground">
                Custom design tailored to your brand, professional development, and thorough testing across all devices.
              </p>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Hosting & Security</h3>
              <p className="text-muted-foreground">
                Fast, secure hosting with SSL certificate included. Your website is protected and always online.
              </p>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Mobile Optimization</h3>
              <p className="text-muted-foreground">
                Every website is fully responsive and optimized for mobile devices, tablets, and desktops.
              </p>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Ongoing Support</h3>
              <p className="text-muted-foreground">
                Annual maintenance includes updates, security patches, and technical support when you need it.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
