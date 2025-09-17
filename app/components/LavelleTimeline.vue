<template>
  <div class="relative">
    <!-- Loading state -->
    <div v-if="!bibliography" class="flex justify-center items-center py-12">
      <UIcon name="i-heroicons-arrow-path" class="animate-spin h-8 w-8 text-primary-500" />
      <span class="ml-2 text-gray-600 dark:text-gray-400">Chargement de la bibliographie...</span>
    </div>

    <!-- Content when loaded -->
    <div v-else>
      <!-- Filters -->
      <div class="mb-8 flex flex-wrap gap-4">
        <USelectMenu
          v-model="selectedCategory"
          :options="categoryOptions"
          placeholder="Toutes les catégories"
          class="w-full sm:w-auto"
        />
        <UButtonGroup>
          <UButton
            v-for="filter in statusFilters"
            :key="filter.value"
            :color="selectedStatus === filter.value ? 'primary' : 'neutral'"
            :variant="selectedStatus === filter.value ? 'solid' : 'ghost'"
            @click="selectedStatus = filter.value"
          >
            {{ filter.label }}
          </UButton>
        </UButtonGroup>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Timeline line -->
        <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />

        <!-- Works grouped by decade -->
        <div class="space-y-12">
          <div v-for="decade in groupedWorks" :key="decade.decade" class="relative">
            <!-- Decade marker -->
            <div class="flex items-center mb-6">
              <div class="absolute left-8 w-4 h-4 bg-primary-500 rounded-full -translate-x-1/2" />
              <h3 class="ml-16 text-2xl font-bold text-gray-900 dark:text-gray-100">
                {{ decade.decade }}s
              </h3>
              <UBadge class="ml-4" variant="subtle">
                {{ decade.works.length }} œuvre{{ decade.works.length > 1 ? 's' : '' }}
              </UBadge>
            </div>

            <!-- Works in decade -->
            <div class="space-y-4 ml-16">
              <UCard
                v-for="work in decade.works"
                :key="work.id"
                class="hover:shadow-lg transition-shadow duration-200"
                :ui="{
                  body: 'sm:p-6'
                }"
              >
                <div class="flex items-start justify-between">
                  <div class="flex-1">
                    <div class="flex items-center gap-3 mb-2">
                      <h4 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {{ work.title }}
                      </h4>
                      <UBadge color="primary" size="xs">
                        {{ work.category }}
                      </UBadge>
                      <UBadge
                        v-if="work.type === 'posthumous'"
                        color="neutral"
                        variant="outline"
                        size="xs"
                      >
                        Posthume
                      </UBadge>
                      <UBadge
                        v-if="work.type === 'thesis'"
                        color="secondary"
                        variant="outline"
                        size="xs"
                      >
                        Thèse
                      </UBadge>
                    </div>

                    <div class="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <p>
                        <span class="font-medium">{{ work.year }}</span>
                        • {{ work.publisher }}
                        <span v-if="work.pages">• {{ work.pages }} pages</span>
                      </p>
                      <p v-if="work.description" class="italic">
                        {{ work.description }}
                      </p>
                      <div v-if="work.reissues && work.reissues.length > 0" class="mt-2">
                        <span class="text-xs font-medium">Rééditions :</span>
                        <span v-for="(reissue, idx) in work.reissues" :key="idx" class="text-xs">
                          {{ idx > 0 ? ', ' : ' ' }}{{ reissue.year }} ({{ reissue.publisher }})
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="ml-4">
                    <UButton
                      v-if="work.status === 'available'"
                      :to="work.path"
                      color="primary"
                      variant="solid"
                      size="sm"
                      icon="i-heroicons-book-open"
                    >
                      Lire
                    </UButton>
                    <UTooltip v-else text="Transcription en cours">
                      <UButton
                        color="neutral"
                        variant="ghost"
                        size="sm"
                        icon="i-heroicons-clock"
                        disabled
                      >
                        Bientôt
                      </UButton>
                    </UTooltip>
                  </div>
                </div>
              </UCard>
            </div>
          </div>
        </div>
      </div>

      <!-- Statistics -->
      <div class="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <UCard>
          <div class="text-center">
            <div class="text-3xl font-bold text-primary-500">
              {{ statistics.total }}
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-400">
              Œuvres totales
            </div>
          </div>
        </UCard>
        <UCard>
          <div class="text-center">
            <div class="text-3xl font-bold text-green-500">
              {{ statistics.available }}
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-400">
              Disponibles
            </div>
          </div>
        </UCard>
        <UCard>
          <div class="text-center">
            <div class="text-3xl font-bold text-amber-500">
              {{ statistics.pending }}
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-400">
              En cours
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Import the JSON data directly
import bibliographyData from '../../content/louis-lavelle/bibliography.json'

// Create a ref for the bibliography data
const bibliography = ref(bibliographyData)

interface BibliographyData {
  works: Work[]
  categories: string[]
  chroniques?: any
}

interface Work {
  id: string
  title: string
  year: number
  publisher: string
  pages?: number
  type: string
  category: string
  status: 'available' | 'pending'
  path?: string
  description?: string
  reissues?: Array<{
    year: number
    publisher: string
    note?: string
  }>
}

interface DecadeGroup {
  decade: number
  works: Work[]
}

const selectedCategory = ref<string>('all')
const selectedStatus = ref<string>('all')

const statusFilters = [
  { label: 'Toutes', value: 'all' },
  { label: 'Disponibles', value: 'available' },
  { label: 'En cours', value: 'pending' }
]

const categoryOptions = computed(() => {
  if (!bibliography.value) return [{ label: 'Toutes les catégories', value: 'all' }]
  const data = bibliography.value as any as BibliographyData
  return [
    { label: 'Toutes les catégories', value: 'all' },
    ...(data.categories || []).map((cat: string) => ({ label: cat, value: cat }))
  ]
})

const filteredWorks = computed(() => {
  if (!bibliography.value) return []
  const data = bibliography.value as any as BibliographyData
  let works = (data.works || []) as Work[]

  if (selectedCategory.value !== 'all') {
    works = works.filter(w => w.category === selectedCategory.value)
  }

  if (selectedStatus.value !== 'all') {
    works = works.filter(w => w.status === selectedStatus.value)
  }

  return works.sort((a, b) => a.year - b.year)
})

const groupedWorks = computed((): DecadeGroup[] => {
  const groups: { [key: number]: Work[] } = {}

  filteredWorks.value.forEach((work) => {
    const decade = Math.floor(work.year / 10) * 10
    if (!groups[decade]) {
      groups[decade] = []
    }
    groups[decade].push(work)
  })

  return Object.keys(groups)
    .sort((a, b) => Number(a) - Number(b))
    .map(decade => ({
      decade: Number(decade),
      works: groups[Number(decade)]
    }))
})

const statistics = computed(() => {
  if (!bibliography.value) return { total: 0, available: 0, pending: 0 }
  const data = bibliography.value as any as BibliographyData
  const works = (data.works || []) as Work[]
  return {
    total: works.length,
    available: works.filter(w => w.status === 'available').length,
    pending: works.filter(w => w.status === 'pending').length
  }
})
</script>
