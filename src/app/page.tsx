import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Heart, Users, BookOpen } from 'lucide-react'

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background to-muted overflow-hidden">
        <div className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-heading font-bold leading-tight">
                Find Your <span className="text-primary">Feline Friend</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Discover the World of Cats
              </p>
              <p className="text-lg text-foreground/80">
                Expert care advice, heartwarming stories, and a community of cat lovers all in one beautiful destination.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/care"
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:bg-accent transition-all hover:shadow-lg hover:scale-105 inline-flex items-center gap-2"
                >
                  Explore Care Tips
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/stories"
                  className="px-8 py-4 bg-white text-foreground border-2 border-border rounded-full font-semibold text-lg hover:border-primary hover:text-primary transition-all hover:shadow-lg inline-flex items-center gap-2"
                >
                  Read Cat Stories
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/generated/hero-cat.png"
                  alt="Beautiful orange tabby cat"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cat Breeds Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Cat Breeds</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover different cat breeds and find the perfect match for your lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Breed Cards */}
            {[
              { name: 'Tabby', image: '/generated/breed-tabby.png', description: 'Friendly & Playful' },
              { name: 'Siamese', image: '/generated/breed-siamese.png', description: 'Elegant & Vocal' },
              { name: 'Persian', image: '/generated/breed-persian.png', description: 'Calm & Affectionate' },
            ].map((breed) => (
              <div key={breed.name} className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                  <Image
                    src={breed.image}
                    alt={breed.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">{breed.name}</h3>
                <p className="text-muted-foreground text-sm">{breed.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cat Care Tips Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Cat Care Tips</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Essential advice to keep your feline friend healthy and happy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Heart,
                title: 'Health Care',
                description: 'Regular vet visits and preventive care tips',
                color: 'bg-red-100 text-red-600'
              },
              {
                icon: BookOpen,
                title: 'Nutrition',
                description: 'Proper feeding and dietary recommendations',
                color: 'bg-blue-100 text-blue-600'
              },
              {
                icon: Users,
                title: 'Wellness',
                description: 'Mental stimulation and exercise guidance',
                color: 'bg-green-100 text-green-600'
              },
            ].map((tip) => (
              <div key={tip.title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${tip.color} flex items-center justify-center`}>
                  <tip.icon className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">{tip.title}</h3>
                <p className="text-muted-foreground">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Photo Gallery</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Adorable moments captured from our feline friends
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer">
                <Image
                  src={`/generated/gallery-${num}.png`}
                  alt={`Cat photo ${num}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              View Full Gallery
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold mb-8 text-white">Why Choose Us?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-3">
                <Heart className="w-12 h-12 mx-auto mb-4 text-white" />
                <h3 className="font-heading font-semibold text-xl text-white">Expert Advice</h3>
                <p className="text-secondary-foreground/90">
                  Learn from certified cat behaviorists and vets
                </p>
              </div>

              <div className="space-y-3">
                <Users className="w-12 h-12 mx-auto mb-4 text-white" />
                <h3 className="font-heading font-semibold text-xl text-white">Community & Support</h3>
                <p className="text-secondary-foreground/90">
                  Connect with fellow cat lovers
                </p>
              </div>
            </div>

            <Link
              href="/care"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-secondary rounded-full font-semibold text-lg hover:bg-white/90 transition-all hover:shadow-lg"
            >
              Join Our Community
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
