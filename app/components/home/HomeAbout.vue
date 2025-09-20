<script setup lang="ts">
import { computed } from 'vue'
import type { HomeSection } from '~/types/home'

const props = defineProps<{
  section: HomeSection
}>()

const section = computed(() => props.section)
</script>

<template>
  <UPageSection
    :title="section.title"
    :description="section.description"
    :ui="{
      container: 'px-4 sm:px-6 lg:px-8',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'text-left mt-3 text-sm sm:text-md lg:text-sm text-muted'
    }"
  />
</template>
