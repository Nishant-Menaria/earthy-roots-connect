import { Link } from "react-router-dom";
import { Product } from "@/data/products";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 animate-fade-in">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.featured && (
          <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
            Featured
          </Badge>
        )}
      </div>
      
      <CardContent className="p-4 space-y-2">
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground uppercase tracking-wider">
            {product.category}
          </p>
          <h3 className="font-semibold text-lg line-clamp-1 text-foreground">
            {product.name}
          </h3>
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.shortDescription}
        </p>
        
        <div className="flex items-center justify-between pt-2">
          <span className="text-2xl font-bold text-primary">
            ₹{product.price}
          </span>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Link to={`/products/${product.id}`} className="w-full">
          <Button variant="default" className="w-full group-hover:bg-primary/90">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
