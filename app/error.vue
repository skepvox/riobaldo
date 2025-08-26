<script setup lang="ts">
import type { NuxtError } from '#app'

useSeoMeta({
  title: 'Page not found',
  description: 'We are sorry but this page could not be found.'
})

defineProps<{ error: NuxtError }>()

const { searchGroups, searchLinks, searchTerm } = useNavigation()
const { fetchList } = useModules()

const [{ data: navigation }, { data: files }] = await Promise.all([
  useAsyncData('navigation', () => {
    return Promise.all([
      queryCollectionNavigation('docs'),
      queryCollectionNavigation('blog')
    ])
  }, {
    transform: data => data.flat()
  }),
  useLazyAsyncData('search', () => {
    return Promise.all([
      queryCollectionSearchSections('docs'),
      queryCollectionSearchSections('blog')
    ])
  }, {
    server: false,
    transform: data => data.flat()
  })
])

onNuxtReady(() => fetchList())

const versionNavigation = computed(() => navigation.value?.filter(item => item.path === '/docs' || item.path === '/blog') ?? [])
const versionFiles = computed(() => files.value?.filter((file) => {
  return file.id.startsWith('/docs/') || file.id.startsWith('/blog/')
}) ?? [])

provide('navigation', versionNavigation)
</script>

<template>
  <UApp>
    <AppHeader />

    <UError :error="error" />

    <AppFooter />

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
