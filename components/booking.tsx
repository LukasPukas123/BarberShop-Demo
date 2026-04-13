"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, User } from "lucide-react"

const services = [
  "Classic Haircut",
  "Hot Towel Shave",
  "Beard Grooming",
  "The Full Experience",
]

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
]

export function Booking() {
  const [selectedService, setSelectedService] = useState("")
  const [selectedTime, setSelectedTime] = useState("")

  return (
    <section id="booking" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">Reserve Your Spot</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance">
            Book an Appointment
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Choose your service, pick a time that works for you, and leave the rest to us.
          </p>
        </div>

        {/* Booking Form */}
        <div className="bg-card border border-border p-8 md:p-12">
          <form className="space-y-8">
            {/* Name & Email */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Your Name
                </label>
                <Input 
                  placeholder="John Smith" 
                  className="bg-input border-border focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm uppercase tracking-wider text-muted-foreground">
                  Email Address
                </label>
                <Input 
                  type="email"
                  placeholder="john@example.com" 
                  className="bg-input border-border focus:border-primary"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="text-sm uppercase tracking-wider text-muted-foreground">
                Phone Number
              </label>
              <Input 
                type="tel"
                placeholder="(555) 123-4567" 
                className="bg-input border-border focus:border-primary"
              />
            </div>

            {/* Service Selection */}
            <div className="space-y-4">
              <label className="text-sm uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Select Service
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {services.map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className={`p-4 border text-sm transition-all ${
                      selectedService === service 
                        ? "border-primary bg-primary/10 text-primary" 
                        : "border-border text-muted-foreground hover:border-primary/50"
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Selection */}
            <div className="space-y-4">
              <label className="text-sm uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Select Time
              </label>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`p-3 border text-sm transition-all ${
                      selectedTime === time 
                        ? "border-primary bg-primary/10 text-primary" 
                        : "border-border text-muted-foreground hover:border-primary/50"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit */}
            <Button 
              type="submit" 
              size="lg" 
              className="w-full uppercase tracking-wider text-sm"
            >
              Confirm Booking
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
