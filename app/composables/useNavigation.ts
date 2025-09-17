import { createSharedComposable } from '@vueuse/core'

function _useHeaderLinks() {
  const route = useRoute()
  const { t } = useI18n()
  const localePath = useLocalePath()

  const stripNumericSegments = (value: string) => value.replace(/\/(\d+)\.([^/]+)/g, '/$2')

  const localizePath = (path: string) => {
    if (!path || /^(?:https?:|mailto:|tel:|javascript:)/.test(path)) {
      return path
    }

    const sanitized = stripNumericSegments(path)
    return localePath({ path: sanitized })
  }

  const headerLinks = computed(() => {
    const docsPath = '/docs'
    const louisLavellePath = '/louis-lavelle'
    const marcusAureliusPath = '/marcus-aurelius'
    const blogPath = '/blog'
    const templatesPath = '/templates'
    const videoCoursesPath = '/video-courses'
    const showcasePath = '/showcase'
    const homePath = localizePath('/')
    const docsRootPath = localizePath(docsPath)
    const louisRootPath = localizePath(louisLavellePath)
    const marcusRootPath = localizePath(marcusAureliusPath)
    const blogRootPath = localizePath(blogPath)

    return [{
      id: 'home',
      label: t('navigation.home.label'),
      icon: 'i-lucide-home',
      to: homePath,
      search: false,
      active: route.path === homePath
    }, {
      id: 'louis-lavelle',
      label: t('navigation.louisLavelle.label'),
      icon: 'i-lucide-user',
      to: louisRootPath,
      search: false,
      active: route.path.startsWith(louisRootPath),
      children: [{
        id: 'louis-lavelle-manuel',
        label: t('navigation.louisLavelle.children.manuel.label'),
        description: t('navigation.louisLavelle.children.manuel.description'),
        icon: 'i-lucide-book-marked',
        to: localizePath('/louis-lavelle/manuel-de-methodologie-dialectique/livre-01/reflexion-et-methode'),
        active: route.path.includes('/manuel-de-methodologie-dialectique')
      }, {
        id: 'louis-lavelle-manual',
        label: t('navigation.louisLavelle.children.manual.label'),
        description: t('navigation.louisLavelle.children.manual.description'),
        icon: 'i-lucide-book-open',
        to: localizePath('/louis-lavelle/manual-de-metodologia-dialetica/livro-01/reflexao-e-metodo'),
        active: route.path.includes('/manual-de-metodologia-dialetica')
      }]
    }, {
      id: 'marcus-aurelius',
      label: t('navigation.marcusAurelius.label'),
      icon: 'i-lucide-user',
      to: marcusRootPath,
      search: false,
      active: route.path.startsWith(marcusRootPath),
      children: [{
        id: 'marcus-aurelius-original',
        label: t('navigation.marcusAurelius.children.original.label'),
        description: t('navigation.marcusAurelius.children.original.description'),
        icon: 'i-lucide-scroll',
        to: localizePath('/marcus-aurelius/ta-eis-heauton/biblio-alpha'),
        active: route.path.includes('/ta-eis-heauton')
      }, {
        id: 'marcus-aurelius-translation',
        label: t('navigation.marcusAurelius.children.translation.label'),
        description: t('navigation.marcusAurelius.children.translation.description'),
        icon: 'i-lucide-book-open',
        to: localizePath('/marcus-aurelius/para-si-mesmo/livro-01'),
        active: route.path.includes('/para-si-mesmo')
      }]
    }, {
      id: 'blog',
      label: t('navigation.blog.label'),
      icon: 'i-lucide-newspaper',
      to: blogRootPath
    }, {
      id: 'docs',
      label: t('navigation.docs.label'),
      icon: 'i-lucide-book-marked',
      to: docsRootPath,
      search: false,
      active: route.path.startsWith(docsRootPath),
      children: [{
        id: 'docs-getting-started',
        label: t('navigation.docs.children.gettingStarted.label'),
        description: t('navigation.docs.children.gettingStarted.description'),
        icon: 'i-lucide-rocket',
        to: localizePath(`${docsPath}/getting-started`),
        active: route.path.startsWith(`${docsRootPath}/getting-started`)
      }, {
        id: 'docs-guide',
        label: t('navigation.docs.children.guide.label'),
        description: t('navigation.docs.children.guide.description'),
        icon: 'i-lucide-book-open',
        to: localizePath(`${docsPath}/guide`),
        active: route.path.startsWith(`${docsRootPath}/guide`)
      }]
    }, {
      id: 'resources',
      label: t('navigation.resources.label'),
      icon: 'i-lucide-library',
      to: localizePath(templatesPath),
      search: false,
      active: route.path.startsWith(localizePath(templatesPath)) || route.path.startsWith(localizePath(videoCoursesPath)) || route.path.startsWith(localizePath(showcasePath)),
      children: [{
        id: 'resources-templates',
        label: t('navigation.resources.children.templates.label'),
        description: t('navigation.resources.children.templates.description'),
        icon: 'i-lucide-app-window',
        to: localizePath(templatesPath),
        active: route.path.startsWith(localizePath(templatesPath))
      }, {
        id: 'resources-video-courses',
        label: t('navigation.resources.children.videoCourses.label'),
        description: t('navigation.resources.children.videoCourses.description'),
        icon: 'i-lucide-graduation-cap',
        to: localizePath(videoCoursesPath),
        active: route.path.startsWith(localizePath(videoCoursesPath))
      }, {
        id: 'resources-showcase',
        label: t('navigation.resources.children.showcase.label'),
        description: t('navigation.resources.children.showcase.description'),
        icon: 'i-lucide-presentation',
        to: localizePath(showcasePath),
        active: route.path.startsWith(localizePath(showcasePath))
      }, {
        id: 'resources-certification',
        label: t('navigation.resources.children.certification.label'),
        description: t('navigation.resources.children.certification.description'),
        icon: 'i-lucide-medal',
        to: 'https://certification.nuxt.com',
        target: '_blank',
        active: false
      }]
    }, {
      id: 'products',
      label: t('navigation.products.label'),
      icon: 'i-lucide-sparkle',
      search: false,
      children: [{
        id: 'products-ui-pro',
        label: t('navigation.products.children.uiPro.label'),
        description: t('navigation.products.children.uiPro.description'),
        icon: 'i-lucide-panels-top-left',
        to: 'https://ui.nuxt.com/pro?utm_source=nuxt-website&utm_medium=header',
        target: '_blank',
        active: false
      }, {
        id: 'products-studio',
        label: t('navigation.products.children.studio.label'),
        description: t('navigation.products.children.studio.description'),
        icon: 'i-lucide-pen',
        to: 'https://content.nuxt.com/studio/?utm_source=nuxt-website&utm_medium=header',
        target: '_blank',
        active: false
      }, {
        id: 'products-hub',
        label: t('navigation.products.children.hub.label'),
        description: t('navigation.products.children.hub.description'),
        icon: 'i-lucide-rocket',
        to: 'https://hub.nuxt.com/?utm_source=nuxt-website&utm_medium=header',
        target: '_blank',
        active: false
      }]
    }]
  })

  return { headerLinks }
}

