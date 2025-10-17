import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { featuredProducts } from "@/data/products";
import heroBanner from "@/assets/hero-banner.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBanner})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center space-y-6 animate-fade-in-slow">
          <div className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-foreground/20">
            <Leaf className="h-4 w-4 text-primary-foreground" />
            <span className="text-sm text-primary-foreground font-medium">
              Ancient Wisdom, Modern Wellness
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground max-w-4xl mx-auto leading-tight">
            Discover the Power of Ayurvedic Healing
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Experience holistic wellness through time-tested natural remedies and authentic Ayurvedic products
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/products">
              <Button size="lg" variant="secondary" className="group">
                Explore Products
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="bg-background/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground hover:bg-background/20">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-3 p-6 rounded-lg hover:bg-background transition-colors animate-fade-in">
              <div className="inline-flex p-4 rounded-full bg-primary/10">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">100% Natural</h3>
              <p className="text-muted-foreground">
                Pure, authentic Ayurvedic herbs and ingredients sourced from nature
              </p>
            </div>

            <div className="text-center space-y-3 p-6 rounded-lg hover:bg-background transition-colors animate-fade-in">
              <div className="inline-flex p-4 rounded-full bg-primary/10">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Holistic Wellness</h3>
              <p className="text-muted-foreground">
                Ancient remedies for complete mind, body, and spirit balance
              </p>
            </div>

            <div className="text-center space-y-3 p-6 rounded-lg hover:bg-background transition-colors animate-fade-in">
              <div className="inline-flex p-4 rounded-full bg-primary/10">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Time-Tested</h3>
              <p className="text-muted-foreground">
                Centuries-old Ayurvedic wisdom proven effective through generations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Featured Products
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our handpicked selection of premium Ayurvedic products for your wellness journey
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/products">
              <Button size="lg" variant="default">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-6 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Start Your Wellness Journey?
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Connect with us on WhatsApp to discuss your health goals and find the perfect Ayurvedic solutions
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary">
              Contact Us Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
