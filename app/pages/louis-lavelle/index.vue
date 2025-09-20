<script setup lang="ts">
import { computed, ref } from 'vue'
import { joinURL } from 'ufo'
import bibliographyData from '../../data/louis-lavelle-bibliography.json'

definePageMeta({
  layout: 'author',
  heroBackground: 'opacity-30'
})

const bibliography = ref(bibliographyData)

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

const featuredWorks = computed(() => {
  if (!bibliography.value) {
    return []
  }
  const data = bibliography.value as BibliographyData
  return (data.works || [])
    .filter(work => work.status === 'available')
    .sort((a, b) => a.year - b.year)
})

const hero = {
  title: 'Louis Lavelle',
  highlight: 'Metafísica do ato e da presença',
  description: 'Coleção digital dedicada às obras de Louis Lavelle, com textos transcritos, anotações críticas e uma linha do tempo interativa da sua produção filosófica.',
  primaryCta: {
    label: 'Explorar obras',
    to: '#bibliografia'
  },
  secondaryCta: {
    label: 'Sobre o projeto',
    to: '#sobre'
  }
}

const features = [
  {
    icon: 'i-heroicons-academic-cap',
    title: 'Textos anotados',
    description: 'Transcrições cuidadosas com notas críticas e referências cruzadas.'
  },
  {
    icon: 'i-heroicons-library',
    title: 'Contexto filosófico',
    description: 'Introduções que situam cada obra na trajetória intelectual de Lavelle.'
  },
  {
    icon: 'i-heroicons-language',
    title: 'Edição multilíngue',
    description: 'Versões em francês, português e inglês conforme o progresso da edição.'
  },
  {
    icon: 'i-heroicons-sparkles',
    title: 'Ecos contemporâneos',
    description: 'Conexões com debates atuais em fenomenologia, ética e pedagogia.'
  }
]

const ctaSection = {
  title: 'Acompanhe a edição crítica de Lavelle',
  description: 'Novas transcrições, notas e recursos didáticos são publicados continuamente. Inscreva-se para receber atualizações mensais.',
  primary: {
    label: 'Receber atualizações',
    to: '/newsletter'
  },
  secondary: {
    label: 'Ler o blog',
    to: '/blog'
  }
}

const seoTitle = 'Louis Lavelle — Biblioteca Digital'
const seoDescription = 'Explore a linha do tempo, as obras disponíveis e os próximos lançamentos do projeto Louis Lavelle no Riobaldo.'
const site = useSiteConfig()

useSeoMeta({
  title: seoTitle,
  description: seoDescription,
  ogTitle: seoTitle,
  ogDescription: seoDescription,
  ogImage: joinURL(site.url, '/riobaldo-banner.webp'),
  twitterTitle: seoTitle,
  twitterDescription: seoDescription
})
</script>

<template>
  <UPage>
    <UPageHero
      class="relative"
      orientation="horizontal"
      :ui="{
        container: '!pb-16 py-20 sm:py-28 lg:py-32',
        title: 'text-4xl sm:text-6xl font-semibold',
        description: 'max-w-2xl text-lg text-muted'
      }"
    >
      <template #title>
        {{ hero.title }}<br>
        <span class="text-primary">{{ hero.highlight }}</span>
      </template>
      <template #description>
        {{ hero.description }}
      </template>
      <template #links>
        <div class="flex flex-wrap gap-3">
          <UButton :to="hero.primaryCta.to" size="lg">
            {{ hero.primaryCta.label }}
          </UButton>
          <UButton :to="hero.secondaryCta.to" size="lg" color="neutral" variant="soft">
            {{ hero.secondaryCta.label }}
          </UButton>
        </div>
      </template>
    </UPageHero>

    <UPageSection
      id="bibliografia"
      title="Linha do tempo filosófica"
      description="Visualize a evolução da obra de Lavelle e acompanhe o progresso das transcrições disponíveis."
      :ui="{
        root: 'bg-gradient-to-b from-default via-muted/40 to-default border-y border-default/70',
        container: 'py-14 sm:py-16 lg:py-20'
      }"
    >
      <LavelleTimeline />
    </UPageSection>

    <UPageSection
      title="Obras disponíveis"
      description="Inicie sua leitura pelas obras já transcritas e revisadas."
      :ui="{
        container: 'py-14 sm:py-16 lg:py-20'
      }"
    >
      <UPageGrid :columns="{ base: 1, md: 2, lg: 3 }" class="gap-6">
        <UCard
          v-for="work in featuredWorks"
          :key="work.id"
          :to="work.path"
          class="group transition-all duration-200 hover:shadow-lg"
        >
          <template #header>
            <div class="flex items-start justify-between gap-3">
              <div>
                <h3 class="text-lg font-semibold text-foreground">
                  {{ work.title }}
                </h3>
                <p class="text-sm text-muted">
                  {{ work.year }}
                </p>
              </div>
              <UBadge
                :color="work.category === 'Métaphysique' ? 'primary' : 'neutral'"
                size="xs"
              >
                {{ work.category }}
              </UBadge>
            </div>
          </template>
          <p class="text-sm text-muted">
            {{ work.publisher }}<span v-if="work.pages"> • {{ work.pages }} páginas</span>
          </p>
          <template v-if="work.description" #footer>
            <p class="text-sm text-muted-foreground/90">
              {{ work.description }}
            </p>
          </template>
        </UCard>
      </UPageGrid>
    </UPageSection>

    <UPageSection
      id="sobre"
      title="Por que Lavelle agora?"
      description="O projeto busca tornar acessível a contribuição singular de Louis Lavelle para a metafísica contemporânea."
      :ui="{
        container: 'py-14 sm:py-16 lg:py-20'
      }"
    >
      <UPageGrid :columns="{ base: 1, md: 2 }" class="gap-6">
        <UCard
          v-for="feature in features"
          :key="feature.title"
          variant="subtle"
          class="h-full border border-default/50"
        >
          <div class="flex items-start gap-3">
            <span class="inline-flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <UIcon :name="feature.icon" class="size-5" />
            </span>
            <div class="space-y-2">
              <h3 class="text-lg font-semibold text-foreground">
                {{ feature.title }}
              </h3>
              <p class="text-sm text-muted">
                {{ feature.description }}
              </p>
            </div>
          </div>
        </UCard>
      </UPageGrid>
    </UPageSection>

    <UPageCTA
      :title="ctaSection.title"
      :description="ctaSection.description"
      :ui="{
        container: 'py-14 sm:py-16 lg:py-20'
      }"
    >
      <template #actions>
        <div class="flex flex-wrap gap-3">
          <UButton :to="ctaSection.primary.to" size="lg">
            {{ ctaSection.primary.label }}
          </UButton>
          <UButton :to="ctaSection.secondary.to" size="lg" color="neutral" variant="ghost">
            {{ ctaSection.secondary.label }}
          </UButton>
        </div>
      </template>
    </UPageCTA>
  </UPage>
</template>
