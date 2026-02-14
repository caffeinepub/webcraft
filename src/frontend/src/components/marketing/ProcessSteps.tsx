import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, Palette, Code, Rocket } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'Consultation',
    description: 'We discuss your business goals, target audience, and design preferences.',
    icon: MessageSquare
  },
  {
    number: 2,
    title: 'Design',
    description: 'Our team creates a custom design that matches your brand and vision.',
    icon: Palette
  },
  {
    number: 3,
    title: 'Development',
    description: 'We build your website with clean code, optimized for speed and SEO.',
    icon: Code
  },
  {
    number: 4,
    title: 'Launch',
    description: 'Your website goes live! We handle hosting, SSL, and final testing.',
    icon: Rocket
  }
];

export default function ProcessSteps() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <Card key={step.number} className="relative border-2 hover:shadow-soft-lg transition-shadow">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full gradient-blue-purple flex items-center justify-center text-white font-bold text-xl">
                    {step.number}
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
