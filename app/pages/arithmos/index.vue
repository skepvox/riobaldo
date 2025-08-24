<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation', ref([]))

// Get the Arithmos section from navigation
const arithmosNavigation = computed(() => {
  return navigation.value.find(item => item.path === '/arithmos')
})

// Get first article for default display
const firstArticle = computed(() => {
  if (!arithmosNavigation.value?.children?.length) return null
  
  const findFirstArticle = (items: ContentNavigationItem[]): ContentNavigationItem | null => {
    for (const item of items) {
      if (item.children?.length) {
        const found = findFirstArticle(item.children)
        if (found) return found
      } else if (item.path && !item.path.endsWith('/')) {
        return item
      }
    }
    return null
  }
  
  return findFirstArticle(arithmosNavigation.value.children)
})

// Redirect to first article if available
if (firstArticle.value?.path) {
  await navigateTo(firstArticle.value.path)
}

useSeoMeta({
  title: 'Arithmos - Matemática',
  description: 'Explore conceitos matemáticos e resolução de problemas',
  ogTitle: 'Arithmos - Matemática',
  ogDescription: 'Explore conceitos matemáticos e resolução de problemas'
})
</script>

<template>
  <UPage>
    <UPageHero
      title="Arithmos"
      description="Matemática: conceitos, problemas e soluções"
      :ui="{
        title: '!mx-0 text-left',
        description: '!mx-0 text-left'
      }"
    />
    
    <UPageSection>
      <div class="prose prose-lg dark:prose-invert max-w-none">
        <p>Selecione um tópico no menu lateral para começar a explorar.</p>
      </div>
    </UPageSection>
  </UPage>
</template>