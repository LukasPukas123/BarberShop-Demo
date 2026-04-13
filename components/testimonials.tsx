import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Michael Thompson",
    role: "Regular Client",
    quote: "Best barbershop in the city, hands down. The attention to detail is unmatched, and the atmosphere makes every visit feel special.",
    rating: 5
  },
  {
    name: "David Chen",
    role: "First-Time Client",
    quote: "Finally found my go-to spot. The hot towel shave was an experience I didn't know I needed. Absolutely worth every penny.",
    rating: 5
  },
  {
    name: "James Wilson",
    role: "Monthly Member",
    quote: "Been coming here for 3 years now. The consistency and quality never wavers. These guys truly understand their craft.",
    rating: 5
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 bg-card/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">Testimonials</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it—hear from the gentlemen who trust us 
            with their grooming.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border p-8 relative"
            >
              {/* Quote Mark */}
              <div className="text-primary/20 font-serif text-8xl absolute top-4 left-6 leading-none">
                &ldquo;
              </div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-6 relative">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-6 relative">
                {testimonial.quote}
              </p>

              {/* Author */}
              <div className="pt-6 border-t border-border">
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-muted-foreground text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
