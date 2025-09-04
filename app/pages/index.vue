<script setup lang="ts">
definePageMeta({
  heroBackground: '-z-10'
})

const title = 'Riobaldo - Philosophie et Mathématiques'
const description = 'Plateforme éducative pour l\'étude de la philosophie et des mathématiques au lycée'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description
})

// Import the bibliography data directly
import bibliographyData from '../../content/1.louis-lavelle/bibliography.json'

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
        Riobaldo<br>
        <span class="text-primary">Philosophie & Mathématiques</span>
      </template>

      <template #description>
        <p class="text-lg">
          Explorez les œuvres complètes de Louis Lavelle et approfondissez vos connaissances
          en philosophie et en algèbre. Une plateforme éducative conçue pour les lycéens et les enseignants.
        </p>
      </template>

      <template #links>
        <div class="flex flex-col gap-4">
          <div class="flex items-center flex-wrap gap-2">
            <UButton to="/1.louis-lavelle" size="xl">
              Explorer Lavelle
            </UButton>
            <UButton to="/2.algebre" size="xl" color="neutral" variant="subtle">
              Étudier l'Algèbre
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
            Œuvres de Lavelle
          </div>
        </UCard>
        <UCard class="text-center">
          <div class="text-3xl font-bold text-green-500">
            {{ lavelleStats.available }}
          </div>
          <div class="text-sm text-gray-600 dark:text-gray-400">
            Disponibles
          </div>
        </UCard>
        <UCard class="text-center">
          <div class="text-3xl font-bold text-amber-500">
            {{ lavelleStats.pending }}
          </div>
          <div class="text-sm text-gray-600 dark:text-gray-400">
            En transcription
          </div>
        </UCard>
        <UCard class="text-center">
          <div class="text-3xl font-bold text-purple-500">
            {{ lavelleStats.categories }}
          </div>
          <div class="text-sm text-gray-600 dark:text-gray-400">
            Catégories
          </div>
        </UCard>
      </div>
    </UPageHero>

    <!-- Lavelle Timeline Section -->
    <UPageSection
      title="Bibliographie de Louis Lavelle"
      description="Découvrez l'évolution chronologique de l'œuvre philosophique de Louis Lavelle, de ses premières thèses à ses publications posthumes."
      :ui="{
        root: 'bg-gradient-to-b border-t border-default from-muted dark:from-muted/40 to-default',
        container: 'py-12 sm:py-16 lg:py-20'
      }"
    >
      <div class="mt-8">
        <LavelleTimeline />

        <div class="mt-8 text-center">
          <UButton
            to="/1.louis-lavelle"
            size="lg"
            trailing-icon="i-heroicons-arrow-right"
          >
            Explorer toutes les œuvres
          </UButton>
        </div>
      </div>
    </UPageSection>

    <!-- Featured Works -->
    <UPageSection
      title="Œuvres Disponibles"
      description="Commencez votre exploration avec ces textes fondamentaux de Louis Lavelle, entièrement transcrits et annotés."
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
              Lire l'œuvre
            </UButton>
          </template>
        </UCard>
      </div>
    </UPageSection>

    <!-- Features Section -->
    <UPageSection
      title="Pourquoi Riobaldo ?"
      description="Une plateforme conçue pour enrichir l'apprentissage de la philosophie et des mathématiques"
      :ui="{
        root: 'bg-gradient-to-b border-t border-default from-muted dark:from-muted/40 to-default',
        features: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
      }"
    >
      <template #features>
        <UPageFeature
          icon="i-heroicons-academic-cap"
          title="Ressources Pédagogiques"
          description="Accès complet aux œuvres philosophiques et exercices mathématiques adaptés au programme lycée."
          orientation="vertical"
        />
        <UPageFeature
          icon="i-heroicons-book-open"
          title="Textes Originaux"
          description="Transcriptions fidèles des œuvres de Louis Lavelle avec annotations et contextualisations."
          orientation="vertical"
        />
        <UPageFeature
          icon="i-heroicons-chart-bar"
          title="Progression Structurée"
          description="Parcours d'apprentissage progressif en algèbre avec exercices corrigés et démonstrations."
          orientation="vertical"
        />
        <UPageFeature
          icon="i-heroicons-magnifying-glass"
          title="Recherche Avancée"
          description="Trouvez rapidement les concepts philosophiques et théorèmes mathématiques."
          orientation="vertical"
        />
        <UPageFeature
          icon="i-heroicons-users"
          title="Communauté Éducative"
          description="Échangez avec d'autres étudiants et enseignants passionnés de philosophie et mathématiques."
          orientation="vertical"
        />
        <UPageFeature
          icon="i-heroicons-device-phone-mobile"
          title="Accès Mobile"
          description="Consultez les ressources depuis n'importe quel appareil, à tout moment."
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
          Commencez votre exploration philosophique
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Rejoignez des milliers d'étudiants et enseignants qui utilisent Riobaldo
          pour approfondir leur compréhension de la philosophie et des mathématiques.
        </p>
        <div class="flex justify-center gap-4">
          <UButton to="/1.louis-lavelle" size="lg">
            Découvrir Lavelle
          </UButton>
          <UButton to="/2.algebre" size="lg" variant="outline">
            Explorer l'Algèbre
          </UButton>
        </div>
      </div>
    </UPageSection>
  </div>
</template>
