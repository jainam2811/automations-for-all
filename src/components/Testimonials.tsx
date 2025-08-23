const Testimonials = () => {
  const testimonials = [
    {
      quote: "I landed my first ₹80,000 AI project within 3 weeks.",
      author: "Rahul S.",
      role: "Freelance Developer"
    },
    {
      quote: "I automated 70% of my client work, now I handle more clients without burning out.",
      author: "Priya M.",
      role: "Agency Owner"
    },
    {
      quote: "Doubled my monthly income in 60 days using this system.",
      author: "Amit K.",
      role: "Marketing Professional"
    }
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Stories of Our Students.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background p-8 rounded-xl shadow-elegant">
              <div className="text-4xl mb-4">💬</div>
              <blockquote className="text-lg font-medium mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-muted-foreground text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-xl font-semibold gradient-hero bg-clip-text text-transparent">
            👉 These aren't tech geniuses. They're people just like you who decided to stop watching and start building.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;