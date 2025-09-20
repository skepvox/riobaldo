<script setup lang="ts">
import { kebabCase } from 'scule'
import type { Ref } from 'vue'
import type { ContentNavigationItem } from '@nuxt/content'
import { findPageBreadcrumb } from '@nuxt/content/utils'
import { mapContentNavigation } from '#ui-pro/utils'

definePageMeta({
  layout: 'author',
  heroBackground: 'opacity-30',
  key: 'louis-lavelle'
})

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation', ref([]))

const route = useRoute()
const nuxtApp = useNuxtApp()

const path = computed(() => route.path.replace(/\/$/, ''))

function paintResponse() {
  if (import.meta.server) {
    return Promise.resolve()
  }
  return new Promise((resolve) => {
    setTimeout(resolve, 100)
    requestAnimationFrame(() => setTimeout(resolve, 0))
  })
}

const [{ data: page, status }, { data: surround }] = await Promise.all([
  useAsyncData(kebabCase(path.value), () => paintResponse().then(() => nuxtApp.static[kebabCase(path.value)] ?? queryCollection('louisLavelle').path(path.value).first()), {
    watch: [path]
  }),
  useAsyncData(`${kebabCase(path.value)}-surround`, () => paintResponse().then(() => nuxtApp.static[`${kebabCase(path.value)}-surround`] ?? queryCollectionItemSurroundings('louisLavelle', path.value, {
    fields: ['description']
  })), { watch: [path] })
])

watch(status, (status) => {
  if (status === 'pending') {
    nuxtApp.hooks.callHook('page:loading:start')
  } else if (status === 'success' || status === 'error') {
    nuxtApp.hooks.callHook('page:loading:end')
  }
})

watch(page, (page) => {
  if (!page) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
  }
}, { immediate: true })

const breadcrumb = computed(() => {
  const links = mapContentNavigation(findPageBreadcrumb(navigation.value, path.value)).map(link => ({
    label: link.label,
    to: link.to
  }))

  return links
})

const editLink = computed(() => page.value?.path ? `https://github.com/skepvox/riobaldo/edit/main/content${page.value.path}.md` : '#')

const tocLinks = computed(() => page.value?.body?.toc?.links ?? [])
provide('authorRightToc', tocLinks)

const title = computed(() => page.value?.seo?.title || page.value?.title)
const titleTemplate = computed(() => page.value?.titleTemplate || '%s · Louis Lavelle')

useSeoMeta({
  titleTemplate,
  title
})

if (import.meta.server) {
  const description = page.value?.seo?.description || page.value?.description
  useSeoMeta({
    description,
    ogDescription: description,
    ogTitle: titleTemplate.value?.includes('%s') ? titleTemplate.value.replace('%s', title.value) : title.value
  })

  defineOgImageComponent('Docs', {
    headline: breadcrumb.value.length ? breadcrumb.value.map(link => link.label).join(' > ') : '',
    title,
    description
  })
}
</script>

<template>
  <UContainer v-if="page">
    <UPage>
      <UPageHeader v-bind="page">
        <template #headline>
          <UBreadcrumb :items="breadcrumb" />
        </template>

        <template #links>
          <UButton
            v-for="link in page.links?.map(link => ({ ...link, size: 'md' }))"
            :key="link.label"
            color="neutral"
            variant="outline"
            :target="link.to.startsWith('http') ? '_blank' : undefined"
            v-bind="link"
          >
            <template v-if="link.avatar" #leading>
              <UAvatar v-bind="link.avatar" size="2xs" :alt="`${link.label} avatar`" />
            </template>
          </UButton>
          <PageHeaderLinks :key="page.path" />
        </template>
      </UPageHeader>

      <UPageBody>
        <ContentRenderer v-if="page.body" :value="page" />
        <div>
          <USeparator class="mt-6 mb-10">
            <div class="flex items-center gap-2 text-sm text-muted">
              <UButton size="sm" variant="link" color="neutral" to="https://github.com/nuxt/nuxt/issues/new/choose" target="_blank">
                Report an issue
              </UButton>
              or
              <UButton size="sm" variant="link" color="neutral" :to="editLink" target="_blank">
                Edit this page on GitHub
              </UButton>
            </div>
          </USeparator>
          <UContentSurround :surround="surround" />
        </div>
      </UPageBody>
    </UPage>
  </UContainer>
</template>