export const useHeaderLinks = import.meta.client ? createSharedComposable(_useHeaderLinks) : _useHeaderLinks

export const useFooterLinks = () => {
  const { t } = useI18n()

  const footerLinks = computed(() => [{
    label: t('navigation.footer.community.label'),
    children: [{
      label: t('navigation.footer.community.links.nuxters'),
      to: 'https://nuxters.nuxt.com',
      target: '_blank'
    }, {
      label: t('navigation.footer.community.links.designKit'),
      to: '/design-kit'
    }]
  }, {
    label: t('navigation.footer.products.label'),
    children: [{
      label: t('navigation.footer.products.links.uiPro'),
      to: 'https://ui.nuxt.com/pro?utm_source=nuxt-website&utm_medium=footer',
      target: '_blank'
    }, {
      label: t('navigation.footer.products.links.studio'),
      to: 'https://content.nuxt.com/studio/?utm_source=nuxt-website&utm_medium=footer',
      target: '_blank'
    }, {
      label: t('navigation.footer.products.links.hub'),
      to: 'https://hub.nuxt.com/?utm_source=nuxt-website&utm_medium=footer',
      target: '_blank'
    }]
  }])

  return { footerLinks }
}

const _useNavigation = () => {
  const nuxtApp = useNuxtApp()
  const searchTerm = ref<string>('')
  const { t } = useI18n()
  const localePath = useLocalePath()

  const localizePath = (path: string) => {
    if (!path || /^(?:https?:|mailto:|tel:|javascript:)/.test(path)) {
      return path
    }

    return localePath({ path })
  }

  const newsletterPath = '/newsletter'

  const { headerLinks } = useHeaderLinks()
  const { footerLinks } = useFooterLinks()

  const searchLinks = computed(() => [
    {
      label: t('navigation.search.askAiLabel'),
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
      label: t('navigation.home.label'),
      icon: 'i-lucide-home',
      to: localizePath('/')
    }, {
      label: t('navigation.louisLavelle.label'),
      icon: 'i-lucide-user',
      to: localizePath('/louis-lavelle')
    }, {
      label: t('navigation.marcusAurelius.label'),
      icon: 'i-lucide-user',
      to: localizePath('/marcus-aurelius')
    }, {
      label: t('navigation.newsletter.label'),
      icon: 'i-lucide-mail',
      to: localizePath(newsletterPath)
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
      label: t('navigation.search.groups.ai'),
      icon: 'i-lucide-wand',
      items: []
    }

    const modulesGroup: SearchGroup = {
      id: 'modules-search',
      label: t('navigation.search.groups.modules'),
      items: []
    }

    const hostingGroup: SearchGroup = {
      id: 'hosting-search',
      label: t('navigation.search.groups.hosting'),
      items: []
    }

    const groups = [aiGroup, modulesGroup, hostingGroup]

    if (!searchTerm.value) {
      return groups
    }

    aiGroup.items = [{
      id: `ask-ai-${searchTerm.value}`,
      label: t('navigation.search.askAiPrompt', { query: searchTerm.value }),
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
          to: localizePath(`/modules/${module.name}`)
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
          to: localizePath(hosting.path)
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
