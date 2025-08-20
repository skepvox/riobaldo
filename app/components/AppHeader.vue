<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const route = useRoute()
const { headerLinks } = useHeaderLinks()

const mobileNavigation = computed<ContentNavigationItem[]>(() => {
  return headerLinks.value.map(link => ({
    title: link.label || '',
    path: link.to as string || '',
    icon: link.icon,
    children: link.children?.map(child => ({
      title: child.label || '',
      path: child.to as string || '',
      icon: child.icon,
      description: child.description
    })) as ContentNavigationItem[]
  }))
})

const defaultOpen = computed(() => {
  const topLevelWithChildren = mobileNavigation.value.filter((link: any) => link.children?.length)
  const currentPath = route.path

  return topLevelWithChildren.some((link: any) => link.children?.some((child: any) => currentPath.startsWith(child.path as string)))
})
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink
        to="/"
        class="flex gap-2 items-end"
        aria-label="Back to home"
      >
        <span class="text-lg font-bold">Riobaldo</span>
      </NuxtLink>
    </template>

    <UNavigationMenu
      :items="headerLinks"
      variant="link"
      :ui="{ linkLeadingIcon: 'hidden' }"
    />

    <template #right>
      <UTooltip
        text="Search"
        :kbds="['meta', 'K']"
      >
        <UContentSearchButton />
      </UTooltip>

      <UColorModeButton />
    </template>

    <template #body>
      <UContentNavigation
        :navigation="mobileNavigation"
        :default-open="defaultOpen"
        highlight
      />
    </template>
  </UHeader>
</template>
