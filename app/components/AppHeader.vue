<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation', ref([]))
const logo = useTemplateRef('logo')
const route = useRoute()
const { copy } = useClipboard()
const { headerLinks } = useHeaderLinks()

const mobileNavigation = computed<ContentNavigationItem[]>(() => {
  const louisLavelleLink = navigation.value.find(link => link.path === '/louis-lavelle')
  const marcusAureliusLink = navigation.value.find(link => link.path === '/marcus-aurelius')
  const docsLink = navigation.value.find(link => link.path === '/docs')

  // Get Resources and Products from headerLinks
  const resourcesLink = headerLinks.value.find(link => link.label === 'Resources')
  const productsLink = headerLinks.value.find(link => link.label === 'Products')

  return [
    {
      title: 'Home',
      path: '/',
      icon: 'i-lucide-home'
    } as ContentNavigationItem,
    louisLavelleLink,
    marcusAureliusLink,
    {
      title: 'Blog',
      path: '/blog',
      icon: 'i-lucide-newspaper'
    } as ContentNavigationItem,
    docsLink,
    resourcesLink && {
      ...resourcesLink,
      title: resourcesLink.label,
      path: resourcesLink.to,
      children: resourcesLink.children?.map((child: any) => ({
        ...child,
        title: child.label,
        path: child.to
      }))
    } as ContentNavigationItem,
    productsLink && {
      ...productsLink,
      title: productsLink.label,
      path: productsLink.to,
      children: productsLink.children?.map((child: any) => ({
        ...child,
        title: child.label,
        path: child.to
      }))
    } as ContentNavigationItem
  ].filter((item): item is ContentNavigationItem => Boolean(item))
})

const defaultOpen = computed(() => {
  const topLevelWithChildren = mobileNavigation.value.filter(link => link.children?.length)
  const currentPath = route.path

  return topLevelWithChildren.some(link => link.children?.some(child => currentPath.startsWith(child.path as string)))
})

const logoContextMenuItems = [
  [{
    label: 'Copy logo as SVG',
    icon: 'i-simple-icons-nuxtdotjs',
    onSelect() {
      if (logo.value) {
        copy(logo.value.$el.outerHTML, {
          title: 'Riobaldo logo copied as SVG',
          description: 'You can now paste it into your project',
          icon: 'i-lucide-circle-check',
          color: 'success'
        })
      }
    }
  }]
]
</script>

<template>
  <UHeader>
    <template #left>
      <UContextMenu :items="logoContextMenuItems" size="xs">
        <NuxtLink to="/" class="flex gap-2 items-end" aria-label="Back to home">
          <RiobaldoLogo ref="logo" class="block w-auto h-6" />
        </NuxtLink>
      </UContextMenu>
    </template>

    <UNavigationMenu :items="headerLinks" variant="link" :ui="{ linkLeadingIcon: 'hidden' }" />

    <template #right>
      <UTooltip text="Search" :kbds="['meta', 'K']">
        <UContentSearchButton />
      </UTooltip>

      <UColorModeButton />
    </template>

    <template #body>
      <UContentNavigation :navigation="mobileNavigation" :default-open="defaultOpen" highlight />
    </template>
  </UHeader>
</template>
