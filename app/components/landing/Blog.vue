<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'
import { formatDate } from '~/utils/date'

defineProps<{
  page: IndexCollectionItem
}>()

const { data: posts } = await useAsyncData('index-blogs', () =>
  queryCollection('blog').order('date', 'DESC').limit(3).all()
)
if (!posts.value) {
  throw createError({ statusCode: 404, statusMessage: 'Posts do blog não encontrados', fatal: true })
}
</script>

<template>
  <!-- Para reutilizar no futuro: :description="page.blog.description" -->
  <UPageSection
    :title="page.blog.title"
    :ui="{
      container: 'px-0 !pt-0 sm:gap-6 lg:gap-8',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'text-left mt-2 text-sm sm:text-md lg:text-sm text-muted'
    }"
  >
    <template #description>
      <WorkInProgress />
    </template>
    <UBlogPosts
      orientation="vertical"
      class="gap-4 lg:gap-y-4"
    >
      <UBlogPost
        v-for="(post, index) in posts"
        :key="index"
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
          {{ formatDate(post.date) }}
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
