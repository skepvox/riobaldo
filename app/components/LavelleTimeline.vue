<template>
  <div class="relative">
    <div v-if="!bibliography" class="flex items-center justify-center gap-3 py-12">
      <UIcon name="i-heroicons-arrow-path" class="h-8 w-8 animate-spin text-primary-500" />
      <span class="text-gray-600 dark:text-gray-400">
        {{ t('home.timeline.loading') }}
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
            <header class="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <p class="text-sm font-medium uppercase tracking-wide text-primary-600 dark:text-primary-400">
                  {{ t('home.timeline.decade.label') }}
                </p>
                <h3 class="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  {{ t('home.timeline.decade.title', { start: decade.decade, end: decade.decade + 9 }) }}
                </h3>
              </div>
              <UBadge variant="subtle">
                {{ t('home.timeline.decade.count', { count: decade.works.length }) }}
              </UBadge>
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
                      <UBadge :color="getCategoryColor(work.category) as any" size="xs">
                        {{ work.category }}
                      </UBadge>
                      <UBadge
                        v-if="work.type === 'posthumous'"
                        color="neutral"
                        variant="outline"
                        size="xs"
                      >
                        {{ t('home.timeline.work.types.posthumous') }}
                      </UBadge>
                      <UBadge
                        v-if="work.type === 'thesis'"
                        color="secondary"
                        variant="outline"
                        size="xs"
                      >
                        {{ t('home.timeline.work.types.thesis') }}
                      </UBadge>
                    </div>

                    <div class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <p class="flex flex-wrap items-center gap-2">
                        <span class="font-medium text-gray-900 dark:text-gray-100">
                          {{ work.year }}
                        </span>
                        <span class="text-gray-400 dark:text-gray-500">•</span>
                        <span>{{ work.publisher }}</span>
                        <template v-if="work.pages">
                          <span class="text-gray-400 dark:text-gray-500">•</span>
                          <span>{{ t('home.timeline.work.pages', { count: work.pages }) }}</span>
                        </template>
                      </p>
                      <p v-if="work.description" class="italic">
                        {{ work.description }}
                      </p>
                      <div v-if="hasReissues(work)" class="pt-1">
                        <p class="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                          {{ t('home.timeline.work.reissues') }}
                        </p>
                        <ul class="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-600 dark:text-gray-400">
                          <li v-for="(reissue, reissueIndex) in work.reissues" :key="reissueIndex">
                            {{ reissue.year }} · {{ reissue.publisher }}
                          </li>
                        </ul>
                      </div>
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
                      {{ t('home.timeline.work.actions.read') }}
                    </UButton>
                    <UTooltip v-else :text="t('home.timeline.work.actions.inProgress')">
                      <UButton
                        color="neutral"
                        variant="ghost"
                        size="sm"
                        icon="i-heroicons-clock"
                        disabled
                      >
                        {{ t('home.timeline.work.actions.soon') }}
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
              {{ t('home.timeline.availability.title') }}
            </p>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              {{ t('home.timeline.availability.description', {
                available: statistics.available,
                total: statistics.total,
                pending: statistics.pending
              }) }}
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
import bibliographyData from '../../content/louis-lavelle/bibliography.json'

const { t, locale } = useI18n()

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

const statusFilters = computed(() => [
  { label: t('home.timeline.filters.status.all'), value: 'all' },
  { label: t('home.timeline.filters.status.available'), value: 'available' },
  { label: t('home.timeline.filters.status.pending'), value: 'pending' }
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
    const decade = Math.floor(work.year / 10) * 10
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

const numberFormatter = computed(() => new Intl.NumberFormat(locale.value))

const formattedAvailabilityPercent = computed(() => numberFormatter.value.format(availabilityPercent.value))

const categoryCount = computed(() => {
  if (!bibliography.value) {
    return 0
  }

  const data = bibliography.value as BibliographyData

  if (Array.isArray(data.categories) && data.categories.length) {
    return data.categories.length
  }

  const works = (data.works || []) as Work[]
  return new Set(works.map(work => work.category)).size
})

const summaryStats = computed(() => {
  const stats = statistics.value
  const formatter = numberFormatter.value

  return [
    {
      id: 'available',
      icon: 'i-heroicons-book-open',
      label: t('home.stats.availableLabel'),
      value: formatter.format(stats.available),
      hint: t('home.stats.details.available', { percent: formattedAvailabilityPercent.value })
    },
    {
      id: 'pending',
      icon: 'i-heroicons-clock',
      label: t('home.stats.pendingLabel'),
      value: formatter.format(stats.pending),
      hint: t('home.stats.details.pending')
    },
    {
      id: 'categories',
      icon: 'i-heroicons-sparkles',
      label: t('home.stats.categoriesLabel'),
      value: formatter.format(categoryCount.value),
      hint: t('home.stats.details.categories')
    }
  ]
})

const categoryColorMap: Record<string, string> = {
  'Axiologie': 'amber',
  'Écrits personnels': 'pink',
  'Histoire de la philosophie': 'indigo',
  'Métaphysique': 'violet',
  'Méthodologie': 'teal',
  'Philosophie de l\'esprit': 'blue',
  'Philosophie du langage': 'cyan',
  'Philosophie générale': 'primary',
  'Philosophie morale': 'green',
  'Psychologie': 'purple',
  'Spiritualité': 'rose'
}

const getCategoryColor = (category: string) => categoryColorMap[category] || 'neutral'

const getCardClasses = (work: Work) => {
  const base = 'transition-all duration-200'

  if (work.status === 'available') {
    return `${base} border border-primary-200/70 bg-primary-50/70 shadow-sm dark:border-primary-400/40 dark:bg-primary-950/40`
  }

  return `${base} hover:border-primary-200/60 dark:hover:border-primary-400/40`
}

const hasReissues = (work: Work) => Array.isArray(work.reissues) && work.reissues.length > 0

const axisBaseClass = 'relative isolate flex w-10 shrink-0 justify-center before:absolute before:left-1/2 before:top-3 before:h-full before:-translate-x-1/2 before:w-px before:bg-gray-200 before:content-[\'\'] dark:before:bg-gray-700 sm:before:top-5'
</script>
