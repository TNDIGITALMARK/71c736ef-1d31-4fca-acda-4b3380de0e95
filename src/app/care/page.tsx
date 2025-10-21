'use client'

import { useState } from 'react'
import { Heart, Utensils, Brain, AlertCircle, Search } from 'lucide-react'

const careCategories = [
  { id: 'all', label: 'All Topics', icon: null },
  { id: 'health', label: 'Health', icon: Heart },
  { id: 'nutrition', label: 'Nutrition', icon: Utensils },
  { id: 'behavior', label: 'Behavior', icon: Brain },
  { id: 'emergency', label: 'Emergency', icon: AlertCircle },
]

const careArticles = [
  {
    id: 1,
    category: 'health',
    title: 'Signs of a Healthy Cat',
    excerpt: 'Learn to recognize the key indicators that your cat is in good health, from coat condition to energy levels.',
    content: 'A healthy cat displays clear eyes, a shiny coat, good appetite, and consistent energy levels. Regular monitoring helps catch issues early.'
  },
  {
    id: 2,
    category: 'health',
    title: 'When to Visit the Vet',
    excerpt: 'Understanding when your cat needs professional medical attention can save their life.',
    content: 'Schedule annual checkups and watch for warning signs like lethargy, loss of appetite, vomiting, or behavioral changes that warrant immediate attention.'
  },
  {
    id: 3,
    category: 'health',
    title: 'Preventive Care Essentials',
    excerpt: 'Stay ahead of health issues with proper preventive care including vaccinations and regular checkups.',
    content: 'Keep vaccinations current, maintain flea and tick prevention, schedule dental cleanings, and monitor weight regularly.'
  },
  {
    id: 4,
    category: 'nutrition',
    title: 'Feeding by Age',
    excerpt: 'Different life stages require different nutritional approaches for optimal cat health.',
    content: 'Kittens need high-calorie food for growth, adults require balanced nutrition, and seniors benefit from easily digestible, lower-calorie options.'
  },
  {
    id: 5,
    category: 'nutrition',
    title: 'Wet Food vs Dry Food',
    excerpt: 'Understanding the benefits and drawbacks of different food types helps you make the best choice.',
    content: 'Wet food provides hydration and is easier to digest, while dry food helps with dental health. Many vets recommend a combination.'
  },
  {
    id: 6,
    category: 'nutrition',
    title: 'Treats and Supplements',
    excerpt: 'Learn how to safely incorporate treats and supplements into your cat\'s diet.',
    content: 'Treats should not exceed 10% of daily calories. Consult your vet before adding supplements like omega-3s or joint support.'
  },
  {
    id: 7,
    category: 'behavior',
    title: 'Understanding Cat Communication',
    excerpt: 'Decode your cat\'s body language, vocalizations, and behaviors to strengthen your bond.',
    content: 'Tail position, ear orientation, and vocalization patterns reveal your cat\'s emotional state. Learn to read these signals for better communication.'
  },
  {
    id: 8,
    category: 'behavior',
    title: 'Litter Box Solutions',
    excerpt: 'Solve common litter box problems and maintain proper hygiene for your cat.',
    content: 'Provide one litter box per cat plus one extra, scoop daily, change litter weekly, and place boxes in quiet, accessible locations.'
  },
  {
    id: 9,
    category: 'behavior',
    title: 'Managing Scratching',
    excerpt: 'Redirect scratching behavior to appropriate surfaces while protecting your furniture.',
    content: 'Provide scratching posts near favorite spots, use deterrents on furniture, trim nails regularly, and reward appropriate scratching.'
  },
  {
    id: 10,
    category: 'emergency',
    title: 'Cat First Aid Basics',
    excerpt: 'Essential first aid knowledge every cat owner should have for emergency situations.',
    content: 'Know how to handle bleeding, choking, poisoning, and burns. Keep a pet first aid kit ready and have your vet\'s emergency number accessible.'
  },
  {
    id: 11,
    category: 'emergency',
    title: 'Toxic Foods to Avoid',
    excerpt: 'Common foods that are dangerous or deadly to cats must be kept away at all times.',
    content: 'Never feed cats chocolate, onions, garlic, grapes, alcohol, caffeine, xylitol, or raw dough. Even small amounts can be toxic.'
  },
  {
    id: 12,
    category: 'emergency',
    title: 'Emergency Warning Signs',
    excerpt: 'Recognize critical symptoms that require immediate veterinary attention.',
    content: 'Seek emergency care for difficulty breathing, seizures, inability to urinate, severe lethargy, or suspected poisoning.'
  },
]

export default function CarePage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredArticles = careArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="py-16">
      {/* Header */}
      <div className="bg-gradient-to-br from-background to-muted py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-heading font-bold mb-6">Cat Care Guide</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive, well-organized cat care information to help your feline friend thrive
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search care topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-border focus:border-primary focus:outline-none bg-white shadow-sm text-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="container mx-auto px-6 -mt-6 mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {careCategories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                    : 'bg-white text-foreground border-2 border-border hover:border-primary hover:text-primary'
                }`}
              >
                {Icon && <Icon className="w-5 h-5" />}
                {category.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredArticles.map((article) => {
            const CategoryIcon = careCategories.find(c => c.id === article.category)?.icon

            return (
              <div
                key={article.id}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 border border-border"
              >
                <div className="flex items-start gap-3 mb-4">
                  {CategoryIcon && (
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      article.category === 'health' ? 'bg-red-100 text-red-600' :
                      article.category === 'nutrition' ? 'bg-blue-100 text-blue-600' :
                      article.category === 'behavior' ? 'bg-purple-100 text-purple-600' :
                      'bg-orange-100 text-orange-600'
                    }`}>
                      <CategoryIcon className="w-6 h-6" />
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-xl mb-2 leading-tight">
                      {article.title}
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {article.content}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">
              No articles found matching your search.
            </p>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-6 mt-20">
        <div className="bg-secondary text-secondary-foreground rounded-3xl p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-4 text-white">
            Need Personalized Advice?
          </h2>
          <p className="text-lg mb-8 text-secondary-foreground/90">
            Connect with our community of experienced cat owners and share your questions
          </p>
          <button className="px-8 py-4 bg-white text-secondary rounded-full font-semibold text-lg hover:bg-white/90 transition-all hover:shadow-lg">
            Join the Community
          </button>
        </div>
      </div>
    </div>
  )
}
