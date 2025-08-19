import type { NavigationMenuItem } from '@nuxt/ui'

export const navLinks: NavigationMenuItem[] = [
  {
    label: 'Home',
    icon: 'i-lucide-home',
    to: '/'
  },
  {
    label: 'Matemática',
    icon: 'i-lucide-calculator',
    to: '/matematica'
  },
  {
    label: 'Filosofia',
    icon: 'i-lucide-book-open',
    to: '/filosofia'
  },
  {
    label: 'Blog',
    icon: 'i-lucide-file-text',
    to: '/blog'
  }
]
