const TargetAudience = () => {
  return (
    <section className="py-24 gradient-subtle">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Built for Ambitious Learners Who Refuse to Stay Average.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Automation School™ was designed for those who know they're meant for more:
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-card p-8 rounded-xl shadow-elegant hover:shadow-glow transition-smooth">
            <div className="text-4xl mb-6">💼</div>
            <h3 className="text-2xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
              Freelancers
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Escape low-paying gigs. Start selling AI solutions clients can't ignore.
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-xl shadow-elegant hover:shadow-glow transition-smooth">
            <div className="text-4xl mb-6">🏢</div>
            <h3 className="text-2xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
              Agency Owners
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Add AI automations to your service suite. Raise your rates. Win bigger contracts.
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-xl shadow-elegant hover:shadow-glow transition-smooth">
            <div className="text-4xl mb-6">👨‍💼</div>
            <h3 className="text-2xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
              Working Professionals
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Become the go-to AI expert in your company. Future-proof your career.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-xl font-semibold">
            This is not just training. It's your{" "}
            <span className="gradient-accent bg-clip-text text-transparent">unfair advantage</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;