<template>
  <div class="relative">
    <div v-if="!bibliography" class="flex items-center justify-center gap-3 py-12">
      <UIcon name="i-heroicons-arrow-path" class="h-8 w-8 animate-spin text-primary-500" />
      <span class="text-gray-600 dark:text-gray-400">
        {{ loadingText }}
      </span>
    </div>

    <div v-else>
      <div class="flex flex-wrap justify-end gap-2">
        <UButtonGroup class="w-full sm:w-auto">
          <UButton
            v-for="filter in statusFilters"
            :key="filter.value"
            :color="selectedStatus === filter.value ? 'primary' : 'neutral'"
            :variant="selectedStatus === filter.value ? 'solid' : 'ghost'"
            class="flex-1 sm:flex-none"
            @click="selectedStatus = filter.value"
          >
            {{ filter.label }}
          </UButton>
        </UButtonGroup>
      </div>

      <div class="mt-6 grid gap-3 sm:grid-cols-3">
        <div
          v-for="item in summaryStats"
          :key="item.id"
          class="flex items-start gap-3 rounded-xl border border-default/40 bg-white/60 px-4 py-3 text-sm text-gray-600 shadow-sm backdrop-blur-sm transition-colors duration-200 hover:border-primary-200/60 dark:border-white/10 dark:bg-white/5 dark:text-gray-400 dark:hover:border-primary-400/40"
        >
          <span class="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-300">
            <UIcon :name="item.icon" class="h-4 w-4" aria-hidden="true" />
          </span>
          <div class="space-y-1">
            <p class="font-medium text-gray-800 dark:text-gray-200">
              {{ item.value }}
              <span class="ml-1 text-xs font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-300">
                {{ item.label }}
              </span>
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              {{ item.hint }}
            </p>
          </div>
        </div>
      </div>

      <div class="mt-10 space-y-12">
        <div
          v-for="(decade, index) in groupedWorks"
          :key="decade.decade"
          class="flex gap-6 sm:gap-10"
        >
          <div
            :class="[
              axisBaseClass,
              index === groupedWorks.length - 1 ? 'before:bottom-8 sm:before:bottom-10' : 'before:bottom-0'
            ]"
          >
            <span
              class="relative z-10 mt-1 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-primary-500 shadow-[0_0_0_6px_rgba(59,130,246,0.18)]"
              aria-hidden="true"
            >
              <span class="h-1.5 w-1.5 rounded-full bg-white dark:bg-gray-950" />
            </span>
          </div>

          <div class="flex-1 space-y-5">
            <header>
              <p class="text-sm font-medium uppercase tracking-wide text-primary-600 dark:text-primary-400">
                {{ decadeTitle(decade.decade, decade.decade + 9) }}
              </p>
            </header>

            <div class="grid gap-4">
              <UCard
                v-for="work in decade.works"
                :key="work.id"
                :class="getCardClasses(work)"
                :ui="{
                  body: 'p-5 sm:p-6 space-y-3'
                }"
              >
                <div class="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div class="flex-1 space-y-3">
                    <div class="flex flex-wrap items-center gap-2">
                      <h4 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {{ work.title }}
                      </h4>
                    </div>

                    <div class="text-sm text-gray-600 dark:text-gray-400">
                      <p class="flex flex-wrap items-center gap-2">
                        <span class="font-medium text-gray-900 dark:text-gray-100">
                          {{ work.year }}
                        </span>
                        <template v-if="work.pages">
                          <span class="text-gray-400 dark:text-gray-500">•</span>
                          <span>{{ pagesLabel(work.pages) }}</span>
                        </template>
                      </p>
                    </div>
                  </div>

                  <div class="flex items-start justify-end">
                    <UButton
                      v-if="work.status === 'available'"
                      :to="work.path"
                      size="sm"
                      color="primary"
                      variant="solid"
                      icon="i-heroicons-book-open"
                    >
                      {{ readLabel }}
                    </UButton>
                    <UTooltip v-else :text="inProgressLabel">
                      <UButton
                        color="neutral"
                        variant="ghost"
                        size="sm"
                        icon="i-heroicons-clock"
                        disabled
                      >
                        {{ soonLabel }}
                      </UButton>
                    </UTooltip>
                  </div>
                </div>
              </UCard>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-14 rounded-2xl border border-default/60 bg-white/80 p-6 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div class="space-y-1">
            <p class="text-sm font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400">
              {{ availabilityTitle }}
            </p>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              {{ availabilityDescription(statistics.available, statistics.total, statistics.pending) }}
            </p>
          </div>

          <div class="flex w-full items-center gap-3 sm:w-auto">
            <div class="h-2 flex-1 rounded-full bg-gray-200 dark:bg-gray-700 sm:w-48">
              <div
                class="h-full rounded-full bg-primary-500 transition-all duration-300"
                :style="{ width: `${availabilityPercent}%` }"
              />
            </div>
            <span class="text-sm font-semibold text-gray-700 dark:text-gray-200">
              {{ availabilityPercent }}%
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import bibliographyData from '../../app/data/louis-lavelle-bibliography.json'

