import { Scissors, Sparkles, Clock } from "lucide-react"

const services = [
  {
    icon: Scissors,
    title: "Classic Haircut",
    description: "Precision cutting techniques tailored to your face shape and style preferences.",
    price: "$45",
    duration: "45 min"
  },
  {
    icon: Sparkles,
    title: "Hot Towel Shave",
    description: "Traditional straight razor shave with hot towels and premium products.",
    price: "$35",
    duration: "30 min"
  },
  {
    icon: Scissors,
    title: "Beard Grooming",
    description: "Expert beard shaping, trimming, and conditioning for a refined look.",
    price: "$30",
    duration: "25 min"
  },
  {
    icon: Clock,
    title: "The Full Experience",
    description: "Complete grooming package: haircut, shave, and beard treatment.",
    price: "$95",
    duration: "90 min"
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">What We Offer</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From classic cuts to premium grooming experiences, every service is crafted 
            with precision and care by our expert barbers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card border border-border p-8 hover:border-primary/50 transition-all duration-300"
            >
              <service.icon className="w-8 h-8 text-primary mb-6" />
              <h3 className="font-serif text-xl text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-primary font-semibold text-lg">{service.price}</span>
                <span className="text-muted-foreground text-sm">{service.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
