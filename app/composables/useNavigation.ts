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

  const docsPath = '/docs'
  const louisLavellePath = '/louis-lavelle'
  const blogPath = '/blog'
  const templatesPath = '/templates'
  const videoCoursesPath = '/video-courses'
  const showcasePath = '/showcase'

  const headerLinks = computed(() => [{
    id: 'home',
    label: 'Início',
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
      icon: 'i-lucide-book-marked',
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
      icon: 'i-lucide-book',
      to: normalizePath('/louis-lavelle/manual-of-dialectical-methodology/book-01/reflection-and-method'),
      active: route.path.includes('/manual-of-dialectical-methodology')
    }]
  }, {
    id: 'blog',
    label: 'Blog',
    icon: 'i-lucide-newspaper',
    to: blogPath
  }, {
    id: 'docs',
    label: 'Documentação',
    icon: 'i-lucide-book-marked',
    to: docsPath,
    search: false,
    active: route.path.startsWith(docsPath),
    children: [{
      id: 'docs-getting-started',
      label: 'Primeiros Passos',
      description: 'Aprenda como começar com o Riobaldo para explorar conceitos filosóficos e algébricos.',
      icon: 'i-lucide-rocket',
      to: normalizePath(`${docsPath}/getting-started`),
      active: route.path.startsWith(`${docsPath}/getting-started`)
    }, {
      id: 'docs-guide',
      label: 'Guia',
      description: 'Conheça os conceitos-chave, a estrutura de diretórios e as melhores práticas.',
      icon: 'i-lucide-book-open',
      to: normalizePath(`${docsPath}/guide`),
      active: route.path.startsWith(`${docsPath}/guide`)
    }]
  }, {
    id: 'resources',
    label: 'Recursos',
    icon: 'i-lucide-library',
    to: normalizePath(templatesPath),
    search: false,
    active: route.path.startsWith(normalizePath(templatesPath)) || route.path.startsWith(normalizePath(videoCoursesPath)) || route.path.startsWith(normalizePath(showcasePath)),
    children: [{
      id: 'resources-templates',
      label: 'Templates',
      description: 'Inicie seu próximo projeto com um template do Riobaldo.',
      icon: 'i-lucide-app-window',
      to: normalizePath(templatesPath),
      active: route.path.startsWith(normalizePath(templatesPath))
    }, {
      id: 'resources-video-courses',
      label: 'Cursos em Vídeo',
      description: 'Aprenda Riobaldo assistindo a cursos em vídeo.',
      icon: 'i-lucide-graduation-cap',
      to: normalizePath(videoCoursesPath),
      active: route.path.startsWith(normalizePath(videoCoursesPath))
    }, {
      id: 'resources-showcase',
      label: 'Showcase',
      description: 'Descubra projetos construídos com Riobaldo.',
      icon: 'i-lucide-presentation',
      to: normalizePath(showcasePath),
      active: route.path.startsWith(normalizePath(showcasePath))
    }, {
      id: 'resources-certification',
      label: 'Certificação Riobaldo',
      description: 'Obtenha sua Certificação de Competência.',
      icon: 'i-lucide-medal',
      to: 'https://certification.nuxt.com',
      target: '_blank',
      active: false
    }]
  }, {
    id: 'products',
    label: 'Produtos',
    icon: 'i-lucide-sparkle',
    search: false,
    children: [{
      id: 'products-ui-pro',
      label: 'Riobaldo UI Pro',
      description: 'Construa mais rápido com componentes premium para Vue ou Riobaldo.',
      icon: 'i-lucide-panels-top-left',
      to: 'https://ui.nuxt.com/pro?utm_source=nuxt-website&utm_medium=header',
      target: '_blank',
      active: false
    }, {
      id: 'products-studio',
      label: 'Nuxt Studio',
      description: 'Edite seu site Nuxt Content com um editor visual.',
      icon: 'i-lucide-pen',
      to: 'https://content.nuxt.com/studio/?utm_source=nuxt-website&utm_medium=header',
      target: '_blank',
      active: false
    }, {
      id: 'products-hub',
      label: 'NuxtHub',
      description: 'Implemente e gerencie apps Nuxt full-stack que escalam.',
      icon: 'i-lucide-rocket',
      to: 'https://hub.nuxt.com/?utm_source=nuxt-website&utm_medium=header',
      target: '_blank',
      active: false
    }]
  }])

  return { headerLinks }
}

export const useHeaderLinks = import.meta.client ? createSharedComposable(_useHeaderLinks) : _useHeaderLinks

function _useFooterLinks() {
  const footerLinks = computed(() => [{
    label: 'Comunidade',
    children: [{
      label: 'Nuxters',
      to: 'https://nuxters.nuxt.com',
      target: '_blank'
    }, {
      label: 'Design Kit',
      to: '/design-kit'
    }]
  }, {
    label: 'Produtos',
    children: [{
      label: 'Nuxt UI Pro',
      to: 'https://ui.nuxt.com/pro?utm_source=nuxt-website&utm_medium=footer',
      target: '_blank'
    }, {
      label: 'Nuxt Studio',
      to: 'https://content.nuxt.com/studio/?utm_source=nuxt-website&utm_medium=footer',
      target: '_blank'
    }, {
      label: 'NuxtHub',
      to: 'https://hub.nuxt.com/?utm_source=nuxt-website&utm_medium=footer',
      target: '_blank'
    }]
  }])

  return { footerLinks }
}

export const useFooterLinks = import.meta.client ? createSharedComposable(_useFooterLinks) : _useFooterLinks
