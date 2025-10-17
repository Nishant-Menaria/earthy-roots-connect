import { Leaf, Heart, Sparkles, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            About AyurVeda
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Dedicated to promoting holistic healing through ancient Ayurvedic wisdom and authentic natural remedies
          </p>
        </div>

        {/* Mission Section */}
        <div className="max-w-4xl mx-auto mb-16 animate-fade-in">
          <Card className="border-primary/20">
            <CardContent className="pt-8 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Our mission is to make authentic Ayurvedic healing accessible to everyone. We believe in the power of nature's remedies to restore balance, promote wellness, and enhance quality of life. Through our carefully curated selection of pure, traditional Ayurvedic products, we aim to bridge ancient wisdom with modern living.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center hover:shadow-lg transition-all duration-300 animate-fade-in">
            <CardContent className="pt-8 space-y-4">
              <div className="inline-flex p-4 rounded-full bg-primary/10">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Authenticity</h3>
              <p className="text-muted-foreground">
                We source only pure, authentic Ayurvedic herbs and ingredients, maintaining the highest standards of quality and tradition.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300 animate-fade-in">
            <CardContent className="pt-8 space-y-4">
              <div className="inline-flex p-4 rounded-full bg-primary/10">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Holistic Approach</h3>
              <p className="text-muted-foreground">
                We embrace the Ayurvedic principle of treating the whole person - mind, body, and spirit - not just symptoms.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300 animate-fade-in">
            <CardContent className="pt-8 space-y-4">
              <div className="inline-flex p-4 rounded-full bg-primary/10">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Ancient Wisdom</h3>
              <p className="text-muted-foreground">
                Our products are based on time-tested Ayurvedic formulations that have been trusted for thousands of years.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* About Ayurveda Section */}
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">What is Ayurveda?</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Ayurveda, meaning "the science of life," is a 5,000-year-old system of natural healing that originated in India. It's based on the belief that health and wellness depend on a delicate balance between the mind, body, and spirit.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Our Commitment</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              We are committed to providing you with the finest Ayurvedic products that honor ancient traditions while meeting modern quality standards. Each product is carefully selected and tested to ensure its purity, potency, and effectiveness.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Why Choose Us?</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span className="text-muted-foreground">100% natural and pure ingredients sourced from trusted suppliers</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span className="text-muted-foreground">Traditional Ayurvedic formulations backed by ancient wisdom</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span className="text-muted-foreground">Personalized guidance and support for your wellness journey</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span className="text-muted-foreground">Commitment to sustainability and ethical sourcing practices</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
