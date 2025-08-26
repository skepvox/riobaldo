<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation', ref([]))
const logo = useTemplateRef('logo')
const route = useRoute()
const { copy } = useClipboard()
const { headerLinks } = useHeaderLinks()


const mobileNavigation = computed<ContentNavigationItem[]>(() => {
  // Show Migration and Bridge on mobile only when user is reading them
  const docsLink = navigation.value.find(link => link.path === '/docs')
  if (docsLink && !route.path.startsWith('/docs/bridge') && !route.path.startsWith('/docs/migration')) {
    docsLink.children = docsLink.children?.filter(link => !['/docs/bridge', '/docs/migration'].includes(link.path as string)) || []
  }

  // Get ethos navigation from content
  const ethosLink = navigation.value.find(link => link.path === '/ethos')

  return [
    docsLink,
    ethosLink,
    ...headerLinks.value.slice(1).filter(link => !['Docs', 'Ethos'].includes(link.label)).map(link => ({
      ...link,
      title: link.label,
      path: link.to,
      children: link.children?.map(child => ({
        ...child,
        title: child.label,
        path: child.to
      }))
    } as ContentNavigationItem)),
    {
      title: 'Design Kit',
      icon: 'i-lucide-palette',
      path: '/design-kit'
    }
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
  }],
  [{
    label: 'Browse design kit',
    icon: 'i-lucide-shapes',
    to: '/design-kit'
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
