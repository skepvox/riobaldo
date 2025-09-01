import { createSharedComposable } from '@vueuse/core'

function _useHeaderLinks() {
  const route = useRoute()

  const headerLinks = computed(() => {
    const to = '/docs'

    return [{
      label: 'Home',
      icon: 'i-lucide-home',
      to: '/',
      search: false,
      active: route.path === '/'
    }, {
      label: 'Louis Lavelle',
      icon: 'i-lucide-user',
      to: '/louis-lavelle',
      search: false,
      active: route.path.startsWith('/louis-lavelle'),
      children: [{
        label: 'Manuel de Méthodologie Dialectique',
        description: 'Obra filosófica em francês',
        icon: 'i-lucide-book-marked',
        to: '/louis-lavelle/manuel-de-methodologie-dialectique/livre-01/reflexion-et-methode',
        active: route.path.includes('/manuel-de-methodologie-dialectique')
      }, {
        label: 'Manual de Metodologia Dialética',
        description: 'Tradução para o português',
        icon: 'i-lucide-book-open',
        to: '/louis-lavelle/manual-de-metodologia-dialetica/livro-01/reflexao-e-metodo',
        active: route.path.includes('/manual-de-metodologia-dialetica')
      }]
    }, {
      label: 'Μᾶρκος Αὐρήλιος',
      icon: 'i-lucide-user',
      to: '/marcus-aurelius',
      search: false,
      active: route.path.startsWith('/marcus-aurelius'),
      children: [{
        label: 'Τὰ εἰς ἑαυτόν',
        description: 'Texto original em grego',
        icon: 'i-lucide-scroll',
        to: '/marcus-aurelius/ta-eis-heauton/biblio-alpha',
        active: route.path.includes('/ta-eis-heauton')
      }, {
        label: 'Para Si Mesmo',
        description: 'Tradução para o português',
        icon: 'i-lucide-book-open',
        to: '/marcus-aurelius/para-si-mesmo/livro-01',
        active: route.path.includes('/para-si-mesmo')
      }]
    }, {
      label: 'Blog',
      icon: 'i-lucide-newspaper',
      to: '/blog'
    }, {
      label: 'Docs',
      icon: 'i-lucide-book-marked',
      to,
      search: false,
      active: route.path.startsWith(to),
      children: [{
        label: 'Get Started',
        description: 'Learn how to get started with Riobaldo to explore philosophical and algebraic concepts.',
        icon: 'i-lucide-rocket',
        to: `${to}/getting-started`,
        active: route.path.startsWith(`${to}/getting-started`)
      }, {
        label: 'Guide',
        description: 'Get the key concepts, directory structure and best practices.',
        icon: 'i-lucide-book-open',
        to: `${to}/guide`,
        active: route.path.startsWith(`${to}/guide`)
      }]
    }, {
      label: 'Resources',
      icon: 'i-lucide-library',
      to: '/templates',
      search: false,
      active: route.path.startsWith('/templates') || route.path.startsWith('/video-courses') || route.path.startsWith('/showcase'),
      children: [{
        label: 'Templates',
        icon: 'i-lucide-app-window',
        description: 'Start your next project with a Riobaldo template.',
        to: '/templates'
      }, {
        label: 'Video Courses',
        description: 'Learn Riobaldo by watching video courses.',
        icon: 'i-lucide-graduation-cap',
        to: '/video-courses'
      }, {
        label: 'Showcase',
        description: 'Discover and explore projects built with Riobaldo.',
        icon: 'i-lucide-presentation',
        to: '/showcase'
      }, {
        label: 'Riobaldo Certification',
        description: 'Obtain your Certification of Competence.',
        icon: 'i-lucide-medal',
        to: 'https://certification.nuxt.com',
        target: '_blank'
      }]
    }, {
      label: 'Products',
      icon: 'i-lucide-sparkle',
      search: false,
      children: [{
        label: 'Riobaldo UI Pro',
        to: 'https://ui.nuxt.com/pro?utm_source=nuxt-website&utm_medium=header',
        description: 'Build faster with premium components for Vue or Riobaldo.',
        icon: 'i-lucide-panels-top-left',
        target: '_blank'
      }, {
        label: 'Nuxt Studio',
        to: 'https://content.nuxt.com/studio/?utm_source=nuxt-website&utm_medium=header',
        description: 'Edit your Nuxt Content website with a visual editor.',
        icon: 'i-lucide-pen',
        target: '_blank'
      }, {
        label: 'NuxtHub',
        to: 'https://hub.nuxt.com/?utm_source=nuxt-website&utm_medium=header',
        description: 'Deploy & manage full-stack Nuxt apps that scale.',
        icon: 'i-lucide-rocket',
        target: '_blank'
      }]
    }]
  })

  return { headerLinks }
}

