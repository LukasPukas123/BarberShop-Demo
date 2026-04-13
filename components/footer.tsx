import Link from "next/link"
import { Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <span className="font-serif text-2xl tracking-wide text-foreground">
              AUTOMATE EFFECT
            </span>
            <span className="text-primary text-xs tracking-[0.3em] uppercase -mt-1">
              Barbershop Demo
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            {/* X (Twitter) Icon */}
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="X"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Automate Effect. All rights reserved.
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-border flex flex-wrap justify-center gap-8 text-sm">
          <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="#gallery" className="text-muted-foreground hover:text-primary transition-colors">
            Gallery
          </Link>
          <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">
            Reviews
          </Link>
          <Link href="#booking" className="text-muted-foreground hover:text-primary transition-colors">
            Book Now
          </Link>
          <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}
