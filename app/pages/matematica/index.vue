<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content'

interface MathModule extends ParsedContent {
  title: string
  description: string
  _path: string
}

const { data: modules } = await useAsyncData('math-modules', () =>
  queryContent('/matematica')
    .where({ _extension: { $eq: 'md' } })
    .only(['_path', 'title', 'description'])
    .find()
)

const moduleStructure = computed(() => {
  const structure = new Map()
  
  modules.value?.forEach((item) => {
    const pathParts = item._path.split('/')
    const modulePath = pathParts[2] // e.g., "1.modulo-1"
    const chapterPath = pathParts[3] // e.g., "1.capitulo-1"
    
    if (!structure.has(modulePath)) {
      structure.set(modulePath, {
        path: modulePath,
        title: `Módulo ${modulePath.match(/\d+/)?.[0]}`,
        chapters: new Map()
      })
    }
    
    if (chapterPath && pathParts[4]) {
      const module = structure.get(modulePath)
      if (!module.chapters.has(chapterPath)) {
        module.chapters.set(chapterPath, {
          path: chapterPath,
          title: `Capítulo ${chapterPath.match(/\d+/)?.[0]}`,
          lessons: []
        })
      }
      module.chapters.get(chapterPath).lessons.push({
        path: item._path,
        title: item.title || pathParts[4].replace(/\.md$/, '').replace(/^\d+\./, '')
      })
    }
  })
  
  return Array.from(structure.values()).map(module => ({
    ...module,
    chapters: Array.from(module.chapters.values())
  }))
})
</script>

<template>
  <UPage>
    <UPageHeader>
      <template #headline>
        <UBadge color="blue" variant="subtle">
          <UIcon name="i-heroicons-calculator" class="w-4 h-4 mr-1" />
          Educação Matemática
        </UBadge>
      </template>
      <template #title>
        Matemática
      </template>
      <template #description>
        Livro virtual interativo de matemática para ensino médio
      </template>
    </UPageHeader>

    <UPageBody>
      <UContainer :ui="{ constrained: 'max-w-5xl' }">
        <div class="space-y-12">
          <div 
            v-for="(module, moduleIndex) in moduleStructure" 
            :key="module.path"
            class="space-y-6"
          >
            <div class="border-b border-gray-200 dark:border-gray-800 pb-6">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">
                  {{ moduleIndex + 1 }}
                </div>
                <div class="flex-1">
                  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {{ module.title }}
                  </h2>
                  <p class="text-gray-600 dark:text-gray-400">
                    Fundamentos numéricos e operações essenciais
                  </p>
                </div>
              </div>
            </div>

            <div class="grid gap-6 md:grid-cols-2">
              <UCard
                v-for="(chapter, chapterIndex) in module.chapters"
                :key="chapter.path"
                :ui="{ 
                  base: 'hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-800',
                  body: { padding: 'p-6' }
                }"
              >
                <div class="space-y-4">
                  <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-sm font-medium">
                      {{ chapterIndex + 1 }}
                    </div>
                    <div class="flex-1">
                      <h3 class="font-semibold text-lg text-gray-900 dark:text-white">
                        {{ chapter.title }}
                      </h3>
                      <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {{ chapter.lessons.length }} {{ chapter.lessons.length === 1 ? 'lição' : 'lições' }}
                      </p>
                    </div>
                  </div>
                  
                  <div class="space-y-2">
                    <NuxtLink
                      v-for="lesson in chapter.lessons"
                      :key="lesson.path"
                      :to="lesson.path"
                      class="block px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                    >
                      <div class="flex items-center justify-between">
                        <span class="text-sm text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {{ lesson.title }}
                        </span>
                        <UIcon 
                          name="i-heroicons-arrow-right-20-solid" 
                          class="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                        />
                      </div>
                    </NuxtLink>
                  </div>
                </div>
              </UCard>
            </div>
          </div>
        </div>

        <div v-if="!moduleStructure.length" class="text-center py-12">
          <UIcon name="i-heroicons-book-open" class="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p class="text-gray-500 dark:text-gray-400">
            Conteúdo em desenvolvimento
          </p>
        </div>
      </UContainer>
    </UPageBody>
  </UPage>
</template>