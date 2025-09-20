<script setup lang="ts">
import { joinURL } from 'ufo'

definePageMeta({
  layout: 'author',
  heroBackground: 'opacity-30'
})

const hero = {
  title: 'Louis Lavelle',
  highlight: 'Filosofia do Espírito e da Presença',
  description: 'Coleção dedicada às obras de Louis Lavelle, com textos originais em domínio público, transcrições e traduções.'
}

const seoTitle = 'Louis Lavelle — Biblioteca Digital'
const seoDescription = 'Coleção dedicada às obras de Louis Lavelle, com textos originais em domínio público, transcrições e traduções.'
const site = useSiteConfig()

useSeoMeta({
  title: seoTitle,
  description: seoDescription,
  ogTitle: seoTitle,
  ogDescription: seoDescription,
  ogImage: joinURL(site.url, '/riobaldo-banner.webp'),
  twitterTitle: seoTitle,
  twitterDescription: seoDescription
})
</script>

<template>
  <UPage>
    <UPageHero
      class="relative"
      orientation="horizontal"
      :ui="{
        container: '!pb-16 py-20 sm:py-28 lg:py-32',
        title: 'text-4xl sm:text-6xl font-semibold',
        description: 'max-w-2xl text-lg text-muted'
      }"
    >
      <template #title>
        {{ hero.title }}<br>
        <span class="text-primary">{{ hero.highlight }}</span>
      </template>
      <template #description>
        {{ hero.description }}
      </template>
    </UPageHero>

    <UPageSection
      id="bibliografia"
      :ui="{
        root: 'border-t border-default/70',
        container: 'py-14 sm:py-16 lg:py-20'
      }"
    >
      <LavelleTimeline />
    </UPageSection>
  </UPage>
</template>
