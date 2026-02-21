import { useProducts } from '@/hooks/useQueries';
import ProductCard from '@/components/ProductCard';
import { Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

export default function ProductsPage() {
  const { data: products, isLoading, error } = useProducts();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Our Products</h1>
        <p className="text-lg text-muted-foreground">
          Quality computers and components at competitive prices
        </p>
      </div>

      {isLoading && (
        <div className="flex justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-tech-green" />
        </div>
      )}

      {error && (
        <Alert variant="destructive" className="mx-auto max-w-2xl">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Failed to load products. Please try again later.
          </AlertDescription>
        </Alert>
      )}

      {products && products.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-lg text-muted-foreground">
            No products available at the moment. Please check back later.
          </p>
        </div>
      )}

      {products && products.length > 0 && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id.toString()} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
