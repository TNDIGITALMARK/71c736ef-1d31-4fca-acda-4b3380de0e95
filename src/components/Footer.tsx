import Link from 'next/link'
import { Cat, Mail, Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xl font-bold">
              <Cat className="w-6 h-6" />
              <span className="font-heading">Purrfect Paws</span>
            </div>
            <p className="text-sm text-secondary-foreground/90">
              Everything you need to love your cat better. Expert care advice, heartwarming stories, and a community of cat lovers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/care" className="text-sm hover:text-white transition-colors">Cat Care Guide</Link></li>
              <li><Link href="/stories" className="text-sm hover:text-white transition-colors">Cat Stories</Link></li>
              <li><Link href="/gallery" className="text-sm hover:text-white transition-colors">Photo Gallery</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/care" className="text-sm hover:text-white transition-colors">Health Tips</Link></li>
              <li><Link href="/care" className="text-sm hover:text-white transition-colors">Nutrition Guide</Link></li>
              <li><Link href="/care" className="text-sm hover:text-white transition-colors">Behavior Insights</Link></li>
              <li><Link href="/care" className="text-sm hover:text-white transition-colors">Emergency Care</Link></li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-white">Stay Connected</h4>
            <p className="text-sm mb-4 text-secondary-foreground/90">
              Subscribe to our newsletter for cat care tips
            </p>
            <div className="flex gap-3 mb-4">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 text-sm rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-white/40"
              />
              <button className="px-4 py-2 bg-white text-secondary rounded-lg hover:bg-white/90 transition-colors">
                <Mail className="w-4 h-4" />
              </button>
            </div>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary-foreground/80">
            © 2024 Purrfect Paws. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
