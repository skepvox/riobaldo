<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation', ref([]))
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

// Get sidebar navigation for current section
const asideNavigation = computed(() => {
  // For ethos, we want to show all content under /ethos
  const ethosNav = navigation.value.find(item => item.path === '/ethos')
  return ethosNav?.children || []
})

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
      <template #left>
        <UPageAside>
          <UContentNavigation
            :navigation="asideNavigation"
            default-open
            trailing-icon="i-lucide-chevron-right"
            :ui="{ linkTrailingIcon: 'group-data-[state=open]:rotate-90' }"
            highlight
          />
        </UPageAside>
      </template>

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
          >
          </UContentToc>
        </template>
      </UPage>
    </UPage>
  </UContainer>
</template>
