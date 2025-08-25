<script setup lang="ts">
const route = useRoute()
const path = computed(() => route.path.replace(/\/$/, ''))

// Get the page content
const { data: page } = await useAsyncData(
  path.value,
  () => queryCollection('ethos').path(path.value).first()
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Página não encontrada' })
}

// Get surround pages for navigation
const { data: surround } = await useAsyncData(
  `${path.value}-surround`,
  () => queryCollectionItemSurroundings('ethos', path.value, {
    fields: ['title', 'description']
  })
)

// SEO
const title = computed(() => page.value?.title)
const description = computed(() => page.value?.description)

useSeoMeta({
  title: title.value,
  description: description.value,
  ogTitle: title.value,
  ogDescription: description.value
})
</script>

<template>
  <UContainer v-if="page">
    <UPage>
      <UPageHeader v-bind="page" />

      <UPageBody>
        <ContentRenderer
          v-if="page.body"
          :value="page"
        />

        <USeparator class="mt-12" />

        <UContentSurround :surround="surround" />
      </UPageBody>

      <template #right>
        <UContentToc
          :links="page.body?.toc?.links"
          highlight
        />
      </template>
    </UPage>
  </UContainer>
</template>
