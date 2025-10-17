import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory =
        selectedCategory === "All Products" || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Ayurvedic Products
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our complete range of authentic Ayurvedic herbs and natural remedies
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8 animate-fade-in">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search products by name, category, or benefits..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12 animate-fade-in">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 space-y-4 animate-fade-in">
            <p className="text-xl text-muted-foreground">
              No products found matching your search
            </p>
            <Button variant="outline" onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All Products");
            }}>
              Clear Filters
            </Button>
          </div>
        )}

        {/* Results Count */}
        {filteredProducts.length > 0 && (
          <div className="text-center mt-12 text-muted-foreground">
            Showing {filteredProducts.length} of {products.length} products
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
