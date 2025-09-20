<script setup lang="ts">
import { formatDateByLocale } from '~/utils'

defineProps<{
  section: any
}>()

const { data: posts } = await useAsyncData('index-blogs', () =>
  queryCollection('blog').order('date', 'DESC').limit(3).all()
)
</script>

<template>
  <UPageSection
    :title="section.title"
    :ui="{
      container: 'sm:gap-6 lg:gap-8',
      title: 'text-left text-2xl/tight sm:text-3xl/tight font-semibold',
      description: 'text-left mt-3 text-base sm:text-lg text-muted'
    }"
  >
    <template v-if="section.description" #description>
      <p>{{ section.description }}</p>
    </template>
    <UBlogPosts
      orientation="vertical"
      class="gap-4 lg:gap-y-4"
    >
      <UBlogPost
        v-for="(post, index) in posts"
        :key="post.path ?? index"
        orientation="horizontal"
        variant="naked"
        v-bind="post"
        :to="post.path"
        :ui="{
          root: 'group relative lg:items-start lg:flex ring-0 hover:ring-0',
          body: '!px-0',
          header: 'hidden'
        }"
      >
        <template #date>
          {{ formatDateByLocale('pt-BR', post.date) }}
        </template>
        <template #footer>
          <UButton
            size="xs"
            variant="link"
            class="px-0 gap-0"
            label="Ler artigo"
          >
            <template #trailing>
              <UIcon
                name="i-lucide-arrow-right"
                class="size-4 text-primary transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
              />
            </template>
          </UButton>
        </template>
      </UBlogPost>
    </UBlogPosts>
  </UPageSection>
</template>
