<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'
import { useSlots } from 'vue'
import type { Ref } from 'vue'
import { navPageFromPath } from '~/utils/content'

const route = useRoute()
const heroBackgroundClass = computed(() => route.meta?.heroBackground || '')
const { isLoading } = useLoadingIndicator()
const navigation = inject<Ref<ContentNavigationItem[]>>('navigation', ref([]))
const authorRightToc = inject<Ref<any[]>>('authorRightToc', ref([]))
const slots = useSlots()

const appear = ref(false)
const appeared = ref(false)
onMounted(() => {
  setTimeout(() => {
    appear.value = true
    setTimeout(() => {
      appeared.value = true
    }, 1000)
  }, 0)
})

const authorRootPath = computed(() => {
  const segments = route.path.split('/').filter(Boolean)
  return segments.length ? `/${segments[0]}` : '/'
})

const authorNode = computed(() => navPageFromPath(authorRootPath.value, navigation.value))
const authorChildren = computed(() => authorNode.value?.children ?? [])
const isRootPage = computed(() => route.path === authorRootPath.value)
const hasRightSlot = computed(() => Boolean(slots.right))
const hasToc = computed(() => (authorRightToc.value?.length ?? 0) > 0)
const shouldShowRightAside = computed(() => !isRootPage.value && (hasRightSlot.value || hasToc.value))

const bookLinks = computed(() => authorChildren.value.map(child => ({
  title: child.title,
  path: child.path ?? '/',
  icon: child.icon as string,
  active: route.path.startsWith(child.path ?? '')
})))

const mobileNavigation = computed<ContentNavigationItem[]>(() => {
  const root = authorNode.value
  if (!root) {
    return []
  }
  return [{
    title: root.title || 'Coleção',
    path: authorRootPath.value,
    icon: root.icon as string,
    children: authorChildren.value
  }]
})

const chaptersNavigation = computed(() => {
  const root = authorNode.value
  if (!root) {
    return []
  }
  const activeBook = root.children?.find(child => route.path.startsWith(child.path ?? ''))
  return activeBook?.children ?? []
})

const booksOpen = ref(false)
watch(
  [() => route.path, authorRootPath],
  ([currentPath, rootPath]) => {
    booksOpen.value = currentPath !== rootPath
  },
  { immediate: true }
)
</script>

<template>
  <div>
    <UBanner
      id="mastering-nuxt-v4"
      title="Faça o curso oficial de Nuxt 4 e economize US$ 50 com o código NUXT4RDY"
      icon="i-lucide-book-open"
      to="https://masteringnuxt.com/?utm_source=nuxt&utm_medium=banner&utm_campaign=nuxt4&friend=nuxt"
      target="_blank"
      close
      :actions="[
        {
          label: 'Resgatar desconto',
          color: 'neutral',
          variant: 'outline',
          trailingIcon: 'i-lucide-arrow-right',
          to: 'https://masteringnuxt.com/?utm_source=nuxt&utm_medium=banner&utm_campaign=nuxt4&friend=nuxt'
        }
      ]"
    />

    <AppHeader />

    <UMain class="relative">
      <HeroBackground
        class="absolute w-full -top-px transition-all text-primary shrink-0 -z-10"
        :class="[
          isLoading ? 'animate-pulse' : (appear ? heroBackgroundClass : 'opacity-0'),
          appeared ? 'duration-[400ms]' : 'duration-1000'
        ]"
      />

      <UContainer class="py-8 space-y-10">
        <div v-if="mobileNavigation.length && !isRootPage" class="mb-8 lg:hidden">
          <UContentNavigation
            :navigation="mobileNavigation"
            highlight
            :default-open="route.path !== authorRootPath"
            :ui="{
              link: 'text-sm font-medium text-muted hover:text-primary'
            }"
          />
        </div>

        <UPage
          v-if="isRootPage"
          :ui="{ root: 'gap-0' }"
          class="max-w-5xl mx-auto"
        >
          <UPageBody class="space-y-12 sm:space-y-16">
            <NuxtPage />
          </UPageBody>
        </UPage>

        <UPage
          v-else
          :ui="{ root: 'items-start gap-10' }"
          class="mx-auto max-w-6xl"
        >
          <template #left>
            <UPageAside v-if="authorChildren.length" class="hidden lg:block">
              <div class="sticky top-32 space-y-6">
                <div class="rounded-2xl border border-default/60 bg-elevated/60 backdrop-blur p-4">
                  <div class="flex items-center justify-between gap-3">
                    <span class="text-sm font-semibold uppercase tracking-wide text-muted">
                      {{ authorNode?.title || 'Coleção' }}
                    </span>
                    <UButton
                      icon="i-lucide-chevron-down"
                      size="xs"
                      color="neutral"
                      variant="ghost"
                      :class="booksOpen ? 'rotate-180 transition-transform' : 'transition-transform'"
                      @click="booksOpen = !booksOpen"
                    />
                  </div>

                  <UCollapse :model-value="booksOpen">
                    <nav class="mt-4 space-y-1">
                      <NuxtLink
                        v-for="book in bookLinks"
                        :key="book.path"
                        :to="book.path"
                        class="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition-colors"
                        :class="book.active ? 'bg-primary/10 text-primary' : 'text-muted hover:bg-default/60'"
                      >
                        <UIcon v-if="book.icon" :name="book.icon" class="size-4" />
                        <span>{{ book.title }}</span>
                      </NuxtLink>
                    </nav>
                  </UCollapse>
                </div>

                <div v-if="chaptersNavigation.length" class="rounded-2xl border border-default/60 bg-elevated/60 backdrop-blur p-3">
                  <UContentNavigation
                    :navigation="chaptersNavigation"
                    highlight
                    :ui="{
                      link: 'text-sm font-medium text-muted hover:text-primary'
                    }"
                  />
                </div>
              </div>
            </UPageAside>
          </template>

          <div class="min-w-0 space-y-12 sm:space-y-16">
            <NuxtPage />
          </div>

          <template #right>
            <UPageAside v-if="shouldShowRightAside" class="hidden lg:block">
              <div class="sticky top-32 space-y-4">
                <slot name="right" />
                <UCard
                  v-if="hasToc"
                  class="border border-default/60 bg-elevated/60 backdrop-blur"
                  :ui="{ body: 'p-4 space-y-2 text-sm text-muted' }"
                >
                  <UContentToc :links="authorRightToc" highlight />
                </UCard>
              </div>
            </UPageAside>
          </template>
        </UPage>
      </UContainer>
    </UMain>

    <AppFooter />
  </div>
</template>
