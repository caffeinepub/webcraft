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
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  maintenance,
  isPopular = false
}: PricingCardProps) {
  return (
    <Card 
      className={`relative border-2 transition-all hover:shadow-soft-lg ${
        isPopular 
          ? 'border-primary shadow-soft-lg scale-105 md:scale-110' 
          : 'hover:-translate-y-1'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <Badge className="gradient-blue-purple text-white px-4 py-1">
            Most Popular
          </Badge>
        </div>
      )}
      
      <CardHeader className="text-center pb-8 pt-8">
        <CardTitle className="text-2xl mb-2">{name}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
        <div className="mt-6">
          <div className="text-4xl font-bold text-gradient">{price}</div>
          <div className="text-sm text-muted-foreground mt-1">one-time setup</div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="pt-4 border-t">
          <p className="text-xs text-muted-foreground">{maintenance}</p>
        </div>
        
        <Button 
          className={`w-full ${
            isPopular 
              ? 'gradient-blue-purple text-white hover:opacity-90' 
              : ''
          }`}
          variant={isPopular ? 'default' : 'outline'}
          size="lg"
        >
          Get Started
        </Button>
      </CardContent>
    </Card>
  );
}
