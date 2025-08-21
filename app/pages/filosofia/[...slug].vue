<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'
import { findPageBreadcrumb } from '@nuxt/content/utils'
import { mapContentNavigation } from '#ui-pro/utils'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation', ref([]))
const route = useRoute()
const path = computed(() => route.path.replace(/\/$/, ''))

// Get the page content
const { data: page } = await useAsyncData(
  path.value,
  () => queryCollection('filosofia').path(path.value).first()
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Página não encontrada' })
}

// Get surround pages for navigation
const { data: surround } = await useAsyncData(
  `${path.value}-surround`,
  () => queryCollectionItemSurroundings('filosofia', path.value, {
    fields: ['title', 'description']
  })
)

// Build breadcrumb from navigation tree
const breadcrumb = computed(() => {
  return mapContentNavigation(findPageBreadcrumb(navigation.value, path.value)).map(link => ({
    label: link.label,
    // Only add 'to' for paths that have actual pages
    ...(link.to === '/filosofia' ? { to: link.to } : {})
  }))
})

// Get sidebar navigation for current section
const asideNavigation = computed(() => {
  // For filosofia, we want to show all content under /filosofia
  const filosofiaNav = navigation.value.find(item => item.path === '/filosofia')
  return filosofiaNav?.children || []
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
        <UPageHeader v-bind="page">
          <template #headline>
            <UBreadcrumb :items="breadcrumb" />
          </template>
        </UPageHeader>

        <UPageBody>
          <ContentRenderer v-if="page.body" :value="page" />
          
          <USeparator class="mt-12" />
          
          <UContentSurround :surround="surround" />
        </UPageBody>

        <template #right>
          <UContentToc :links="page.body?.toc?.links" highlight>
            <template #bottom>
              <USeparator v-if="page.body?.toc?.links?.length" type="dashed" />
              
              <div class="space-y-6">
                <div>
                  <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    Ferramentas de Leitura
                  </h4>
                  <div class="space-y-2">
                    <UButton 
                      variant="ghost" 
                      size="sm" 
                      block
                      icon="i-lucide-bookmark"
                      color="neutral"
                    >
                      Marcar página
                    </UButton>
                    <UButton 
                      variant="ghost" 
                      size="sm" 
                      block
                      icon="i-lucide-file-text"
                      color="neutral"
                    >
                      Fazer anotações
                    </UButton>
                    <UButton 
                      variant="ghost" 
                      size="sm" 
                      block
                      icon="i-lucide-highlighter"
                      color="neutral"
                    >
                      Destacar texto
                    </UButton>
                  </div>
                </div>
              </div>
            </template>
          </UContentToc>
        </template>
      </UPage>
    </UPage>
  </UContainer>
</template>