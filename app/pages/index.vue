<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

definePageMeta({
  heroBackground: 'opacity-70 -z-10'
})

type HeroLink = Partial<ButtonProps>

interface HeroContent {
  title?: string
  highlight?: string
  description?: string
  links?: HeroLink[]
}

interface SeoContent {
  title?: string
  description?: string
}

interface HomeContent {
  title?: string
  description?: string
  hero?: HeroContent
  seo?: SeoContent
}

const { data: page } = await useAsyncData<HomeContent | null>('home-page', () =>
  queryCollection('home').first()
)

const fallbackContent: Required<HomeContent> = {
  title: 'Skepvox — Um observatório em reconstrução',
  description: 'Skepvox está passando por uma reconstrução completa. Explore os próximos passos e acompanhe a nova identidade ganhar forma.',
  hero: {
    title: 'Skepvox',
    highlight: 'Um observatório em reconstrução',
    description: 'Um espaço para experimentos em filosofia, matemática e tecnologia. Tudo ainda está em construção — volte em breve para ver a nova identidade ganhar forma.',
    links: [
      {
        label: 'Louis Lavelle',
        to: '/louis-lavelle',
        color: 'primary',
        size: 'md'
      },
      {
        label: 'Blog',
        to: '/blog',
        variant: 'ghost',
        color: 'neutral',
        size: 'md'
      }
    ]
  },
  seo: {
    title: 'Skepvox — Um observatório em reconstrução',
    description: 'Skepvox está passando por uma reconstrução completa. Explore os próximos passos e acompanhe a nova identidade ganhar forma.'
  }
}

const pageContent = computed(() => {
  const value = page.value ?? {}
  const heroSource = value.hero ?? {}

  const hero = {
    title: heroSource.title || value.title || fallbackContent.hero.title,
    highlight: heroSource.highlight || fallbackContent.hero.highlight,
    description: heroSource.description || value.description || fallbackContent.hero.description,
    links: Array.isArray(heroSource.links) && heroSource.links.length
      ? heroSource.links
      : fallbackContent.hero.links
  }

  const metaTitle = value.seo?.title || value.title || fallbackContent.seo.title
  const metaDescription = value.seo?.description || value.description || fallbackContent.seo.description

  return {
    hero,
    meta: {
      title: metaTitle,
      description: metaDescription
    }
  }
})

useSeoMeta({
  title: computed(() => pageContent.value.meta.title),
  description: computed(() => pageContent.value.meta.description),
  ogTitle: computed(() => pageContent.value.meta.title),
  ogDescription: computed(() => pageContent.value.meta.description),
  twitterTitle: computed(() => pageContent.value.meta.title),
  twitterDescription: computed(() => pageContent.value.meta.description)
})
</script>

<template>
  <UContainer>
    <UPageHero
      :title="pageContent.hero.title"
      :description="pageContent.hero.description"
      :links="pageContent.hero.links"
      orientation="horizontal"
    >
      <template v-if="pageContent.hero.highlight" #title>
        {{ pageContent.hero.title }}<br>
        <span class="text-primary">{{ pageContent.hero.highlight }}</span>
      </template>
    </UPageHero>
  </UContainer>
</template>
