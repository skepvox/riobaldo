<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const colorMode = useColorMode()
const { searchGroups, searchLinks, searchTerm } = useNavigation()
const { fetchList } = useModules()
const { t, locale, locales } = useI18n()
const localePath = useLocalePath()

const color = computed(() => colorMode.value === 'dark' ? '#020420' : 'white')
const siteName = computed(() => t('app.siteName'))
const defaultTitle = computed(() => t('app.defaultSeoTitle'))
const defaultDescription = computed(() => t('app.defaultSeoDescription'))

const [{ data: navigation }, { data: files }] = await Promise.all([
  useAsyncData('navigation', () => {
    return Promise.all([
      queryCollectionNavigation('docs'),
      queryCollectionNavigation('blog'),
      queryCollectionNavigation('louisLavelle'),
      queryCollectionNavigation('marcusAurelius')
    ])
  }, {
    transform: data => data.flat()
  }),
  useLazyAsyncData('search', () => {
    return Promise.all([
      queryCollectionSearchSections('docs'),
      queryCollectionSearchSections('blog'),
      queryCollectionSearchSections('louisLavelle'),
      queryCollectionSearchSections('marcusAurelius')
    ])
  }, {
    server: false,
    transform: data => data.flat()
  })
])

import { filterNavigationByLocale } from './utils/navigationFilter'

const knownLocales = computed(() => locales.value.map(entry => (typeof entry === 'string' ? entry : entry.code).toLowerCase()))

const filterFilesByLocale = (items: any[] = [], currentLocale: string, localeList: string[]) => {
  return items
    .map((item) => {
      const identifier = typeof item.id === 'string' ? item.id : typeof item.path === 'string' ? item.path : undefined
      const numericFreeId = stripNumericSegments(identifier)
      const { basePath, locale: fileLocale } = splitLocaleFromPath(numericFreeId, localeList)
      return {
        ...item,
        id: basePath || item.id,
        path: basePath || item.path,
        __locale: fileLocale
      }
    })
    .filter((item) => {
      if (!item.__locale) {
        return true
      }
      return item.__locale === normalizeLocaleCode(currentLocale)
    })
    .map(({ __locale, ...rest }) => ({
      ...rest,
      path: rest.path && isInternalPath(rest.path) ? buildLocalizedPath(rest.path, currentLocale) : rest.path,
      id: rest.id && isInternalPath(rest.id) ? rest.id : rest.id
    }))
}

onNuxtReady(() => fetchList())

useHead(() => ({
  titleTemplate: title => title ? `${title} · ${siteName.value}` : defaultTitle.value,
  meta: [
    { key: 'theme-color', name: 'theme-color', content: color.value },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon/favicon.png' }
  ]
}))

const localeHead = useLocaleHead({
  lang: true,
  dir: true,
  seo: true
})
useHead(localeHead)

useSeoMeta({
  description: () => defaultDescription.value,
  ogDescription: () => defaultDescription.value,
  ogSiteName: () => siteName.value,
  ogType: 'website',
  twitterDescription: () => defaultDescription.value,
  twitterCard: 'summary_large_image',
  twitterSite: 'skepvox'
})

const rawNavigation = computed(() => navigation.value?.filter(item => item.path === '/docs' || item.path === '/blog' || item.path === '/louis-lavelle' || item.path === '/marcus-aurelius') ?? [])
const rawFiles = computed(() => files.value?.filter((file) => {
  return file.id.startsWith('/docs/') || file.id.startsWith('/blog/') || file.id.startsWith('/louis-lavelle/') || file.id.startsWith('/marcus-aurelius/')
}) ?? [])

const versionNavigation = computed(() => filterNavigationByLocale(rawNavigation.value, locale.value, knownLocales.value, 'pt-BR'))
const versionFiles = computed(() => filterFilesByLocale(rawFiles.value, locale.value, knownLocales.value))

provide('navigation', versionNavigation)

const appear = ref(false)
const appeared = ref(false)

onMounted(() => {
  setTimeout(() => {
    appear.value = true
    setTimeout(() => {
      appeared.value = true
    }, 1000)
  }, 0)
})
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator color="var(--ui-primary)" />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <ClientOnly>
      <LazyUContentSearch
        v-model:search-term="searchTerm"
        :files="versionFiles"
        :navigation="versionNavigation"
        :groups="searchGroups"
        :links="searchLinks"
        :fuse="{ resultLimit: 42 }"
      />
    </ClientOnly>
  </UApp>
</template>
