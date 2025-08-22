import type { NavigationMenuItem } from '@nuxt/ui'

export const navLinks: NavigationMenuItem[] = [
  {
    label: 'Home',
    icon: 'i-lucide-home',
    to: '/'
  },
  {
    label: 'Arithmos',
    icon: 'i-lucide-calculator',
    to: '/arithmos'
  },
  {
    label: 'Ethos',
    icon: 'i-lucide-book-open',
    to: '/ethos'
  },
  {
    label: 'Blog',
    icon: 'i-lucide-file-text',
    to: '/blog'
  }
]
