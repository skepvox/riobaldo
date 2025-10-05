<script setup lang="ts">
import { useSlots } from 'vue'
import { useAuthorNavigation } from '~/composables/useAuthorNavigation'

const route = useRoute()
const heroBackgroundClass = computed(() => route.meta?.heroBackground || '')
const { isLoading } = useLoadingIndicator()
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

const {
  isRootPage,
  hasNavigation,
  editionItems,
  languageItems,
  editionModel,
  languageModel,
  displayNavigation
} = useAuthorNavigation()
const hasRightSlot = computed(() => Boolean(slots.right))
const shouldShowRight = computed(() => !isRootPage.value && hasRightSlot.value)
</script>

<template>
  <div>
    <AppHeader />

    <UMain class="relative">
      <HeroBackground
        class="absolute w-full -top-px transition-all text-primary shrink-0 -z-10"
        :class="[
          isLoading ? 'animate-pulse' : (appear ? heroBackgroundClass : 'opacity-0'),
          appeared ? 'duration-[400ms]' : 'duration-1000'
        ]"
      />

      <UContainer class="py-8">
        <div v-if="isRootPage">
          <NuxtPage />
        </div>

        <UPage
          v-else
        >
          <template #left>
            <UPageAside v-if="hasNavigation" :ui="{ top: '' }" class="hidden lg:block">
              <template #top>
                <div class="flex flex-col gap-2 w-[calc(100%+1.25rem)] -mx-2.5">
                  <UTabs
                    v-if="editionItems.length"
                    v-model="editionModel"
                    :items="editionItems"
                    :content="false"
                    color="neutral"
                    size="xs"
                    :ui="{
                      indicator: 'bg-default',
                      trigger: 'px-1 data-[state=active]:text-highlighted w-full'
                    }"
                  />

                  <UTabs
                    v-if="languageItems.length"
                    v-model="languageModel"
                    :items="languageItems"
                    :content="false"
                    color="neutral"
                    size="xs"
                    :ui="{
                      indicator: 'bg-default',
                      trigger: 'px-1 data-[state=active]:text-highlighted w-full'
                    }"
                  />
                </div>
              </template>

              <UContentNavigation
                :navigation="displayNavigation"
                highlight
                :ui="{ linkTrailingBadge: 'font-semibold uppercase' }"
              >
                <template #link-title="{ link }">
                  <span class="inline-flex items-center gap-0.5">
                    {{ link.title }}
                  </span>
                </template>
              </UContentNavigation>
            </UPageAside>
          </template>

          <NuxtPage />

          <template #right>
            <slot v-if="shouldShowRight" name="right" />
          </template>
        </UPage>
      </UContainer>
    </UMain>

    <AppFooter />
  </div>
</template>
