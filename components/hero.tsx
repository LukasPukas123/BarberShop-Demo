import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-barbershop.jpg"
          alt="Premium barbershop interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24">
        <p className="text-primary uppercase tracking-[0.4em] text-sm mb-6">
          Est. 2024
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground leading-tight mb-6 text-balance">
          Where Tradition Meets Modern Style
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Experience the art of traditional grooming with a modern touch. 
          Premium cuts, hot towel shaves, and expert styling for the modern gentleman.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="uppercase tracking-wider text-sm px-8">
            <Link href="#booking">Book Appointment</Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="uppercase tracking-wider text-sm px-8 border-primary/30 hover:bg-primary/10"
          >
            <Link href="#services">Our Services</Link>
          </Button>
        </div>
      </div>

    </section>
  )
}
