import { MapPin, Phone, Clock, Mail } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["123 Main Street, Suite 100", "Downtown District, NY 10001"]
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["(555) 123-4567", "Mon-Sat: 9AM - 7PM"]
  },
  {
    icon: Clock,
    title: "Hours",
    lines: ["Mon-Fri: 9AM - 7PM", "Sat: 9AM - 5PM", "Sun: Closed"]
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["hello@gentlemanscut.com", "appointments@gentlemanscut.com"]
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-card/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">Get In Touch</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance">
            Contact Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have questions? Want to schedule an appointment? 
            We&apos;d love to hear from you.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-card border border-border p-8 text-center hover:border-primary/50 transition-colors"
            >
              <item.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-xl text-foreground mb-4">{item.title}</h3>
              {item.lines.map((line, i) => (
                <p key={i} className="text-muted-foreground text-sm">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
