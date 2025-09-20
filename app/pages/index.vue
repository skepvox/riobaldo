<script setup lang="ts">
import type { HomePageContent } from '~/types/home'

definePageMeta({
  heroBackground: 'opacity-40'
})

const { data: page } = await useAsyncData<HomePageContent | null>('home-page', () =>
  queryCollection('home').first()
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Página não encontrada', fatal: true })
}

useSeoMeta({
  title: page.value?.seo?.title || page.value?.title,
  description: page.value?.seo?.description || page.value?.description,
  ogTitle: page.value?.seo?.title || page.value?.title,
  ogDescription: page.value?.seo?.description || page.value?.description,
  twitterTitle: page.value?.seo?.title || page.value?.title,
  twitterDescription: page.value?.seo?.description || page.value?.description
})
</script>

<template>
  <UPage v-if="page">
    <HomeHero :page="page" />
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="mx-auto w-full max-w-5xl space-y-12 sm:space-y-16">
        <HomeAbout :section="page.about" />
        <HomeExperience :section="page.experience" />
        <HomeQuotes :section="page.quotes" />
        <HomeBlog :section="page.blog" />
      </div>
    </div>
  </UPage>
</template>
