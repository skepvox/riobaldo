<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt'

const colorMode = useColorMode()

const color = computed(() => colorMode.value === 'dark' ? '#020618' : 'white')

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color }
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: 'favicon/favicon.png' }
  ],
  htmlAttrs: {
    lang: 'pt-BR'
  }
})

useSeoMeta({
  ogImage: 'https://riobaldo.com/joao-guimaraes-rosa-banner.webp',
  twitterImage: 'https://riobaldo.com/joao-guimaraes-rosa-banner.webp',
  twitterCard: 'summary_large_image',
  ogUrl: 'https://riobaldo.com',
  twitterTitle: 'Riobaldo - Sertão Digital',
  twitterDescription: 'Riobaldo nasce como espaço de reflexão e escrita lenta, onde o pensamento pode seguir seu próprio ritmo'
})

const [{ data: navigation }, { data: files }] = await Promise.all([
  useAsyncData('navigation', () => {
    return Promise.all([
      queryCollectionNavigation('blog'),
      queryCollectionNavigation('ethos')
    ])
  }, {
    transform: data => data.flat()
  }),
  useLazyAsyncData('search', () => {
    return Promise.all([
      queryCollectionSearchSections('blog'),
      queryCollectionSearchSections('ethos')
    ])
  }, {
    server: false,
    transform: data => data.flat()
  })
])

provide('navigation', navigation)
</script>

<template>
  <UApp>
    <NuxtLayout>
      <UMain class="relative">
        <NuxtPage />
      </UMain>
    </NuxtLayout>

    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        :navigation="navigation"
        shortcut="meta_k"
        :fuse="{ resultLimit: 42 }"
      />
    </ClientOnly>

    <Analytics />
  </UApp>
</template>
