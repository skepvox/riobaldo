<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const links: NavigationMenuItem[] = [
  {
    label: 'Home',
    to: '/',
    icon: 'i-lucide-home'
  },
  {
    label: 'Ethos',
    to: '/ethos',
    icon: 'i-lucide-book-open'
  },
  {
    label: 'Blog',
    to: '/blog',
    icon: 'i-lucide-pen-line'
  }
]
</script>

<template>
  <div class="fixed top-3 sm:top-4 mx-auto left-1/2 transform -translate-x-1/2 z-10">
    <UNavigationMenu
      :items="links"
      variant="link"
      color="neutral"
      class="bg-muted/80 backdrop-blur-sm rounded-full px-2 sm:px-4 border border-muted/50 shadow-lg shadow-neutral-950/5"
      :ui="{
        link: 'px-2 py-0',
        linkLeadingIcon: 'hidden'
      }"
    >
      <template #list-trailing>
        <UColorModeButton size="sm" />
      </template>
    </UNavigationMenu>
  </div>
</template>
