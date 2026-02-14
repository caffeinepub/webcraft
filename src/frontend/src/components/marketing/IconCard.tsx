import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface IconCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function IconCard({ icon: Icon, title, description }: IconCardProps) {
  return (
    <Card className="border hover:shadow-premium-md transition-all duration-300 h-full">
      <CardContent className="pt-8 pb-8 space-y-4">
        <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center">
          <Icon className="w-7 h-7 text-primary-foreground" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
