import { Card, CardContent } from '@/components/ui/card';
import Reveal from './Reveal';

export default function PortfolioSection() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Retail',
      image: '/assets/generated/portfolio-1-premium.dim_1200x900.png',
      description: 'Modern online store with seamless checkout experience'
    },
    {
      title: 'Professional Services',
      category: 'Consulting',
      image: '/assets/generated/portfolio-2-premium.dim_1200x900.png',
      description: 'Clean, conversion-focused website for service providers'
    },
    {
      title: 'Restaurant Website',
      category: 'Hospitality',
      image: '/assets/generated/portfolio-3-premium.dim_1200x900.png',
      description: 'Elegant design with online menu and reservations'
    }
  ];

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-background">
      <div className="container">
        <Reveal>
          <div className="text-center mb-16 md:mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Recent Work
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Delivering results for businesses across industries
            </p>
          </div>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Reveal key={index} delay={index * 100}>
              <Card className="group overflow-hidden border hover:shadow-premium-lg transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 space-y-2">
                  <div className="text-sm font-medium text-primary">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