export const useHeaderLinks = import.meta.client ? createSharedComposable(_useHeaderLinks) : _useHeaderLinks

const footerLinks = [{
  label: 'Community',
  children: [{
    label: 'Nuxters',
    to: 'https://nuxters.nuxt.com',
    target: '_blank'
  }, {
    label: 'Design Kit',
    to: '/design-kit'
  }]
}, {
  label: 'Products',
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
}]

export const useFooterLinks = () => ({ footerLinks })

const _useNavigation = () => {
  const nuxtApp = useNuxtApp()
  const searchTerm = ref<string>('')

  const { headerLinks } = useHeaderLinks()
  const { footerLinks } = useFooterLinks()

  const searchLinks = computed(() => [
    {
      label: 'Ask AI',
      icon: 'i-lucide-wand',
      to: 'javascript:void(0);',
      onSelect: () => nuxtApp.$kapa?.openModal()
    },
    ...headerLinks.value.map((link) => {
      // Remove `/docs` links from command palette
      if (link.search === false) {
        return {
          label: link.label,
          icon: link.icon,
          children: link.children
        }
      }
      return link
    }).filter((link): link is NonNullable<typeof link> => Boolean(link)), {
      label: 'Home',
      icon: 'i-lucide-home',
      to: '/'
    }, {
      label: 'Louis Lavelle',
      icon: 'i-lucide-user',
      to: '/louis-lavelle'
    }, {
      label: 'Marcus Aurelius',
      icon: 'i-lucide-user',
      to: '/marcus-aurelius'
    }, {
      label: 'Newsletter',
      icon: 'i-lucide-mail',
      to: '/newsletter'
    }])

  type SearchGroup = {
    id: string
    label: string
    icon?: string
    items: Array<{
      id: string
      label: string
      suffix?: string
      icon?: string
      avatar?: {
        src?: string
        ui?: {
          root: string
        }
      }
      to: string
      onSelect?: () => Promise<void>
    }>
  }

  const searchGroups = computed<SearchGroup[]>(() => {
    const aiGroup: SearchGroup = {
      id: 'ask-ai-search',
      label: 'AI',
      icon: 'i-lucide-wand',
      items: []
    }

    const modulesGroup: SearchGroup = {
      id: 'modules-search',
      label: 'Modules',
      items: []
    }

    const hostingGroup: SearchGroup = {
      id: 'hosting-search',
      label: 'Hosting',
      items: []
    }

    const groups = [aiGroup, modulesGroup, hostingGroup]

    if (!searchTerm.value) {
      return groups
    }

    aiGroup.items = [{
      id: `ask-ai-${searchTerm.value}`,
      label: `Ask AI about "${searchTerm.value}"`,
      icon: 'i-lucide-wand',
      to: 'javascript:void(0);',
      onSelect() {
        return nuxtApp.$kapa.openModal(searchTerm.value)
      }
    }]

    const loadModules = async () => {
      const { modules, fetchList } = useModules()
      if (!modules.value.length) {
        await fetchList()
      }

      modulesGroup.items = modules.value
        .filter(module => ['name', 'npm', 'repo'].map(field => module[field as keyof typeof module]).filter(Boolean).some(value => typeof value === 'string' && value.search(searchTextRegExp(searchTerm.value)) !== -1))
        .map(module => ({
          id: `module-${module.name}`,
          label: module.npm,
          suffix: module.description,
          avatar: {
            src: moduleImage(module.icon),
            ui: {
              root: 'rounded-none bg-transparent'
            }
          },
          to: `/modules/${module.name}`
        }))
    }

    const loadHosting = async () => {
      const { providers, fetchList } = useHostingProviders()
      if (!providers.value.length) {
        await fetchList()
      }

      hostingGroup.items = providers.value
        .filter(hosting => ['title'].map(field => hosting[field as keyof typeof hosting]).filter(Boolean).some(value => typeof value === 'string' && value.search(searchTextRegExp(searchTerm.value)) !== -1))
        .map(hosting => ({
          id: `hosting-${hosting.path}`,
          label: hosting.title,
          suffix: hosting.description,
          icon: hosting.logoIcon,
          avatar: hosting.logoSrc
            ? {
                src: hosting.logoSrc,
                ui: {
                  root: 'rounded-none bg-transparent'
                }
              }
            : undefined,
          to: hosting.path
        }))
    }

    onMounted(() => {
      Promise.all([
        loadModules(),
        loadHosting()
      ]).catch(error => console.error('Error loading search results:', error))
    })

    return groups
  })

  return {
    searchTerm,
    headerLinks,
    footerLinks,
    searchLinks,
    searchGroups
  }
}

export const useNavigation = import.meta.client ? createSharedComposable(_useNavigation) : _useNavigation
