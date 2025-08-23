const Problem = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            The Problem Isn't AI. The Problem Is Noise.
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground max-w-4xl mx-auto">
            <p>YouTube tutorials. Twitter threads. Random hacks.</p>
            <p className="font-medium">They leave you overwhelmed, scattered, and unsure where to start.</p>
          </div>
        </div>
        
        <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">The result?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <div className="text-destructive text-xl">❌</div>
              <p>You waste time learning tools you can't monetize.</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="text-destructive text-xl">❌</div>
              <p>Clients don't see you as different from the crowd.</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="text-destructive text-xl">❌</div>
              <p>You feel behind while others are already cashing in.</p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-xl font-semibold gradient-hero bg-clip-text text-transparent">
            👉 The truth? You don't need more tools. You need a system.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;