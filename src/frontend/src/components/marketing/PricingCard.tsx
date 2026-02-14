import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  maintenance: string;
  isPopular?: boolean;
  onGetStarted?: () => void;
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  maintenance,
  isPopular = false,
  onGetStarted
}: PricingCardProps) {
  return (
    <Card 
      className={`relative border transition-all duration-300 h-full flex flex-col ${
        isPopular 
          ? 'border-primary shadow-premium-lg scale-105' 
          : 'hover:shadow-premium-md'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <Badge className="bg-primary text-primary-foreground px-4 py-1.5 text-sm font-medium">
            Most Popular
          </Badge>
        </div>
      )}
      
      <CardHeader className="text-center pb-8 pt-10">
        <CardTitle className="text-2xl mb-2">{name}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
        <div className="mt-8">
          <div className="text-5xl font-bold text-primary">{price}</div>
          <div className="text-sm text-muted-foreground mt-2">one-time setup</div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-8 flex-1 flex flex-col">
        <ul className="space-y-4 flex-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                <Check className="w-3.5 h-3.5 text-primary" />
              </div>
              <span className="text-base text-foreground leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="pt-6 border-t space-y-6">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {maintenance}
          </p>
          
          <Button 
            onClick={onGetStarted}
            className={`w-full h-12 text-base ${
              isPopular 
                ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                : 'border-2'
            }`}
            variant={isPopular ? 'default' : 'outline'}
            size="lg"
          >
            Get Started
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
