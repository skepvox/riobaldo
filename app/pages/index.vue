<script setup lang="ts">
definePageMeta({
  heroBackground: 'opacity-40'
})

const { data: page } = await useAsyncData('home-page', () =>
  queryCollection('home').first()
)

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Página não encontrada',
    fatal: true
  })
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
  <UPage v-if="page" class="max-w-5xl mx-auto">
    <HomeHero :page="page" />

    <UPageSection
      :ui="{
        container: 'lg:grid lg:grid-cols-2 lg:gap-8'
      }"
    >
      <HomeAbout :section="page.about" />
      <HomeExperience :section="page.experience" />
    </UPageSection>

    <HomeQuotes :section="page.quotes" />
    <HomeBlog :section="page.blog" />
  </UPage>
</template>
