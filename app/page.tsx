import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Gallery } from "@/components/gallery"
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"
import { Booking } from "@/components/booking"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Chatbot } from "@/components/chatbot"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Testimonials />
      <Booking />
      <Contact />
      <Footer />
      <Chatbot />
    </main>
  )
}
