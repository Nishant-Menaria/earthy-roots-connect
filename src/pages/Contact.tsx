import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const Contact = () => {
  const handleWhatsAppClick = () => {
    const message = "Hi, I'd like to know more about your Ayurvedic products.";
    const whatsappUrl = `https://wa.me/916376919947?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    toast.success("Opening WhatsApp...");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:ssherbal000@gmail.com";
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our products or need personalized recommendations? We're here to help!
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* WhatsApp Card */}
          <Card className="border-[#25D366]/20 hover:shadow-lg transition-all duration-300 animate-fade-in">
            <CardContent className="pt-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0 p-6 rounded-full bg-[#25D366]/10">
                  <MessageCircle className="h-12 w-12 text-[#25D366]" />
                </div>
                <div className="flex-1 text-center md:text-left space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">WhatsApp</h3>
                  <p className="text-muted-foreground">
                    Get instant responses to your queries. Chat with us directly on WhatsApp for quick assistance.
                  </p>
                  <p className="text-lg font-semibold text-foreground">+91 XXXXX XXXXX</p>
                </div>
                <Button
                  size="lg"
                  onClick={handleWhatsAppClick}
                  className="bg-[#25D366] hover:bg-[#1fb854] text-white flex-shrink-0"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat Now
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Email Card */}
          <Card className="hover:shadow-lg transition-all duration-300 animate-fade-in">
            <CardContent className="pt-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0 p-6 rounded-full bg-primary/10">
                  <Mail className="h-12 w-12 text-primary" />
                </div>
                <div className="flex-1 text-center md:text-left space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">Email</h3>
                  <p className="text-muted-foreground">
                    Send us a detailed message and we'll get back to you within 24 hours.
                  </p>
                  <p className="text-lg font-semibold text-foreground">ssherbal000@gmail.com</p>
                </div>
                <Button
                  size="lg"
                  variant="default"
                  onClick={handleEmailClick}
                  className="flex-shrink-0"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Additional Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300 animate-fade-in">
              <CardContent className="pt-8 text-center space-y-4">
                <div className="inline-flex p-4 rounded-full bg-primary/10">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Phone</h3>
                <p className="text-muted-foreground">+91 6376919947</p>
                <p className="text-sm text-muted-foreground">Mon - Sat: 9:00 AM - 7:00 PM</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 animate-fade-in">
              <CardContent className="pt-8 text-center space-y-4">
                <div className="inline-flex p-4 rounded-full bg-primary/10">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Location</h3>
                <p className="text-muted-foreground">
                  India
                </p>
                <p className="text-sm text-muted-foreground">Serving customers nationwide</p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <Card className="bg-primary text-primary-foreground border-0 animate-fade-in">
            <CardContent className="pt-8 text-center space-y-4">
              <h3 className="text-2xl font-bold">Ready to Experience Ayurvedic Wellness?</h3>
              <p className="text-primary-foreground/90 max-w-2xl mx-auto">
                Connect with us today to discuss your health goals and discover the perfect natural remedies for your journey to wellness.
              </p>
              <Button
                size="lg"
                variant="secondary"
                onClick={handleWhatsAppClick}
                className="mt-4"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Start Your Journey
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
