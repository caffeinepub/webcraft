import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface IconCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function IconCard({ icon: Icon, title, description }: IconCardProps) {
  return (
    <Card className="border-2 hover:shadow-soft-lg transition-all md:hover:-translate-y-1">
      <CardContent className="pt-6 space-y-3 md:space-y-4">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl gradient-blue-purple flex items-center justify-center">
          <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
        </div>
        <div className="space-y-2">
          <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
