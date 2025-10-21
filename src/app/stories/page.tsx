import Image from 'next/image'
import { Heart, Calendar, User } from 'lucide-react'

const catStories = [
  {
    id: 1,
    title: "Mittens' Journey from Shelter to Forever Home",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    image: "/generated/gallery-1.png",
    excerpt: "When I first saw Mittens at the local shelter, she was curled up in the corner of her cage, barely moving. The shelter staff told me she had been there for over six months...",
    story: "What drew me to her wasn't just her beautiful orange fur, but the sadness in her eyes. I knew I had to give her a chance. The first few weeks were challenging - she would hide under the bed and only come out at night. But with patience, treats, and gentle words, she slowly began to trust. Now, two years later, Mittens is the most affectionate cat I've ever known. She greets me at the door every day and sleeps curled up on my chest at night. Adopting her didn't just save her life - it enriched mine in ways I never imagined.",
    likes: 342
  },
  {
    id: 2,
    title: "How Shadow Helped Me Through Difficult Times",
    author: "Michael Chen",
    date: "March 10, 2024",
    image: "/generated/gallery-3.png",
    excerpt: "During the hardest year of my life, when I was going through health challenges and felt completely alone, a black cat showed up at my doorstep...",
    story: "I named him Shadow because he seemed to appear from nowhere. At first, I thought he was just a stray looking for food, but he kept coming back. Eventually, I invited him inside. Shadow had an uncanny ability to sense when I was having a bad day. He would climb into my lap and purr, his warm presence somehow making everything feel more bearable. His companionship became my anchor. Shadow taught me that sometimes the universe sends exactly what we need, exactly when we need it. He may have been a rescue, but in truth, he rescued me.",
    likes: 589
  },
  {
    id: 3,
    title: "The Day We Found Three Kittens in Our Garden",
    author: "Emily Rodriguez",
    date: "March 5, 2024",
    image: "/generated/gallery-2.png",
    excerpt: "It was a rainy morning in April when my daughter came running inside, soaking wet, saying she heard crying sounds from the garden shed...",
    story: "We found three tiny kittens, no more than a few weeks old, huddled together in an old cardboard box. Their mother was nowhere to be found. My husband and I looked at each other, knowing what we had to do. We brought them inside, dried them off, and started bottle-feeding them every few hours. Those first weeks were exhausting but magical. Watching them grow from helpless babies into playful, curious cats was one of the most rewarding experiences of our lives. We kept all three - Luna, Star, and Sky. They're inseparable siblings and have brought so much joy to our home. Sometimes the best family members are the ones we never planned for.",
    likes: 721
  },
  {
    id: 4,
    title: "Bella's Amazing Recovery Story",
    author: "Dr. James Peterson",
    date: "February 28, 2024",
    image: "/generated/gallery-4.png",
    excerpt: "As a veterinarian, I've seen many difficult cases, but Bella's story stands out as one of the most inspiring recoveries I've witnessed...",
    story: "Bella came to us in critical condition after being hit by a car. Her chances of survival were slim, and her owners were devastated. But this calico cat had an incredible will to live. Through multiple surgeries, months of physical therapy, and unwavering dedication from her family, Bella not only survived but thrived. Today, she runs and plays like nothing ever happened. Her story reminds me why I became a vet - to give animals a second chance at life. Bella's resilience taught everyone at our clinic that with love, determination, and proper care, miracles can happen.",
    likes: 456
  },
  {
    id: 5,
    title: "The Senior Cat Who Became a Therapy Cat",
    author: "Jennifer Martinez",
    date: "February 20, 2024",
    image: "/generated/gallery-5.png",
    excerpt: "When I adopted Snowball at age 12, everyone told me I was crazy. 'Senior cats are too set in their ways,' they said. They couldn't have been more wrong...",
    story: "Snowball had such a calm, gentle nature that I decided to get her certified as a therapy cat. Now, at 14, she visits nursing homes and hospitals, bringing comfort to patients who need it most. I've seen her sit patiently with Alzheimer's patients for hours, and witnessed children in the hospital smile for the first time in days when they meet her. Age is just a number - Snowball proved that senior cats have so much love left to give. She's touched more lives than I ever imagined, and she's my daily reminder that it's never too late to make a difference.",
    likes: 892
  },
  {
    id: 6,
    title: "From Feral to Family Member",
    author: "Tom Anderson",
    date: "February 15, 2024",
    image: "/generated/gallery-6.png",
    excerpt: "Tiger started as a feral cat living in the alley behind my apartment. It took me almost a year to earn his trust...",
    story: "Every day, I would sit outside and put food out, gradually moving it closer to me. At first, Tiger would wait until I was gone before eating. Then one day, he ate while I was sitting 10 feet away. Progress was slow but steady. After months of patience, he let me touch him for the first time. I'll never forget that moment. Today, Tiger is a completely domesticated house cat who loves belly rubs and follows me everywhere. His transformation taught me that with patience and compassion, even the most fearful hearts can learn to trust again. Tiger isn't just my cat - he's proof that love can overcome anything.",
    likes: 634
  },
]

export default function StoriesPage() {
  return (
    <div className="py-16">
      {/* Header */}
      <div className="bg-gradient-to-br from-background to-muted py-16 mb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-heading font-bold mb-6">Featured Cat Stories</h1>
            <p className="text-xl text-muted-foreground">
              Heartwarming adoption stories, rescue features, and community-submitted tales that celebrate the bond between cats and their humans
            </p>
          </div>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {catStories.map((story, index) => (
            <article
              key={story.id}
              className={`bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all ${
                index % 2 === 0 ? 'lg:grid lg:grid-cols-2 lg:gap-8' : 'lg:grid lg:grid-cols-2 lg:gap-8'
              }`}
            >
              {/* Image */}
              <div className={`relative h-72 lg:h-full ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Image
                  src={story.image}
                  alt={story.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
                  <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                  <span className="font-semibold text-sm">{story.likes}</span>
                </div>
              </div>

              {/* Content */}
              <div className={`p-8 lg:p-10 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h2 className="text-3xl font-heading font-bold mb-4 leading-tight">
                  {story.title}
                </h2>

                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{story.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{story.date}</span>
                  </div>
                </div>

                <p className="text-foreground/80 mb-4 leading-relaxed text-lg">
                  {story.excerpt}
                </p>

                <p className="text-foreground/70 leading-relaxed">
                  {story.story}
                </p>

                <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
                  <button className="flex items-center gap-2 text-primary hover:text-accent transition-colors font-semibold">
                    <Heart className="w-5 h-5" />
                    <span>Like This Story</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Submit Story CTA */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-3xl p-12 text-center shadow-xl">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Share Your Cat's Story
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Do you have a heartwarming story about your feline friend? We'd love to feature it!
            </p>
            <button className="px-8 py-4 bg-white text-primary rounded-full font-semibold text-lg hover:bg-white/90 transition-all hover:shadow-lg">
              Submit Your Story
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
