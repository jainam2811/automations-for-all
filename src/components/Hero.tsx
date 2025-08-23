import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-automation.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-subtle"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-6xl">
        {/* Pre-headline */}
        <div className="mb-6">
          <span className="inline-block px-6 py-3 rounded-full gradient-accent text-white font-medium text-lg shadow-accent">
            From Beginner to In-Demand in Just 30 Days
          </span>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          Build & Sell 
          <span className="gradient-hero bg-clip-text text-transparent"> AI Automations</span>,
          <br />
          Even If You're Not Technical
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
          Learn to create Client-Ready AI Systems™ that businesses pay for, package them as services, 
          and charge premium rates with confidence.
        </p>
        
        {/* CTA */}
        <div className="space-y-6">
          <Button variant="hero" size="xl" className="text-xl">
            🔥 Start Your AI Journey Today
          </Button>
          
          <p className="text-muted-foreground">
            Trusted by 1,000+ learners. Beginner-friendly. Results-driven.
          </p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full gradient-primary opacity-20 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full gradient-accent opacity-20 blur-xl"></div>
    </section>
  );
};

export default Hero;