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
  description: page.value.description,
  links: [{
    label: 'Iniciar Leitura',
    to: '/louis-lavelle/manual-de-metodologia-dialetica/livro-01/reflexao-e-metodo',
    color: 'primary' as const,
    size: 'md' as const
  }]
}

const site = useSiteConfig()

useSeoMeta({
  title: page.value?.seo?.title || page.value?.title,
  description: page.value?.seo?.description || page.value?.description,
  ogTitle: page.value?.seo?.title || page.value?.title,
  ogDescription: page.value?.seo?.description || page.value?.description,
  ogImage: joinURL(site.url, '/skepvox-banner.webp'),
  twitterTitle: page.value?.seo?.title || page.value?.title,
  twitterDescription: page.value?.seo?.description || page.value?.description
})
</script>

<template>
  <UContainer v-if="page">
    <UPageHero
      :title="hero.title"
      :description="hero.description"
      :links="hero.links"
      orientation="horizontal"
    >
      <template #title>
        {{ hero.title }}<br>
        <span class="text-primary">{{ hero.highlight }}</span>
      </template>
    </UPageHero>

    <USeparator icon="i-lucide-shell" class="h-px mt-8" />

    <UPageBody>
      <UContainer>
        <LavelleTimeline />
      </UContainer>
    </UPageBody>
  </UContainer>
</template>
