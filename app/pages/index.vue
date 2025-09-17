<script setup lang="ts">
definePageMeta({
  heroBackground: '-z-10'
})

const { t } = useI18n()

const seoTitle = computed(() => t('home.meta.title'))
const seoDescription = computed(() => t('home.meta.description'))

useSeoMeta({
  title: () => seoTitle.value,
  description: () => seoDescription.value,
  ogTitle: () => seoTitle.value,
  ogDescription: () => seoDescription.value
})

// Import the bibliography data directly
import bibliographyData from '../../content/louis-lavelle/bibliography.json'

// Create a ref for the bibliography data
const bibliography = ref(bibliographyData)

// Cast bibliography to proper type
interface BibliographyData {
  works: Array<{
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
  }>
  categories: string[]
}

// Calculate statistics
const lavelleStats = computed(() => {
  if (!bibliography.value) return { total: 0, available: 0, pending: 0, categories: 0 }
  const data = bibliography.value as any as BibliographyData
  const works = data.works || []
  return {
    total: works.length,
    available: works.filter(w => w.status === 'available').length,
    pending: works.filter(w => w.status === 'pending').length,
    categories: [...new Set(works.map(w => w.category))].length
  }
})

// Featured works (those that are available)
const featuredWorks = computed(() => {
  if (!bibliography.value) return []
  const data = bibliography.value as any as BibliographyData
  return (data.works || [])
    .filter(w => w.status === 'available')
    .sort((a, b) => a.year - b.year)
})
</script>

