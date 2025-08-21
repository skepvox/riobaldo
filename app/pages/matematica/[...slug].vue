<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () =>
  queryCollection('matematica').path(route.path).first()
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Página não encontrada' })
}

// Parse the path to get breadcrumb structure
const breadcrumbs = computed(() => {
  const parts = route.path.split('/').filter(Boolean)
  const crumbs = [
    { label: 'Início', to: '/' },
    { label: 'Matemática', to: '/matematica' }
  ]
  
  if (parts[1]) { // Module
    const moduleNum = parts[1].match(/\d+/)?.[0]
    crumbs.push({ 
      label: `Módulo ${moduleNum}`,
      to: undefined as any // No actual navigation
    })
  }
  
  if (parts[2]) { // Chapter
    const chapterNum = parts[2].match(/\d+/)?.[0]
    crumbs.push({ 
      label: `Capítulo ${chapterNum}`,
      to: undefined as any // No actual navigation
    })
  }
  
  return crumbs
})

// Navigation between lessons
const { data: navigation } = await useAsyncData('math-navigation', async () => {
  const allContent = await queryCollection('matematica')
    .order('path', 'ASC')
    .all()
  
  const currentIndex = allContent.findIndex(item => item.path === route.path)
  
  return {
    prev: currentIndex > 0 ? allContent[currentIndex - 1] : null,
    next: currentIndex < allContent.length - 1 ? allContent[currentIndex + 1] : null
  }
})
</script>

<template>
  <UPage>
    <UPageHeader>
      <template #headline>
        <UBreadcrumb :links="breadcrumbs" />
      </template>
      <template #title>
        {{ page.title }}
      </template>
      <template #description>
        {{ page.description }}
      </template>
    </UPageHeader>

    <UPageBody>
      <UContainer :ui="{ constrained: 'max-w-4xl' }">
        <div class="prose prose-primary dark:prose-invert max-w-none">
          <ContentRenderer :value="page" />
        </div>

        <!-- Navigation -->
        <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <NuxtLink
              v-if="navigation?.prev"
              :to="navigation.prev.path"
              class="group flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
            >
              <UIcon 
                name="i-heroicons-arrow-left-20-solid" 
                class="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0"
              />
              <div class="text-left">
                <p class="text-sm text-gray-500 dark:text-gray-400">Anterior</p>
                <p class="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {{ navigation.prev.title }}
                </p>
              </div>
            </NuxtLink>
            
            <div v-else />
            
            <NuxtLink
              v-if="navigation?.next"
              :to="navigation.next.path"
              class="group flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-400 transition-colors md:flex-row-reverse md:text-right"
            >
              <UIcon 
                name="i-heroicons-arrow-right-20-solid" 
                class="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0"
              />
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">Próximo</p>
                <p class="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {{ navigation.next.title }}
                </p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </UContainer>
    </UPageBody>
  </UPage>
</template>