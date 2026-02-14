import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, Palette, Rocket } from 'lucide-react';
import Reveal from './Reveal';

export default function ProcessSteps() {
  const steps = [
    {
      number: '01',
      icon: MessageSquare,
      title: 'Discovery',
      description: 'We understand your business goals, target audience, and vision through detailed consultation.'
    },
    {
      number: '02',
      icon: Palette,
      title: 'Design & Build',
      description: 'Our team crafts a custom website that reflects your brand and drives conversions.'
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Launch & Grow',
      description: 'We deploy your site and provide ongoing support to ensure continued success.'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
      {steps.map((step, index) => (
        <Reveal key={index} delay={index * 150}>
          <Card className="relative border hover:shadow-premium-md transition-all duration-300 h-full">
            <CardContent className="pt-8 pb-8 space-y-4">
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center">
                  <step.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="text-6xl font-bold text-muted/20 leading-none">
                  {step.number}
                </div>
              </div>
              <h3 className="text-2xl font-semibold">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </CardContent>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}
