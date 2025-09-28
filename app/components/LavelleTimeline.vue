<template>
  <div class="space-y-10">
    <div v-if="!bibliography" class="flex items-center justify-center gap-3 py-12">
      <UIcon name="i-heroicons-arrow-path" class="h-8 w-8 animate-spin text-primary-500" />
      <span class="text-gray-600 dark:text-gray-400">
        {{ loadingText }}
      </span>
    </div>

    <div v-else class="space-y-10">
      <div v-if="timelineItems.length" class="space-y-6">
        <UTimeline :items="timelineItems" size="lg" class="w-full">
          <template #date="{ item }">
            <span class="text-sm font-semibold text-primary-600 dark:text-primary-300">
              {{ item.date }}
            </span>
          </template>

          <template #title="{ item }">
            <div class="flex flex-col gap-3">
              <p class="font-semibold text-gray-900 dark:text-gray-100">
                {{ item.title }}
              </p>

              <UButton
                v-if="item.cta"
                :to="item.cta.to"
                color="primary"
                variant="solid"
                size="xs"
                class="w-fit"
              >
                {{ item.cta.label || 'Ler' }}
              </UButton>
            </div>
          </template>

          <template #description="{ item }">
            <div class="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-400">
              <span v-if="item.description" class="text-gray-500 dark:text-gray-400">
                {{ item.description }}
              </span>
            </div>
          </template>
        </UTimeline>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { TimelineItem } from '@nuxt/ui'
import bibliographySource from '../data/louis-lavelle-bibliography.json'

type WorkStatus = 'available' | 'pending'

interface Work {
  id: string
  title: string
  year: number
  publisher?: string
  pages?: number
  type: string
  category: string
  status: WorkStatus
  path?: string
  description?: string
  reissues?: Array<{
    year: number
    publisher?: string
    pages?: number
    note?: string
  }>
}

interface BibliographyData {
  works: Work[]
  categories: string[]
  chroniques?: unknown
}

interface WorkTimelineItem extends TimelineItem {
  status: WorkStatus
  path?: string
  description?: string
  cta?: {
    label?: string
    to: string
  }
}

const bibliography = ref(bibliographySource as BibliographyData | null)

const loadingText = 'Carregando bibliografia…'

const statusIcons: Record<WorkStatus, string> = {
  available: 'i-lucide-book-open-check',
  pending: 'i-lucide-clock'
}

const works = computed(() => {
  if (!bibliography.value?.works?.length) {
    return [] as Work[]
  }

  return [...bibliography.value.works].sort((a, b) => a.year - b.year)
})

const timelineItems = computed<WorkTimelineItem[]>(() => works.value.map((work) => {
  const isCompletedBook = work.id === 'manuel-methodologie'

  const indicatorClass = isCompletedBook
    ? 'group-data-[state=completed]:text-success-500 group-data-[state=active]:text-success-500 text-success-500 dark:text-success-400'
    : 'group-data-[state=completed]:text-muted group-data-[state=active]:text-muted text-muted'

  return {
    value: work.id,
    date: String(work.year),
    title: work.title,
    status: work.status,
    path: work.path,
    description: work.description,
    icon: statusIcons[work.status],
    ui: { indicator: indicatorClass },
    cta: isCompletedBook
      ? {
          to: '/louis-lavelle/manuel-de-methodologie-dialectique/livre-01/reflexion-et-methode'
        }
      : undefined
  }
}))
</script>
