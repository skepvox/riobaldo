<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () =>
  queryCollection('filosofia').path(route.path).first()
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Página não encontrada' })
}

// Parse the path to get breadcrumb structure
const breadcrumbs = computed(() => {
  const parts = route.path.split('/').filter(Boolean)
  const crumbs = [
    { label: 'Início', to: '/' },
    { label: 'Filosofia', to: '/filosofia' }
  ]
  
  if (parts[1]) { // Author
    const authorName = parts[1].replace(/^\d+\./, '').replace(/-/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
    crumbs.push({ 
      label: authorName, 
      to: `/filosofia/${parts[1]}` 
    })
  }
  
  if (parts[2]) { // Book
    const bookName = parts[2].replace(/^\d+\./, '').replace(/-/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
    crumbs.push({ 
      label: bookName, 
      to: `/filosofia/${parts[1]}/${parts[2]}` 
    })
  }
  
  if (parts[3]) { // Part/Livre
    const partNum = parts[3].match(/\d+/)?.[0]
    const label = parts[3].includes('conclusion') ? 'Conclusão' : `Livro ${partNum}`
    crumbs.push({ 
      label, 
      to: `/filosofia/${parts[1]}/${parts[2]}/${parts[3]}` 
    })
  }
  
  return crumbs
})

// Navigation between chapters
const { data: navigation } = await useAsyncData('philosophy-navigation', async () => {
  const pathParts = route.path.split('/')
  const bookPath = pathParts.slice(0, 4).join('/') // Get book path
  
  const allContent = await queryCollection('filosofia')
    .order('path', 'ASC')
    .all()
  
  // Filter to only content in the same book
  const bookContent = allContent.filter(item => item.path.startsWith(bookPath))
  const currentIndex = bookContent.findIndex(item => item.path === route.path)
  
  return {
    prev: currentIndex > 0 ? bookContent[currentIndex - 1] : null,
    next: currentIndex < bookContent.length - 1 ? bookContent[currentIndex + 1] : null
  }
})

// Check if this is the conclusion page
const isConclusion = computed(() => route.path.includes('conclusion'))
</script>

<template>
  <UPage>
    <UPageHeader>
      <template #headline>
        <UBreadcrumb :links="breadcrumbs" />
      </template>
      <template #title>
        <div class="flex items-center gap-3">
          <UIcon 
            v-if="isConclusion" 
            name="i-heroicons-bookmark-solid" 
            class="w-6 h-6 text-purple-600 dark:text-purple-400"
          />
          {{ page.title || 'Conclusão' }}
        </div>
      </template>
      <template #description>
        {{ page.description }}
      </template>
    </UPageHeader>

    <UPageBody>
      <UContainer :ui="{ constrained: 'max-w-4xl' }">
        <!-- Reading tools -->
        <div class="mb-6 flex items-center justify-between">
          <div class="flex items-center gap-4">
            <UButtonGroup>
              <UButton variant="soft" size="sm">
                <UIcon name="i-heroicons-minus" />
              </UButton>
              <UButton variant="soft" size="sm" disabled>
                100%
              </UButton>
              <UButton variant="soft" size="sm">
                <UIcon name="i-heroicons-plus" />
              </UButton>
            </UButtonGroup>
            
            <UButton variant="ghost" size="sm">
              <UIcon name="i-heroicons-bookmark" class="w-4 h-4" />
              Marcar página
            </UButton>
          </div>
          
          <UButton variant="ghost" size="sm">
            <UIcon name="i-heroicons-document-text" class="w-4 h-4" />
            Notas
          </UButton>
        </div>

        <!-- Content -->
        <article class="prose prose-lg prose-purple dark:prose-invert max-w-none">
          <ContentRenderer :value="page" />
        </article>

        <!-- Navigation -->
        <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <NuxtLink
              v-if="navigation?.prev"
              :to="navigation.prev.path"
              class="group flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-purple-500 dark:hover:border-purple-400 transition-colors"
            >
              <UIcon 
                name="i-heroicons-arrow-left-20-solid" 
                class="w-5 h-5 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors flex-shrink-0"
              />
              <div class="text-left">
                <p class="text-sm text-gray-500 dark:text-gray-400">Anterior</p>
                <p class="font-medium text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {{ navigation.prev.title || 'Capítulo anterior' }}
                </p>
              </div>
            </NuxtLink>
            
            <div v-else />
            
            <NuxtLink
              v-if="navigation?.next"
              :to="navigation.next.path"
              class="group flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-purple-500 dark:hover:border-purple-400 transition-colors md:flex-row-reverse md:text-right"
            >
              <UIcon 
                name="i-heroicons-arrow-right-20-solid" 
                class="w-5 h-5 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors flex-shrink-0"
              />
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">Próximo</p>
                <p class="font-medium text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {{ navigation.next.title || 'Próximo capítulo' }}
                </p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </UContainer>
    </UPageBody>
  </UPage>
</template>