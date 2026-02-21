import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Monitor } from 'lucide-react';
import type { Product } from '@/backend';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const formatPrice = (price: bigint) => {
    return `$${Number(price).toFixed(2)}`;
  };

  return (
    <Card className="transition-all hover:shadow-lg hover:border-tech-green/50">
      <CardHeader>
        <div className="mb-4 flex h-40 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800">
          <Monitor className="h-16 w-16 text-slate-400" />
        </div>
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl">{product.name}</CardTitle>
          <Badge className="bg-tech-green/10 text-tech-green hover:bg-tech-green/20">
            {formatPrice(product.price)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base leading-relaxed">
          {product.specifications}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
