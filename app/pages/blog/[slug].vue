<script setup lang="ts">
import { kebabCase } from 'scule'

definePageMeta({
  heroBackground: 'opacity-30 -z-10'
})
const route = useRoute()

const [{ data: article }, { data: surround }] = await Promise.all([
  useAsyncData(kebabCase(route.path), () => queryCollection('blog').path(route.path).first()),
  useAsyncData(`${kebabCase(route.path)}-surround`, () => {
    return queryCollectionItemSurroundings('blog', route.path, {
      fields: ['description']
    }).order('date', 'DESC')
  })
])

if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Article not found', fatal: true })
}

const title = article.value.seo?.title || article.value.title
const description = article.value.seo?.description || article.value.description

useSeoMeta({
  titleTemplate: '%s · SkepVox Blog',
  title,
  description,
  ogDescription: description,
  ogTitle: `${title} · SkepVox Blog`
})

if (article.value.image) {
  defineOgImage({ url: article.value.image })
} else {
  defineOgImageComponent('Docs', {
    headline: 'Blog',
    title,
    description
  })
}

const links = [
  {
    icon: 'i-lucide-pen',
    label: 'Edit this article',
    to: `https://github.com/skepvox/skepvox.com/edit/main/content/${article.value.stem}.md`,
    target: '_blank'
  }
]
</script>

<template>
  <UContainer>
    <UPage v-if="article">
      <UPageHeader
        :title="article.title"
        :description="article.description"
        :ui="{
          headline: 'flex flex-col gap-y-8 items-start',
          description: 'text-pretty text-muted'
        }"
      >
        <template #headline>
          <UBreadcrumb :items="[{ label: 'Blog', icon: 'i-lucide-newspaper', to: '/blog' }, { label: article.title }]" class="max-w-full" />
          <div class="flex items-center space-x-2">
            <span>
              {{ article.category }}
            </span>
            <span class="text-muted">&middot;&nbsp;&nbsp;<time>{{ formatDateByLocale('pt-BR', article.date) }}</time></span>
          </div>
        </template>

        <div class="mt-4 flex flex-wrap items-center gap-6">
          <UUser v-for="(author, index) in article.authors" :key="index" v-bind="author" :description="author.to ? `@${author.to.split('/').pop()}` : undefined" />
        </div>
      </UPageHeader>

      <UPage class="lg:gap-24">
        <UPageBody>
          <ContentRenderer v-if="article.body" :value="article" />

          <div class="flex items-center justify-between mt-12 not-prose">
            <ULink to="/blog" class="text-primary">
              ← Retornar
            </ULink>
            <PageHeaderLinks :key="article.path" />
          </div>

          <USeparator v-if="surround?.length" />

          <UContentSurround
            prev-icon="i-lucide-chevron-left"
            next-icon="i-lucide-chevron-right"
            :surround="surround"
          />
        </UPageBody>

        <template #right>
          <UContentToc v-if="article.body && article.body.toc" :links="article.body.toc.links" title="Sumário" highlight>
            <template #bottom>
              <div class="hidden lg:block space-y-6">
                <UPageLinks title="Links" :links="links" />
                <USeparator type="dashed" />
                <SocialLinks />
                <Ads />
              </div>
            </template>
          </UContentToc>
        </template>
      </UPage>
    </UPage>
  </UContainer>
</template>
