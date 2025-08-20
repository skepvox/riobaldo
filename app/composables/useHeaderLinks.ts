import { createSharedComposable } from '@vueuse/core'

function _useHeaderLinks() {
  const route = useRoute()
  
  const headerLinks = computed(() => {
    return [{
      label: 'Home',
      icon: 'i-lucide-home',
      to: '/',
      search: false,
      active: route.path === '/'
    }, {
      label: 'Matemática',
      icon: 'i-lucide-calculator',
      to: '/matematica',
      search: false,
      active: route.path.startsWith('/matematica'),
      children: [{
        label: 'Visão Geral',
        description: 'Explore os módulos e capítulos de matemática',
        icon: 'i-lucide-book-open',
        to: '/matematica',
        active: route.path === '/matematica'
      }, {
        label: 'Módulo 1 - Fundamentos',
        description: 'Números naturais e operações básicas',
        icon: 'i-lucide-calculator',
        to: '/matematica/modulo-1/capitulo-1/numeros-naturais',
        active: route.path.includes('/modulo-1')
      }]
    }, {
      label: 'Filosofia',
      icon: 'i-lucide-library',
      to: '/filosofia',
      search: false,
      active: route.path.startsWith('/filosofia'),
      children: [{
        label: 'Visão Geral',
        description: 'Explore as obras filosóficas disponíveis',
        icon: 'i-lucide-book-open',
        to: '/filosofia',
        active: route.path === '/filosofia'
      }, {
        label: 'Louis Lavelle',
        description: 'Manuel de Méthodologie Dialectique',
        icon: 'i-lucide-graduation-cap',
        to: '/filosofia/louis-lavelle/manuel-de-methodologie-dialectique/livre-1/reflexion-et-methode',
        active: route.path.includes('/louis-lavelle')
      }]
    }, {
      label: 'Blog',
      icon: 'i-lucide-file-text',
      to: '/blog',
      search: false,
      active: route.path.startsWith('/blog')
    }]
  })

  return {
    headerLinks
  }
}

export const useHeaderLinks = createSharedComposable(_useHeaderLinks)