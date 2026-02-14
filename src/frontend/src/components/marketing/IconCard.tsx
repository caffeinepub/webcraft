import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface IconCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function IconCard({ icon: Icon, title, description }: IconCardProps) {
  return (
    <Card className="border-2 hover:shadow-soft-lg transition-all hover:-translate-y-1">
      <CardContent className="pt-6 space-y-4">
        <div className="w-14 h-14 rounded-xl gradient-blue-purple flex items-center justify-center">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
