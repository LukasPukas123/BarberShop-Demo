import Image from "next/image"

const galleryImages = [
  {
    src: "/images/barber-work.jpg",
    alt: "Barber at work",
    span: "md:col-span-2 md:row-span-2"
  },
  {
    src: "/images/gallery-1.jpg",
    alt: "Hot towel shave experience",
    span: ""
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Modern fade haircut",
    span: ""
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Beard grooming session",
    span: ""
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Premium grooming tools",
    span: ""
  },
]

export function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 px-6 bg-card/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">Our Work</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance">
            The Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A glimpse into the craft and artistry that defines every visit to our shop.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden group aspect-square ${image.span}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-foreground text-sm uppercase tracking-wider">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
