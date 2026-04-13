import Image from "next/image"

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "10K+", label: "Happy Clients" },
  { value: "6", label: "Expert Barbers" },
  { value: "5.0", label: "Google Rating" },
]

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] relative overflow-hidden">
              <Image
                src="/images/hero-barbershop.jpg"
                alt="Our barbershop interior"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative Border */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-primary -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">Our Story</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance">
              Crafting Confidence Since 2009
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-10">
              <p>
                What began as a single chair in a small studio has grown into one of the city&apos;s 
                most respected barbershops. Our philosophy is simple: every man deserves to look 
                and feel his best.
              </p>
              <p>
                We combine time-honored barbering traditions with contemporary techniques, 
                creating an experience that&apos;s both nostalgic and refreshingly modern. Our team 
                of master barbers brings decades of combined expertise to every cut, shave, 
                and style.
              </p>
              <p>
                Step into our shop, and you&apos;ll find more than just a haircut—you&apos;ll discover 
                a community of like-minded gentlemen who appreciate the finer things in life.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-primary font-serif text-3xl mb-1">{stat.value}</div>
                  <div className="text-muted-foreground text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
