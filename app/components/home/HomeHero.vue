<script setup lang="ts">
const props = defineProps<{
  page: any
}>()

const appConfig = useAppConfig()
const hero = computed(() => props.page.hero)
const socialLinks = [
  {
    'icon': 'i-simple-icons-instagram',
    'to': 'https://instagram.com/skepvox',
    'target': '_blank',
    'aria-label': 'Instagram'
  },
  {
    'icon': 'i-simple-icons-x',
    'to': 'https://x.com/skepvox',
    'target': '_blank',
    'aria-label': 'X'
  },
  {
    'icon': 'i-simple-icons-github',
    'to': 'https://github.com/skepvox',
    'target': '_blank',
    'aria-label': 'GitHub'
  }
]
</script>

<template>
  <UPageHero
    :ui="{
      headline: 'flex items-center justify-center',
      title: 'text-shadow-md max-w-2xl mx-auto text-4xl/tight sm:text-5xl/tight font-semibold',
      description: 'max-w-2xl mx-auto text-lg sm:text-xl text-muted',
      links: 'mt-4 flex-col justify-center items-center'
    }"
  >
    <template #headline>
      <Motion
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)'
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)'
        }"
        :transition="{
          duration: 0.6,
          delay: 0.1
        }"
      >
        <UColorModeAvatar
          class="size-18 ring ring-default ring-offset-3 ring-offset-(--ui-bg)"
          :light="appConfig.global?.picture?.light!"
          :dark="appConfig.global?.picture?.dark!"
          :alt="appConfig.global?.picture?.alt!"
        />
      </Motion>
    </template>

    <template #title>
      <Motion
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)'
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)'
        }"
        :transition="{
          duration: 0.6,
          delay: 0.1
        }"
      >
        {{ props.page.title }}
      </Motion>
    </template>

    <template #description>
      <Motion
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)'
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)'
        }"
        :transition="{
          duration: 0.6,
          delay: 0.3
        }"
      >
        {{ props.page.description }}
      </Motion>
    </template>

    <template #links>
      <div class="flex flex-col items-center gap-4">
        <Motion
          :initial="{
            scale: 1.1,
            opacity: 0,
            filter: 'blur(20px)'
          }"
          :animate="{
            scale: 1,
            opacity: 1,
            filter: 'blur(0px)'
          }"
          :transition="{
            duration: 0.6,
            delay: 0.5
          }"
        >
          <WorkInProgress />
        </Motion>

        <div class="gap-x-4 inline-flex mt-2">
          <Motion
            v-for="(link, index) of socialLinks"
            :key="index"
            :initial="{
              scale: 1.1,
              opacity: 0,
              filter: 'blur(20px)'
            }"
            :animate="{
              scale: 1,
              opacity: 1,
              filter: 'blur(0px)'
            }"
            :transition="{
              duration: 0.6,
              delay: 0.6 + index * 0.1
            }"
          >
            <UButton
              v-bind="{ size: 'md', color: 'neutral', variant: 'ghost', ...link }"
            />
          </Motion>
        </div>
      </div>
    </template>

    <UPageMarquee
      v-if="hero.images?.length"
      pause-on-hover
      class="py-2 -mx-4 sm:-mx-6 lg:-mx-8 [--duration:60s]"
    >
      <Motion
        v-for="(img, index) in hero.images"
        :key="index"
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)'
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)'
        }"
        :transition="{
          duration: 0.6,
          delay: 0.7 + index * 0.1
        }"
      >
        <img
          :width="img.width || 234"
          :height="img.height || 234"
          class="rounded-lg"
          :class="index % 2 === 0 ? '-rotate-2' : 'rotate-2'"
          :src="img.src"
          :alt="img.alt"
        >
      </Motion>
    </UPageMarquee>
  </UPageHero>
</template>