<template>
  <div>
    <!-- Hero Section -->
    <UPageHero
      class="relative"
      orientation="horizontal"
      :ui="{
        container: '!pb-20 py-24 sm:py-32 lg:py-40',
        title: 'text-5xl sm:text-7xl',
        wrapper: 'lg:min-h-[540px]'
      }"
    >
      <template #title>
        {{ t('app.siteName') }}<br>
        <span class="text-primary">{{ t('app.tagline') }}</span>
      </template>

      <template #description>
        <p class="text-lg">
          {{ t('home.hero.description') }}
        </p>
      </template>

      <template #links>
        <div class="flex flex-col gap-4">
          <div class="flex items-center flex-wrap gap-2">
            <UButton to="/louis-lavelle" size="xl">
              {{ t('home.hero.ctaLavelle') }}
            </UButton>
            <UButton to="/modules" size="xl" color="neutral" variant="subtle">
              {{ t('home.hero.ctaAlgebra') }}
            </UButton>
          </div>
        </div>
      </template>

      <!-- Stats Cards -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
        <UCard class="text-center">
          <div class="text-3xl font-bold text-primary-500">
            {{ lavelleStats.total }}
          </div>
          <div class="text-sm text-gray-600 dark:text-gray-400">
            {{ t('home.stats.totalLabel') }}
          </div>
        </UCard>
        <UCard class="text-center">
          <div class="text-3xl font-bold text-green-500">
            {{ lavelleStats.available }}
          </div>
          <div class="text-sm text-gray-600 dark:text-gray-400">
            {{ t('home.stats.availableLabel') }}
          </div>
        </UCard>
        <UCard class="text-center">
          <div class="text-3xl font-bold text-amber-500">
            {{ lavelleStats.pending }}
          </div>
          <div class="text-sm text-gray-600 dark:text-gray-400">
            {{ t('home.stats.pendingLabel') }}
          </div>
        </UCard>
        <UCard class="text-center">
          <div class="text-3xl font-bold text-purple-500">
            {{ lavelleStats.categories }}
          </div>
          <div class="text-sm text-gray-600 dark:text-gray-400">
            {{ t('home.stats.categoriesLabel') }}
          </div>
        </UCard>
      </div>
    </UPageHero>

    <!-- Lavelle Timeline Section -->
    <UPageSection
      :title="t('home.bibliography.title')"
      :description="t('home.bibliography.description')"
      :ui="{
        root: 'bg-gradient-to-b border-t border-default from-muted dark:from-muted/40 to-default',
        container: 'py-12 sm:py-16 lg:py-20'
      }"
    >
      <div class="mt-8">
        <LavelleTimeline />

        <div class="mt-8 text-center">
          <UButton
            to="/louis-lavelle"
            size="lg"
            trailing-icon="i-heroicons-arrow-right"
          >
            {{ t('home.bibliography.cta') }}
          </UButton>
        </div>
      </div>
    </UPageSection>

    <!-- Featured Works -->
    <UPageSection
      :title="t('home.featured.title')"
      :description="t('home.featured.description')"
      :ui="{
        root: 'bg-gradient-to-b border-t border-default from-muted dark:from-muted/40 to-default'
      }"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <UCard
          v-for="work in featuredWorks"
          :key="work.id"
          :to="work.path"
          class="hover:shadow-lg transition-shadow duration-200"
        >
          <template #header>
            <div class="flex items-start justify-between">
              <div>
                <h3 class="text-lg font-semibold">
                  {{ work.title }}
                </h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  {{ work.year }}
                </p>
              </div>
              <UBadge :color="work.category === 'Métaphysique' ? 'primary' : 'secondary'" size="xs">
                {{ work.category }}
              </UBadge>
            </div>
          </template>

          <p class="text-sm text-gray-600 dark:text-gray-400">
            {{ work.publisher }}
            <span v-if="work.pages"> • {{ work.pages }} pages</span>
          </p>

          <p v-if="work.description" class="mt-2 text-sm italic">
            {{ work.description }}
          </p>

          <template #footer>
            <UButton
              :to="work.path"
              color="primary"
              variant="ghost"
              icon="i-heroicons-book-open"
              class="w-full"
            >
              {{ t('home.featured.readWork') }}
            </UButton>
          </template>
        </UCard>
      </div>
    </UPageSection>

    <!-- Features Section -->
    <UPageSection
      :title="t('home.features.title')"
      :description="t('home.features.description')"
      :ui="{
        root: 'bg-gradient-to-b border-t border-default from-muted dark:from-muted/40 to-default',
        features: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
      }"
    >
      <template #features>
        <UPageFeature
          icon="i-heroicons-academic-cap"
          :title="t('home.features.items.education.title')"
          :description="t('home.features.items.education.description')"
          orientation="vertical"
        />
        <UPageFeature
          icon="i-heroicons-book-open"
          :title="t('home.features.items.originalTexts.title')"
          :description="t('home.features.items.originalTexts.description')"
          orientation="vertical"
        />
        <UPageFeature
          icon="i-heroicons-chart-bar"
          :title="t('home.features.items.structuredProgress.title')"
          :description="t('home.features.items.structuredProgress.description')"
          orientation="vertical"
        />
        <UPageFeature
          icon="i-heroicons-magnifying-glass"
          :title="t('home.features.items.advancedSearch.title')"
          :description="t('home.features.items.advancedSearch.description')"
          orientation="vertical"
        />
        <UPageFeature
          icon="i-heroicons-users"
          :title="t('home.features.items.community.title')"
          :description="t('home.features.items.community.description')"
          orientation="vertical"
        />
        <UPageFeature
          icon="i-heroicons-device-phone-mobile"
          :title="t('home.features.items.mobileAccess.title')"
          :description="t('home.features.items.mobileAccess.description')"
          orientation="vertical"
        />
      </template>
    </UPageSection>

    <!-- CTA Section -->
    <UPageSection
      class="text-center"
      :ui="{
        root: 'bg-gradient-to-b border-t border-default from-primary-50 dark:from-primary-950 to-default'
      }"
    >
      <div class="max-w-2xl mx-auto">
        <h2 class="text-3xl font-bold mb-4">
          {{ t('home.cta.title') }}
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">
          {{ t('home.cta.description') }}
        </p>
        <div class="flex justify-center gap-4">
          <UButton to="/louis-lavelle" size="lg">
            {{ t('home.cta.primary') }}
          </UButton>
          <UButton to="/modules" size="lg" variant="outline">
            {{ t('home.cta.secondary') }}
          </UButton>
        </div>
      </div>
    </UPageSection>
  </div>
</template>
