<script setup lang="ts">
import type { NuxtError } from '#app'

useSeoMeta({
  title: 'Page not found',
  description: 'We are sorry but this page could not be found.'
})

defineProps<{ error: NuxtError }>()

const { data: navigation } = await useAsyncData('navigation-error', () => {
  return Promise.all([
    queryCollectionNavigation('blog'),
    queryCollectionNavigation('louisLavelle')
  ]).then(data => data.flat())
})

provide('navigation', computed(() => navigation.value ?? []))
</script>

<template>
  <UApp>
    <AppHeader />

    <UError :error="error" />

    <AppFooter />
  </UApp>
</template>
