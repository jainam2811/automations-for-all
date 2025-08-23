const NewEra = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            A New Era of Work Has Begun.
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
            <p>Every industry is shifting. Repetitive work is disappearing.</p>
            <p>But a new kind of expert is rising — the AI automation professional.</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-8 rounded-xl gradient-subtle shadow-elegant">
            <div className="text-6xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-4">Works smarter, not harder.</h3>
          </div>
          
          <div className="text-center p-8 rounded-xl gradient-subtle shadow-elegant">
            <div className="text-6xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-4">Gets paid for ideas, not hours.</h3>
          </div>
          
          <div className="text-center p-8 rounded-xl gradient-subtle shadow-elegant">
            <div className="text-6xl mb-4">🔄</div>
            <h3 className="text-xl font-semibold mb-4">Builds solutions once… and earns from them again and again.</h3>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-xl font-semibold gradient-hero bg-clip-text text-transparent">
            👉 The only question: Will you adapt, or be left behind?
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewEra;