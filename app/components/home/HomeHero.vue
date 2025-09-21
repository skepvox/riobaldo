<script setup lang="ts">
const props = defineProps<{
  page: any
}>()

const hero = computed(() => props.page.hero)
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
