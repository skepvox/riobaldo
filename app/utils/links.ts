import type { NavigationMenuItem } from '@nuxt/ui'

export const navLinks: NavigationMenuItem[] = [
  {
    label: 'Home',
    icon: 'i-lucide-home',
    to: '/'
  },
  {
    label: 'Projetos',
    icon: 'i-lucide-folder',
    to: '/projects'
  },
  // {
  //   label: 'Álgebra',
  //   icon: 'i-lucide-mic',
  //   to: '/speaking'
  // },
  {
    label: 'Blog',
    icon: 'i-lucide-file-text',
    to: '/blog'
  },
  // {
  //   label: 'About',
  //   icon: 'i-lucide-user',
  //   to: '/about'
  // }
]
