<script setup lang="ts">
defineProps<{
  section: any
}>()
</script>

<template>
  <UPageSection
    :title="section.title"
    :description="section.description"
    :ui="{
      container: '!p-0',
      title: 'text-left text-2xl/tight sm:text-3xl/tight font-semibold',
      description: 'text-left mt-3 text-base sm:text-lg text-muted'
    }"
  />
</template>
