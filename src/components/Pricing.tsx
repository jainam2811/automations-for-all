import { Button } from "@/components/ui/button";

const Pricing = () => {
  const paths = [
    {
      title: "The Bootcamp",
      subtitle: "2-Day AI Kickstart",
      price: "₹9,999",
      bestFor: "Beginners and professionals who want to get hands-on results immediately.",
      promise: "Build and deploy your first powerful AI automation in a single weekend. You'll walk away with a tangible skill and a clear understanding of the opportunity.",
      features: [
        "An intensive live weekend workshop in Delhi.",
        "Build one complete, real-world automation from start to finish.",
        "Step-by-step guidance directly from our expert instructors.",
        "Become a certified AI Automation expert in 2 days"
      ],
      cta: "Perfect for getting a quick, powerful win.",
      popular: false
    },
    {
      title: "AI Automation Mastery",
      subtitle: "The Flagship Course",
      price: "₹59,999",
      bestFor: "Freelancers, agency owners, and professionals who are serious about building a high-income career in AI automation.",
      promise: "Go from beginner to a certified, in-demand AI Automation Professional in 90 days. Master the complete Client-Ready AI Systems™ framework, build a robust portfolio, and learn to confidently pitch, price, and win high-value clients.",
      features: [
        "90-day comprehensive curriculum with live and on-demand lessons.",
        "Build a portfolio of 5+ advanced, client-ready automations.",
        "The complete Monetization Playbook (proposal templates, pricing frameworks, and client-getting scripts).",
        "Weekly group coaching calls and direct mentorship.",
        "Lifetime access to our private community and all future course updates."
      ],
      cta: "The ultimate path to becoming a top-tier automation expert.",
      popular: true
    },
    {
      title: "Automation Accelerator",
      subtitle: "The Self-Paced Program",
      price: "₹14,999",
      bestFor: "Self-starters, entrepreneurs, and busy professionals who need maximum flexibility.",
      promise: "Master the core principles of the Client-Ready AI System™ entirely on your own schedule. Get the essential knowledge, tools, and templates to start building effective automations immediately.",
      features: [
        "Instant, lifetime access to the complete library of core video lessons.",
        "A rich collection of plug-and-play automation templates and resources.",
        "Learn the A-to-Z process of building and monetizing your skills at your own pace."
      ],
      cta: "Ideal for learning on your own schedule.",
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your Path to Becoming an Automation Pro
          </h2>
          <p className="text-xl text-muted-foreground">
            Whether you want to start fast, go deep, or learn on your own schedule, there's a path designed for your goals.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {paths.map((path, index) => (
            <div key={index} className={`relative p-8 rounded-2xl shadow-elegant ${path.popular ? 'bg-gradient-to-b from-primary/5 to-accent/5 border-2 border-primary/20' : 'bg-background'}`}>
              {path.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="gradient-accent px-6 py-2 rounded-full text-white font-semibold text-sm shadow-accent">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{path.title}</h3>
                <p className="text-muted-foreground mb-4">{path.subtitle}</p>
                <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-4">
                  {path.price}
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <p className="font-semibold text-sm text-muted-foreground mb-2">BEST FOR:</p>
                  <p className="text-sm leading-relaxed">{path.bestFor}</p>
                </div>
                
                <div>
                  <p className="font-semibold text-sm text-muted-foreground mb-2">THE PROMISE:</p>
                  <p className="text-sm leading-relaxed">{path.promise}</p>
                </div>
                
                <div>
                  <p className="font-semibold text-sm text-muted-foreground mb-3">WHAT YOU GET:</p>
                  <ul className="space-y-2">
                    {path.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2 text-sm">
                        <span className="text-primary mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="border-t pt-6">
                <p className="text-sm font-medium text-center mb-4 gradient-accent bg-clip-text text-transparent">
                  {path.cta}
                </p>
                <Button 
                  variant={path.popular ? "hero" : "cta"} 
                  className="w-full"
                  size="lg"
                >
                  Choose This Path
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="hero" size="xl" className="text-xl mb-4">
            🔥 Start My AI Journey Today
          </Button>
          <p className="text-muted-foreground">
            7-Day Risk-Free Guarantee. Join 1,000+ successful learners.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;