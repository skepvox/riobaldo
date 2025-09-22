import type { ContentNavigationItem } from '@nuxt/content'
import type { TabsItem } from '@nuxt/ui'
import type { Ref } from 'vue'
import { useBreakpoints } from '@vueuse/core'
import { navPageFromPath } from '~/utils/content'

type Edition = string

interface LanguageOption {
  slug: string
  label: string
  shortLabel: string
  edition: Edition
  editionLabel?: string
  code?: string
  path: string
  order: number
  item: ContentNavigationItem
}

function languageFromPath(path?: string) {
  if (!path) {
    return undefined
  }
  const segments = path.split('/').filter(Boolean)
  return segments.length >= 2 ? segments[1] : undefined
}

function findFirstNavigablePath(item?: ContentNavigationItem): string | undefined {
  if (!item) {
    return undefined
  }

  if (item.children?.length) {
    for (const child of item.children as ContentNavigationItem[]) {
      const childPath = findFirstNavigablePath(child)
      if (childPath) {
        return childPath
      }
    }
  }

  return item.path
}

function getNavigationOrder(item: ContentNavigationItem) {
  const nav = (item as any).navigation
  const navOrder = typeof nav?.order === 'number' ? nav.order : undefined
  const frontmatterOrder = typeof (item as any).order === 'number' ? (item as any).order : undefined
  return navOrder ?? frontmatterOrder ?? Number.MAX_SAFE_INTEGER
}

function sortNavigation(items: ContentNavigationItem[] = []): ContentNavigationItem[] {
  return [...items]
    .map(item => ({
      ...item,
      children: item.children ? sortNavigation(item.children as ContentNavigationItem[]) : item.children
    }))
    .sort((a, b) => {
      const aOrder = getNavigationOrder(a)
      const bOrder = getNavigationOrder(b)
      if (aOrder !== bOrder) {
        return aOrder - bOrder
      }
      return String(a.title || '').localeCompare(String(b.title || ''))
    })
}

function normalizeLanguage(item: ContentNavigationItem): LanguageOption | null {
  const slug = languageFromPath(item.path)
  if (!slug) {
    return null
  }

  const rawMeta = (item as any).meta || {}
  const navigationMeta = (item as any).navigation?.meta || {}
  const meta = { ...navigationMeta, ...rawMeta }
  const languageMeta = meta.language || {}

  const code = typeof languageMeta.code === 'string' ? languageMeta.code : undefined
  const label = typeof languageMeta.label === 'string' ? languageMeta.label : (item.title || slug)
  const shortLabel = typeof languageMeta.shortLabel === 'string'
    ? languageMeta.shortLabel
    : code
      ? code.toUpperCase()
      : label.slice(0, 2).toUpperCase()
  const editionRaw = typeof meta.edition === 'string'
    ? meta.edition
    : typeof languageMeta.edition === 'string'
      ? languageMeta.edition
      : 'translation'
  const edition = editionRaw.toLowerCase()
  const editionLabel = typeof meta.editionLabel === 'string'
    ? meta.editionLabel
    : typeof languageMeta.editionLabel === 'string'
      ? languageMeta.editionLabel
      : undefined

  return {
    slug,
    label,
    shortLabel,
    edition,
    editionLabel,
    code,
    path: item.path,
    order: getNavigationOrder(item),
    item
  }
}

