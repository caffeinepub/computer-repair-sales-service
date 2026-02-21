import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Service } from '@/backend';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const formatPrice = (price: bigint) => {
    return `$${Number(price).toFixed(2)}`;
  };

  return (
    <Card className="transition-all hover:shadow-lg hover:border-tech-green/50">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl">{service.name}</CardTitle>
          <Badge className="bg-tech-green/10 text-tech-green hover:bg-tech-green/20">
            {formatPrice(service.price)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base leading-relaxed">
          {service.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
