<script setup lang="ts">
import { joinURL } from 'ufo'

definePageMeta({
  heroBackground: 'opacity-70 -z-10'
})

const { data: page } = await useAsyncData('louis-lavelle-landing', () =>
  queryCollection('landing').path('/louis-lavelle').first()
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const hero = {
  title: page.value.title,
  highlight: (page.value as any).highlight || 'Filosofia do Espírito e da Presença',
  description: page.value.description
}

const site = useSiteConfig()

useSeoMeta({
  title: page.value?.seo?.title || page.value?.title,
  description: page.value?.seo?.description || page.value?.description,
  ogTitle: page.value?.seo?.title || page.value?.title,
  ogDescription: page.value?.seo?.description || page.value?.description,
  ogImage: joinURL(site.url, '/riobaldo-banner.webp'),
  twitterTitle: page.value?.seo?.title || page.value?.title,
  twitterDescription: page.value?.seo?.description || page.value?.description
})
</script>

<template>
  <UContainer v-if="page">
    <UPageHero
      :title="hero.title"
      :description="hero.description"
      orientation="horizontal"
    >
      <template #title>
        {{ hero.title }}<br>
        <span class="text-primary">{{ hero.highlight }}</span>
      </template>
    </UPageHero>

    <UPageBody>
      <UContainer>
        <LavelleTimeline />
      </UContainer>
    </UPageBody>
  </UContainer>
</template>
