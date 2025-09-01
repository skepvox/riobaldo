<script setup lang="ts">
const colorMode = useColorMode()
const { searchGroups, searchLinks, searchTerm } = useNavigation()
const { fetchList } = useModules()

const color = computed(() => colorMode.value === 'dark' ? '#020420' : 'white')

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

onNuxtReady(() => fetchList())

useHead({
  titleTemplate: title => title ? `${title} · Riobaldo` : 'Riobaldo: Platform for Philosophical and Algebraic Studies',
  meta: [
    { key: 'theme-color', name: 'theme-color', content: color }
  ]
})

if (import.meta.server) {
  useHead({
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon/favicon.png' }
    ],
    htmlAttrs: {
      lang: 'en'
    }
  })
  useSeoMeta({
    ogSiteName: 'Riobaldo',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterSite: 'skepvox'
  })
}

const versionNavigation = computed(() => navigation.value?.filter(item => item.path === '/docs' || item.path === '/blog' || item.path === '/louis-lavelle' || item.path === '/marcus-aurelius') ?? [])
const versionFiles = computed(() => files.value?.filter((file) => {
  return file.id.startsWith('/docs/') || file.id.startsWith('/blog/') || file.id.startsWith('/louis-lavelle/') || file.id.startsWith('/marcus-aurelius/')
}) ?? [])

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
