<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content'

interface PhilosophyBook extends ParsedContent {
  title: string
  author: string
  description: string
  _path: string
}

const { data: books } = await useAsyncData('philosophy-books', () =>
  queryContent('/filosofia')
    .where({ _extension: { $eq: 'md' } })
    .only(['_path', 'title', 'description'])
    .find()
)

const authorStructure = computed(() => {
  const structure = new Map()
  
  books.value?.forEach((item) => {
    const pathParts = item._path.split('/')
    const authorPath = pathParts[2] // e.g., "1.louis-lavelle"
    const bookPath = pathParts[3] // e.g., "1.manuel-de-methodologie-dialectique"
    
    if (!authorPath) return
    
    const authorName = authorPath.replace(/^\d+\./, '').replace(/-/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
    
    if (!structure.has(authorPath)) {
      structure.set(authorPath, {
        path: authorPath,
        name: authorName,
        books: new Map()
      })
    }
    
    if (bookPath) {
      const author = structure.get(authorPath)
      if (!author.books.has(bookPath)) {
        const bookName = bookPath.replace(/^\d+\./, '').replace(/-/g, ' ')
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')
        
        author.books.set(bookPath, {
          path: `/filosofia/${authorPath}/${bookPath}`,
          title: bookName,
          parts: []
        })
      }
      
      const partPath = pathParts[4] // e.g., "1.livre-1"
      if (partPath) {
        const book = author.books.get(bookPath)
        const partName = partPath.replace(/^\d+\./, '').replace(/-/g, ' ')
        const partNum = partPath.match(/\d+/)?.[0]
        
        if (!book.parts.find(p => p.path === partPath)) {
          book.parts.push({
            path: partPath,
            title: partPath.includes('conclusion') ? 'Conclusão' : `Livro ${partNum}`,
            chapters: []
          })
        }
      }
    }
  })
  
  return Array.from(structure.values()).map(author => ({
    ...author,
    books: Array.from(author.books.values())
  }))
})
</script>

<template>
  <UPage>
    <UPageHeader>
      <template #headline>
        <UBadge color="purple" variant="subtle">
          <UIcon name="i-heroicons-book-open" class="w-4 h-4 mr-1" />
          Biblioteca Filosófica
        </UBadge>
      </template>
      <template #title>
        Filosofia
      </template>
      <template #description>
        Coleção de textos filosóficos com ferramentas de estudo e análise
      </template>
    </UPageHeader>

    <UPageBody>
      <UContainer :ui="{ constrained: 'max-w-5xl' }">
        <div class="space-y-12">
          <div 
            v-for="author in authorStructure" 
            :key="author.path"
            class="space-y-6"
          >
            <div class="border-b border-gray-200 dark:border-gray-800 pb-6">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                  <UIcon name="i-heroicons-user-circle" class="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div class="flex-1">
                  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {{ author.name }}
                  </h2>
                  <p class="text-gray-600 dark:text-gray-400">
                    Filósofo francês (1883-1951)
                  </p>
                </div>
              </div>
            </div>

            <div class="space-y-6">
              <div
                v-for="book in author.books"
                :key="book.path"
                class="space-y-4"
              >
                <UCard
                  :ui="{ 
                    base: 'border border-gray-200 dark:border-gray-800',
                    header: { base: 'bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20' }
                  }"
                >
                  <template #header>
                    <div class="flex items-center justify-between">
                      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                        {{ book.title }}
                      </h3>
                      <UBadge variant="subtle">
                        {{ book.parts.length }} {{ book.parts.length === 1 ? 'parte' : 'partes' }}
                      </UBadge>
                    </div>
                  </template>

                  <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <NuxtLink
                      v-for="part in book.parts"
                      :key="part.path"
                      :to="`${book.path}/${part.path}`"
                      class="group"
                    >
                      <UCard
                        :ui="{ 
                          base: 'hover:shadow-md transition-all duration-200 hover:border-purple-300 dark:hover:border-purple-700',
                          body: { padding: 'p-4' }
                        }"
                      >
                        <div class="flex items-center justify-between">
                          <div>
                            <h4 class="font-medium text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                              {{ part.title }}
                            </h4>
                            <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                              {{ part.title === 'Conclusão' ? 'Síntese final' : '4 capítulos' }}
                            </p>
                          </div>
                          <UIcon 
                            name="i-heroicons-arrow-right-20-solid" 
                            class="w-5 h-5 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors"
                          />
                        </div>
                      </UCard>
                    </NuxtLink>
                  </div>
                </UCard>
              </div>
            </div>
          </div>
        </div>

        <div v-if="!authorStructure.length" class="text-center py-12">
          <UIcon name="i-heroicons-book-open" class="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p class="text-gray-500 dark:text-gray-400">
            Biblioteca em construção
          </p>
        </div>
      </UContainer>
    </UPageBody>
  </UPage>
</template>