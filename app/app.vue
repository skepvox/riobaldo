<script setup lang="ts">
const colorMode = useColorMode()

const color = computed(() => colorMode.value === 'dark' ? '#020420' : 'white')
const siteName = 'Riobaldo'
const defaultTitle = 'Riobaldo: Plataforma para Estudos Filosóficos e Algébricos'
const defaultDescription = 'Explore filosofia e álgebra com Riobaldo, a plataforma educacional completa para estudantes e educadores do ensino médio.'

// Helper functions for path localization
const { data: navigation } = await useAsyncData('navigation', () => {
  return Promise.all([
    queryCollectionNavigation('docs'),
    queryCollectionNavigation('blog'),
    queryCollectionNavigation('louisLavelle')
  ]).then(data => data.flat())
})

useHead(() => ({
  titleTemplate: title => title ? `${title} · ${siteName}` : defaultTitle,
  meta: [
    { key: 'theme-color', name: 'theme-color', content: color.value },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon/favicon.png' }
  ]
}))

useSeoMeta({
  description: () => defaultDescription,
  ogDescription: () => defaultDescription,
  ogSiteName: () => siteName,
  ogType: 'website',
  twitterDescription: () => defaultDescription,
  twitterCard: 'summary_large_image',
  twitterSite: 'skepvox'
})

const providedNavigation = computed(() => navigation.value ?? [])
provide('navigation', providedNavigation)

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
  </UApp>
</template>
