import { createSharedComposable } from '@vueuse/core'

const stripNumericSegments = (value: string) => value.replace(/\/(\d+)\.([^/]+)/g, '/$2')

const normalizePath = (path: string) => {
  if (!path || /^(?:https?:|mailto:|tel:|javascript:)/.test(path)) {
    return path
  }

  return stripNumericSegments(path)
}

function _useHeaderLinks() {
  const route = useRoute()

  const louisLavellePath = '/louis-lavelle'
  const blogPath = '/blog'

  const headerLinks = computed(() => [{
    id: 'home',
    label: 'Home',
    icon: 'i-lucide-home',
    to: '/',
    search: false,
    active: route.path === '/'
  }, {
    id: 'louis-lavelle',
    label: 'Louis Lavelle',
    icon: 'i-lucide-user',
    to: louisLavellePath,
    search: false,
    active: route.path.startsWith(louisLavellePath),
    children: [{
      id: 'louis-lavelle-manuel',
      label: 'Manuel de Méthodologie Dialectique',
      description: 'Obra filosófica em francês',
      icon: 'i-lucide-book-open',
      to: normalizePath('/louis-lavelle/manuel-de-methodologie-dialectique/livre-01/reflexion-et-methode'),
      active: route.path.includes('/manuel-de-methodologie-dialectique')
    }, {
      id: 'louis-lavelle-manual',
      label: 'Manual de Metodologia Dialética',
      description: 'Tradução para o português',
      icon: 'i-lucide-book-open',
      to: normalizePath('/louis-lavelle/manual-de-metodologia-dialetica/livro-01/reflexao-e-metodo'),
      active: route.path.includes('/manual-de-metodologia-dialetica')
    }, {
      id: 'louis-lavelle-manual-en',
      label: 'Manual of Dialectical Methodology',
      description: 'Tradução para o inglês',
      icon: 'i-lucide-book-open',
      to: normalizePath('/louis-lavelle/manual-of-dialectical-methodology/book-01/reflection-and-method'),
      active: route.path.includes('/manual-of-dialectical-methodology')
    }]
  }, {
    id: 'blog',
    label: 'Blog',
    icon: 'i-lucide-newspaper',
    to: blogPath
  }])

  return { headerLinks }
}

export const useHeaderLinks = import.meta.client ? createSharedComposable(_useHeaderLinks) : _useHeaderLinks

function _useFooterLinks() {
  const footerLinks = computed(() => [])

  return { footerLinks }
}

export const useFooterLinks = import.meta.client ? createSharedComposable(_useFooterLinks) : _useFooterLinks
