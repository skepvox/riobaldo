<script setup lang="ts">
import { kebabCase } from 'scule'
import type { Ref } from 'vue'
import type { ContentNavigationItem } from '@nuxt/content'
import { findPageBreadcrumb } from '@nuxt/content/utils'
import { mapContentNavigation } from '#ui-pro/utils'
import { flattenNavigation, navPageFromPath } from '~/utils/content'
import { authorTocUi } from '~/utils/toc'

definePageMeta({
  layout: 'author',
  heroBackground: 'opacity-30',
  key: 'louis-lavelle'
})

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation', ref([]))

const route = useRoute()
const nuxtApp = useNuxtApp()
const appHeaderHeight = useState<number>('app-header-height', () => 0)

const path = computed(() => route.path.replace(/\/$/, ''))

function paintResponse() {
  if (import.meta.server) {
    return Promise.resolve()
  }
  return new Promise((resolve) => {
    setTimeout(resolve, 100)
    requestAnimationFrame(() => setTimeout(resolve, 0))
  })
}
type SurroundLink = (ContentNavigationItem & { description?: string }) | null

function resolveLanguageBasePath(targetPath?: string) {
  if (!targetPath) {
    return undefined
  }
  const segments = targetPath.split('/').filter(Boolean)
  if (segments.length < 2) {
    return undefined
  }
  const [collection, language] = segments
  if (collection !== 'louis-lavelle') {
    return undefined
  }
  return `/${collection}/${language}`
}

function toSurroundLink(item?: ContentNavigationItem | null): SurroundLink {
  if (!item?.path) {
    return null
  }
  const description = typeof (item as any).description === 'string'
    ? (item as any).description
    : typeof (item as any).meta?.description === 'string'
      ? (item as any).meta.description
      : undefined

  return {
    ...item,
    description
  }
}

const { data: page, status } = await useAsyncData(kebabCase(path.value), () => paintResponse().then(() => nuxtApp.static[kebabCase(path.value)] ?? queryCollection('louisLavelle').path(path.value).first()), {
  watch: [path]
})

watch(status, (status) => {
  if (status === 'pending') {
    nuxtApp.hooks.callHook('page:loading:start')
  } else if (status === 'success' || status === 'error') {
    nuxtApp.hooks.callHook('page:loading:end')
  }
})

watch(page, (page) => {
  if (!page) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
  }
}, { immediate: true })

const breadcrumb = computed(() => {
  const links = mapContentNavigation(findPageBreadcrumb(navigation.value, path.value)).map(link => ({
    label: link.label,
    to: link.to
  }))

  return links
})

const tocLinks = computed(() => page.value?.body?.toc?.links ?? [])

function normalizeTocLinks(links?: any[], basePath?: string) {
  if (!Array.isArray(links) || !basePath) {
    return []
  }

  return links.map((link) => {
    const children = normalizeTocLinks(link.children, basePath)

    return {
      ...link,
      to: `${basePath}#${link.id}`,
      ...(children.length ? { children } : {})
    }
  })
}

const normalizedToc = computed(() => normalizeTocLinks(tocLinks.value, page.value?.path || path.value))
const authorRightToc = useState<any[]>('author-right-toc', () => [])
const tocStickyOffset = computed(() => {
  const base = appHeaderHeight.value || 0
  const desiredGap = 8
  return `${Math.max(Math.round(base + desiredGap), 0)}px`
})

watch(normalizedToc, (links) => {
  authorRightToc.value = links
}, { immediate: true })

onBeforeUnmount(() => {
  authorRightToc.value = []
})

const surround = computed<SurroundLink[]>(() => {
  const currentPath = page.value?.path || path.value
  if (!currentPath) {
    return []
  }

  const languageBasePath = resolveLanguageBasePath(currentPath)
  const tree = navigation.value as ContentNavigationItem[]
  const baseNodes = languageBasePath
    ? (() => {
        const node = navPageFromPath(languageBasePath, tree)
        return node ? [node] : tree
      })()
    : tree

  const flattened = flattenNavigation(baseNodes)
    .filter(item => item.path && (!languageBasePath || item.path.startsWith(languageBasePath)))

  const currentIndex = flattened.findIndex(item => item.path === currentPath)
  if (currentIndex === -1) {
    return []
  }

  const prevLink = toSurroundLink(flattened[currentIndex - 1])
  const nextLink = toSurroundLink(flattened[currentIndex + 1])

  if (!prevLink && !nextLink) {
    return []
  }

  return [prevLink, nextLink]
})

const title = computed(() => page.value?.seo?.title || page.value?.title)
const titleTemplate = computed(() => page.value?.titleTemplate || '%s · Louis Lavelle')

useSeoMeta({
  titleTemplate,
  title
})

if (import.meta.server) {
  const description = page.value?.seo?.description || page.value?.description
  useSeoMeta({
    description,
    ogDescription: description,
    ogTitle: titleTemplate.value?.includes('%s') ? titleTemplate.value.replace('%s', title.value) : title.value
  })

  defineOgImageComponent('Docs', {
    headline: breadcrumb.value.length ? breadcrumb.value.map(link => link.label).join(' > ') : '',
    title,
    description
  })
}
</script>

<template>
  <UContainer v-if="page">
    <UPage>
      <UPageHeader v-bind="page">
        <template #headline>
          <UBreadcrumb :items="breadcrumb" />
        </template>

        <template #links>
          <UButton
            v-for="link in page.links?.map(link => ({ ...link, size: 'md' }))"
            :key="link.label"
            color="neutral"
            variant="outline"
            :target="link.to.startsWith('http') ? '_blank' : undefined"
            v-bind="link"
          >
            <template v-if="link.avatar" #leading>
              <UAvatar v-bind="link.avatar" size="2xs" :alt="`${link.label} avatar`" />
            </template>
          </UButton>
          <PageHeaderLinks :key="page.path" />
        </template>
      </UPageHeader>

      <UPageBody>
        <div
          v-if="normalizedToc.length"
          class="lg:hidden mt-6 sticky z-20"
          :style="{ top: tocStickyOffset }"
        >
          <UContentToc :links="normalizedToc" :ui="authorTocUi" title="Sumário" highlight />
        </div>

        <ContentRenderer v-if="page.body" :value="page" />
        <div>
          <USeparator icon="i-lucide-shell" class="mt-6 mb-10" />
          <UContentSurround
            prev-icon="i-lucide-chevron-left"
            next-icon="i-lucide-chevron-right"
            :surround="surround"
          />
        </div>
      </UPageBody>
    </UPage>
  </UContainer>
</template>