const bibliography = ref(bibliographyData)

interface BibliographyData {
  works: Work[]
  categories: string[]
  chroniques?: unknown
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

const selectedStatus = ref<string>('all')

const loadingText = 'Carregando bibliografia…'
const decadeTitle = (start: number, end: number) => `${start} – ${end}`
const pagesLabel = (count: number) => `${count} página${count === 1 ? '' : 's'}`
const readLabel = 'Ler'
const inProgressLabel = 'Transcrição em andamento'
const soonLabel = 'Em breve'
const availabilityTitle = 'Progresso das transcrições'
const availabilityDescription = (available: number, total: number, pending: number) => `${available} de ${total} obras já transcritas, ${pending} em andamento.`

const statusFilters = computed(() => [
  { label: 'Todas', value: 'all' },
  { label: 'Disponíveis', value: 'available' },
  { label: 'Em andamento', value: 'pending' }
])

const filteredWorks = computed(() => {
  if (!bibliography.value) return []

  const data = bibliography.value as BibliographyData
  let works = (data.works || []) as Work[]

  if (selectedStatus.value !== 'all') {
    works = works.filter(work => work.status === selectedStatus.value)
  }

  return [...works].sort((a, b) => a.year - b.year)
})

const groupedWorks = computed<DecadeGroup[]>(() => {
  const groups: Record<number, Work[]> = {}

  filteredWorks.value.forEach((work) => {
    // Group by decades starting at year 1 (1921-1930, 1931-1940, etc.)
    const decade = Math.floor((work.year - 1) / 10) * 10 + 1
    if (!groups[decade]) {
      groups[decade] = []
    }
    groups[decade].push(work)
  })

  return Object.keys(groups)
    .map(Number)
    .sort((a, b) => a - b)
    .map(decade => ({
      decade,
      works: groups[decade]
    }))
})

const statistics = computed(() => {
  if (!bibliography.value) {
    return { total: 0, available: 0, pending: 0 }
  }

  const data = bibliography.value as BibliographyData
  const works = (data.works || []) as Work[]

  return {
    total: works.length,
    available: works.filter(work => work.status === 'available').length,
    pending: works.filter(work => work.status === 'pending').length
  }
})

const availabilityPercent = computed(() => {
  if (!statistics.value.total) {
    return 0
  }

  return Math.round((statistics.value.available / statistics.value.total) * 100)
})

const numberFormatter = computed(() => new Intl.NumberFormat('pt-BR'))

const formattedAvailabilityPercent = computed(() => numberFormatter.value.format(availabilityPercent.value))

const summaryStats = computed(() => {
  const stats = statistics.value
  const formatter = numberFormatter.value

  return [
    {
      id: 'available',
      icon: 'i-heroicons-book-open',
      label: 'Disponíveis',
      value: formatter.format(stats.available),
      hint: `Prontas para leitura (${formattedAvailabilityPercent.value}%)`
    },
    {
      id: 'pending',
      icon: 'i-heroicons-clock',
      label: 'Em transcrição',
      value: formatter.format(stats.pending),
      hint: 'Aguardando transcrição'
    }
  ]
})

const getCardClasses = (work: Work) => {
  const base = 'transition-all duration-200'

  if (work.status === 'available') {
    return `${base} border border-primary-200/70 bg-primary-50/70 shadow-sm dark:border-primary-400/40 dark:bg-primary-950/40`
  }

  return `${base} hover:border-primary-200/60 dark:hover:border-primary-400/40`
}

const axisBaseClass = 'relative isolate flex w-10 shrink-0 justify-center before:absolute before:left-1/2 before:top-3 before:h-full before:-translate-x-1/2 before:w-px before:bg-gray-200 before:content-[\'\'] dark:before:bg-gray-700 sm:before:top-5'
</script>
