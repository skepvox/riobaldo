<script setup lang="ts">
definePageMeta({
  heroBackground: '-z-10'
})

const seoTitle = 'Riobaldo - Filosofia e Matemática'
const seoDescription = 'Plataforma educacional para o estudo da filosofia e da matemática no ensino médio.'

useSeoMeta({
  title: seoTitle,
  description: seoDescription,
  ogTitle: seoTitle,
  ogDescription: seoDescription
})

const heroDescription = 'Explore as obras completas de Louis Lavelle e aprofunde seus conhecimentos em filosofia e álgebra. Uma plataforma educacional pensada para estudantes e professores do ensino médio.'
const heroCtaLavelle = 'Explorar Lavelle'
const heroCtaAlgebra = 'Estudar Álgebra'

const bibliographySection = {
  title: 'Bibliografia de Louis Lavelle',
  description: 'Descubra a evolução cronológica da obra filosófica de Louis Lavelle, das primeiras teses às publicações póstumas.',
  cta: 'Explorar todas as obras'
}

const featuredSection = {
  title: 'Obras Disponíveis',
  description: 'Comece sua exploração com estes textos fundamentais de Louis Lavelle, totalmente transcritos e anotados.',
  readWork: 'Ler a obra'
}

const features = [
  {
    icon: 'i-heroicons-academic-cap',
    title: 'Recursos Pedagógicos',
    description: 'Acesso completo às obras filosóficas e exercícios de matemática alinhados ao currículo do ensino médio.'
  },
  {
    icon: 'i-heroicons-book-open',
    title: 'Textos Originais',
    description: 'Transcrições fiéis das obras de Louis Lavelle com anotações e contextualizações.'
  },
  {
    icon: 'i-heroicons-chart-bar',
    title: 'Progressão Estruturada',
    description: 'Percursos progressivos em álgebra com exercícios resolvidos e demonstrações.'
  },
  {
    icon: 'i-heroicons-magnifying-glass',
    title: 'Busca Avançada',
    description: 'Encontre rapidamente conceitos filosóficos e teoremas matemáticos.'
  },
  {
    icon: 'i-heroicons-users',
    title: 'Comunidade Educativa',
    description: 'Conecte-se com estudantes e professores apaixonados por filosofia e matemática.'
  },
  {
    icon: 'i-heroicons-device-phone-mobile',
    title: 'Acesso Mobile',
    description: 'Consulte os recursos de qualquer dispositivo, a qualquer momento.'
  }
]

const ctaSection = {
  title: 'Comece sua exploração filosófica',
  description: 'Junte-se a milhares de estudantes e professores que usam o Riobaldo para aprofundar seus estudos de filosofia e matemática.',
  primary: 'Descobrir Lavelle',
  secondary: 'Explorar Álgebra'
}

// Import the bibliography data directly
import bibliographyData from '../../app/data/louis-lavelle-bibliography.json'

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
        <span class="text-primary">Filosofia e Matemática</span>
      </template>

      <template #description>
        <p class="text-lg">
          {{ heroDescription }}
        </p>
      </template>

      <template #links>
        <div class="flex flex-col gap-4">
          <div class="flex items-center flex-wrap gap-2">
            <UButton to="/louis-lavelle" size="xl">
              {{ heroCtaLavelle }}
            </UButton>
            <UButton to="/modules" size="xl" color="neutral" variant="subtle">
              {{ heroCtaAlgebra }}
            </UButton>
          </div>
        </div>
      </template>
    </UPageHero>

    <!-- Lavelle Timeline Section -->
    <UPageSection
      :title="bibliographySection.title"
      :description="bibliographySection.description"
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
            {{ bibliographySection.cta }}
          </UButton>
        </div>
      </div>
    </UPageSection>

    <!-- Featured Works -->
    <UPageSection
      :title="featuredSection.title"
      :description="featuredSection.description"
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
              {{ featuredSection.readWork }}
            </UButton>
          </template>
        </UCard>
      </div>
    </UPageSection>

    <!-- Features Section -->
    <UPageSection
      title="Por que Riobaldo?"
      description="Uma plataforma pensada para enriquecer o aprendizado de filosofia e matemática."
      :ui="{
        root: 'bg-gradient-to-b border-t border-default from-muted dark:from-muted/40 to-default',
        features: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
      }"
    >
      <template #features>
        <UPageFeature
          v-for="feature in features"
          :key="feature.title"
          :icon="feature.icon"
          :title="feature.title"
          :description="feature.description"
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
          {{ ctaSection.title }}
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">
          {{ ctaSection.description }}
        </p>
        <div class="flex justify-center gap-4">
          <UButton to="/louis-lavelle" size="lg">
            {{ ctaSection.primary }}
          </UButton>
          <UButton to="/modules" size="lg" variant="outline">
            {{ ctaSection.secondary }}
          </UButton>
        </div>
      </div>
    </UPageSection>
  </div>
</template>
