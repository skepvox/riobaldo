<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation', ref([]))
const route = useRoute()

// Build header links directly from navigation
const headerLinks = computed(() => {
  const links = []

  // Home link
  links.push({
    label: 'Home',
    icon: 'i-lucide-home',
    to: '/',
    search: false,
    active: route.path === '/'
  })

  // Add sections from navigation
  navigation.value.forEach((section) => {
    if (!section.title || !section.path) return

    // Build children for dropdown - only include items with actual content pages
    const children = section.children?.flatMap((child) => {
      // If this child has its own children, get the actual content pages from deeper levels
      if (child.children && child.children.length > 0) {
        // Recursively find all leaf nodes (actual content pages)
        const getLeafNodes = (item: any): any[] => {
          if (!item.children || item.children.length === 0) {
            return [item]
          }
          return item.children.flatMap((subChild: any) => getLeafNodes(subChild))
        }
        return getLeafNodes(child)
      }
      // If no children, this is a content page
      return child.path ? [child] : []
    }).map(item => ({
      label: item.title,
      description: item.description,
      icon: item.icon || 'i-lucide-file',
      to: item.path,
      active: route.path === item.path || route.path.startsWith(item.path || '')
    })).filter(Boolean) || []

    links.push({
      label: section.title,
      icon: section.icon || 'i-lucide-folder',
      to: section.path,
      search: false,
      active: route.path.startsWith(section.path || ''),
      ...(children.length > 0 ? { children } : {})
    })
  })

  return links
})

// Mobile navigation - map to ContentNavigationItem format
const mobileNavigation = computed<ContentNavigationItem[]>(() => {
  return navigation.value.map(section => ({
    ...section,
    title: section.title || '',
    path: section.path || '',
    icon: section.icon
  }))
})

const defaultOpen = computed(() => {
  const topLevelWithChildren = mobileNavigation.value.filter(link => link.children?.length)
  const currentPath = route.path

  return topLevelWithChildren.some(link =>
    link.children?.some(child => currentPath.startsWith(child.path as string))
  )
})
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink
        to="/"
        class="flex gap-2 items-center"
        aria-label="Back to home"
      >
        <img
          src="/favicon/favicon.png"
          alt="Riobaldo logo"
          class="w-8 h-8"
        >
        <span class="text-xl font-bold">Riobaldo</span>
      </NuxtLink>
    </template>

    <UNavigationMenu
      :items="headerLinks"
      variant="link"
      :ui="{ linkLeadingIcon: 'hidden' }"
    />

    <template #right>
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
