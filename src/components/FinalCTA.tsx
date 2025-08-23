import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full gradient-hero opacity-5"></div>
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full gradient-primary opacity-10 blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full gradient-accent opacity-10 blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold">
            Don't Watch the AI Boom.{" "}
            <span className="gradient-hero bg-clip-text text-transparent">Lead It.</span>
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
            <p>AI isn't coming. It's here.</p>
            <p>
              Every month you wait, someone else learns these skills and takes the opportunity meant for you.
            </p>
            <p className="font-semibold">
              Today is the day to act. Build your first automation. Land your first client. Claim your future.
            </p>
          </div>
          
          <div className="pt-8">
            <Button variant="hero" size="xl" className="text-xl">
              🔥 Join Automation School™ Today — Start Your 30-Day Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;