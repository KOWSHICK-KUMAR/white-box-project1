import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, FileCheck } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional legal services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl pt-20 pb-16 md:pt-32 md:pb-24">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm border border-background/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Shield className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-background">Trusted by 500+ Rental Businesses</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-background mb-6 animate-fade-in-up text-balance leading-tight">
            Legal & Payment Solutions for Rental Businesses
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl md:text-2xl text-background/90 mb-8 animate-fade-in-up max-w-2xl" style={{ animationDelay: '0.1s' }}>
            Verified tenants. Robust lease agreements. Smooth payments — one subscription.
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-background/80 mb-10 animate-fade-in-up max-w-2xl leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Streamline your rental business with comprehensive legal services and payment handling. 
            From property verification to payment reconciliation, we've got you covered.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button
              size="lg"
              onClick={() => scrollToSection('plans')}
              className="bg-accent hover:bg-accent-dark text-accent-foreground shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              View Plans
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-2 border-background/30 bg-background/10 backdrop-blur-sm text-background hover:bg-background/20 hover:border-background/50 shadow-lg"
            >
              Contact Sales
            </Button>
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-start gap-3">
              <div className="p-2 bg-accent/20 backdrop-blur-sm rounded-lg">
                <Shield className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-background mb-1">Legal Protection</h3>
                <p className="text-sm text-background/80">Comprehensive lease agreements</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 bg-accent/20 backdrop-blur-sm rounded-lg">
                <FileCheck className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-background mb-1">Verified Tenants</h3>
                <p className="text-sm text-background/80">Thorough verification process</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 bg-accent/20 backdrop-blur-sm rounded-lg">
                <FileCheck className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-background mb-1">Payment Handling</h3>
                <p className="text-sm text-background/80">Automated reconciliation</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