function formatEditionLabel(edition: Edition) {
  const normalized = edition.toLowerCase()
  if (normalized === 'original') {
    return 'Original'
  }
  if (normalized === 'translation' || normalized === 'translations') {
    return 'Traduções'
  }
  return normalized
    .split(/[-_\s]+/g)
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

function editionPriority(edition: Edition) {
  const normalized = edition.toLowerCase()
  if (normalized === 'original') {
    return 0
  }
  if (normalized === 'translation' || normalized === 'translations') {
    return 1
  }
  return 2
}

function lastSegment(path?: string) {
  if (!path) {
    return undefined
  }
  const segments = path.split('/').filter(Boolean)
  return segments[segments.length - 1]
}

export function useAuthorNavigation() {
  const route = useRoute()
  const router = useRouter()
  const navigation = inject<Ref<ContentNavigationItem[]>>('navigation', ref([]))
  const menuOpen = useState<boolean>('app-header-menu-open', () => false)
  const breakpoints = useBreakpoints({ lg: 1024 })
  const isLargeScreen = breakpoints.greaterOrEqual('lg')

  const authorRootPath = computed(() => {
    const segments = route.path.split('/').filter(Boolean)
    return segments.length ? `/${segments[0]}` : '/'
  })

  const authorNode = computed(() => navPageFromPath(authorRootPath.value, navigation.value))
  const authorChildren = computed(() => authorNode.value?.children ?? [])
  const isRootPage = computed(() => route.path === authorRootPath.value)

  const languages = computed<LanguageOption[]>(() => {
    if (!authorNode.value) {
      return []
    }
    return sortNavigation(authorChildren.value as ContentNavigationItem[])
      .map(normalizeLanguage)
      .filter((lang): lang is LanguageOption => Boolean(lang))
  })

  const languageMap = computed(() => {
    return new Map(languages.value.map(lang => [lang.slug, lang.item]))
  })

  const editionItems = computed<TabsItem[]>(() => {
    const seen = new Map<Edition, { label: string, order: number }>()

    languages.value.forEach((language, index) => {
      const edition = language.edition
      if (!seen.has(edition)) {
        seen.set(edition, {
          label: language.editionLabel || formatEditionLabel(edition),
          order: editionPriority(edition) * 100 + index
        })
      }
    })

    return Array.from(seen.entries())
      .sort((a, b) => {
        if (a[1].order !== b[1].order) {
          return a[1].order - b[1].order
        }
        return String(a[0]).localeCompare(String(b[0]))
      })
      .map(([value, info]) => ({ value, label: info.label }))
  })

  const selectedEdition = ref<Edition>('')
  const selectedLanguage = ref<string>('')
  const syncingFromRoute = ref(false)

  function getPathChain(path: string) {
    if (!path.startsWith(authorRootPath.value)) {
      return { languageSlug: undefined as string | undefined, indexes: [] as number[] }
    }
    const trimmed = path.slice(authorRootPath.value.length).replace(/^\/+/, '')
    const segments = trimmed.split('/').filter(Boolean)
    const [languageSlug, ...rest] = segments
    const indexes: number[] = []
    if (!languageSlug) {
      return { languageSlug: undefined as string | undefined, indexes }
    }
    let node = languageMap.value.get(languageSlug)
    if (!node) {
      return { languageSlug, indexes }
    }
    let children = node.children ? sortNavigation(node.children as ContentNavigationItem[]) : []
    for (const segment of rest) {
      if (!children.length) {
        break
      }
      const childIndex = children.findIndex((child) => {
        const segmentSlug = (child as any).slug || lastSegment(child.path)
        return segmentSlug === segment
      })
      if (childIndex === -1) {
        break
      }
      indexes.push(childIndex)
      node = children[childIndex]
      children = node.children ? sortNavigation(node.children as ContentNavigationItem[]) : []
    }
    return { languageSlug, indexes }
  }

  function resolvePathForLanguage(slug: string, indexes: number[]) {
    const languageNode = languageMap.value.get(slug)
    if (!languageNode) {
      return undefined
    }
    if (!indexes.length) {
      return findFirstNavigablePath(languageNode)
    }
    let node: ContentNavigationItem | undefined = languageNode
    let children = node.children ? sortNavigation(node.children as ContentNavigationItem[]) : []

    for (const rawIndex of indexes) {
      if (!children.length) {
        break
      }
      const index = Math.min(rawIndex, children.length - 1)
      node = children[index]
      children = node?.children ? sortNavigation(node.children as ContentNavigationItem[]) : []
    }

    return findFirstNavigablePath(node)
  }

  function syncSelectionFromRoute() {
    const availableLanguages = languages.value
    if (!availableLanguages.length) {
      selectedEdition.value = ''
      selectedLanguage.value = ''
      return
    }

    const { languageSlug } = getPathChain(route.path)
    const fallback = availableLanguages[0]
    const match = availableLanguages.find(language => language.slug === languageSlug) || fallback

    if (!match) {
      return
    }

    syncingFromRoute.value = true
    selectedEdition.value = match.edition
    selectedLanguage.value = match.slug
    nextTick(() => {
      syncingFromRoute.value = false
    })
  }

  watch([languages, () => route.path], () => {
    syncSelectionFromRoute()
  }, { immediate: true })

  watch(editionItems, (items) => {
    if (!items.length) {
      return
    }
    if (!items.some(item => item.value === selectedEdition.value)) {
      selectedEdition.value = items[0].value as Edition
    }
  })

  const languagesForSelectedEdition = computed(() =>
    languages.value.filter(language => language.edition === selectedEdition.value)
  )

  watch(languagesForSelectedEdition, (editionLanguages) => {
    if (syncingFromRoute.value) {
      return
    }
    if (!editionLanguages.length) {
      selectedLanguage.value = ''
      return
    }
    if (!editionLanguages.some(language => language.slug === selectedLanguage.value)) {
      selectedLanguage.value = editionLanguages[0].slug
    }
  })

  const languageItems = computed<TabsItem[]>(() =>
    languagesForSelectedEdition.value.map(language => ({
      label: language.label,
      value: language.slug
    }))
  )

  const filteredNavigation = computed<ContentNavigationItem[]>(() => {
    const languageNode = languageMap.value.get(selectedLanguage.value)
    return languageNode ? [languageNode] : []
  })

  const orderedNavigation = computed(() => sortNavigation(filteredNavigation.value))

  const displayNavigation = computed<ContentNavigationItem[]>(() => {
    const nav = orderedNavigation.value
    if (nav.length === 1 && Array.isArray(nav[0]?.children) && nav[0].children?.length) {
      return sortNavigation(nav[0].children as ContentNavigationItem[])
    }
    return nav
  })

  const hasNavigation = computed(() => !!displayNavigation.value.length && !!authorNode.value && !isRootPage.value)

  async function handleLanguageChange(slug: string, { syncEdition = true }: { syncEdition?: boolean } = {}) {
    if (!languages.value.length || syncingFromRoute.value) {
      return
    }

    const target = languages.value.find(language => language.slug === slug)
    if (!target) {
      return
    }

    const pathChain = getPathChain(route.path)

    if (syncEdition) {
      selectedEdition.value = target.edition
    }

    selectedLanguage.value = target.slug

    const destination = resolvePathForLanguage(target.slug, pathChain.indexes) || `${authorRootPath.value}/${target.slug}`
    const wasMenuOpen = menuOpen.value

    if (destination && destination !== route.path) {
      await router.push(destination)
      if (wasMenuOpen && !isLargeScreen.value) {
        menuOpen.value = true
      }
    }
  }

  function handleEditionChange(edition: Edition) {
    if (!languages.value.length) {
      return
    }

    if (syncingFromRoute.value) {
      selectedEdition.value = edition
      return
    }

    selectedEdition.value = edition

    const candidates = languages.value.filter(language => language.edition === edition)
    if (!candidates.length) {
      return
    }

    if (candidates.some(language => language.slug === selectedLanguage.value)) {
      return
    }

    handleLanguageChange(candidates[0].slug, { syncEdition: false })
  }

  const editionModel = computed({
    get: () => selectedEdition.value,
    set: (value) => {
      if (!value || value === selectedEdition.value) {
        return
      }
      handleEditionChange(value as Edition)
    }
  })

  const languageModel = computed({
    get: () => selectedLanguage.value,
    set: (value) => {
      if (!value || value === selectedLanguage.value) {
        return
      }
      handleLanguageChange(value as string)
    }
  })

  return {
    authorRootPath,
    authorNode,
    authorChildren,
    isRootPage,
    hasNavigation,
    editionItems,
    languageItems,
    editionModel,
    languageModel,
    filteredNavigation,
    orderedNavigation,
    displayNavigation,
    selectedEdition,
    selectedLanguage
  }
}
