'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Cat } from 'lucide-react'

export default function Navigation() {
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/breeds', label: 'Cat Breeds' },
    { href: '/care', label: 'Care' },
    { href: '/tips', label: 'Care Tips' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/stories', label: 'Stories' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary hover:text-accent transition-colors">
            <Cat className="w-8 h-8" />
            <span className="font-heading">Purrfect Paws</span>
          </Link>

          {/* Navigation Links */}
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-medium text-sm uppercase tracking-wide transition-colors ${
                    pathname === link.href
                      ? 'text-primary font-semibold'
                      : 'text-foreground/70 hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
