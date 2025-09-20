<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation', ref([]))
const logo = useTemplateRef('logo')
const route = useRoute()
const { copy } = useClipboard()
const { headerLinks } = useHeaderLinks()

const copyLogoLabel = 'Copiar logo como SVG'
const copiedTitle = 'Logotipo Riobaldo copiado como SVG'
const copiedDescription = 'Você já pode colá-lo no seu projeto'
const homeAriaLabel = 'Voltar para a página inicial'

const mobileNavigation = computed<ContentNavigationItem[]>(() => {
  // Navigation is already filtered by locale from app.vue
  const louisLavelleLink = navigation.value.find(link => link.path?.includes('/louis-lavelle'))
    ?? (() => {
      const headerLink = headerLinks.value.find(link => link.id === 'louis-lavelle')
      if (!headerLink) {
        return undefined
      }
      return {
        title: headerLink.label,
        path: typeof headerLink.to === 'string' ? headerLink.to : undefined,
        icon: headerLink.icon,
        children: headerLink.children?.map(child => ({
          title: child.label,
          path: child.to,
          icon: child.icon
        }))
      } as ContentNavigationItem
    })()
  const docsLink = navigation.value.find(link => link.path?.includes('/docs'))

  // Get Resources and Products from headerLinks
  const resourcesLink = headerLinks.value.find(link => link.id === 'resources')
  const productsLink = headerLinks.value.find(link => link.id === 'products')

  return [
    {
      title: 'Início',
      path: '/',
      icon: 'i-lucide-home'
    } as ContentNavigationItem,
    louisLavelleLink,
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

  return topLevelWithChildren.some(link => link.children?.some(child => typeof child.path === 'string' && currentPath.startsWith(child.path)))
})

const logoContextMenuItems = computed(() => [[{
  label: copyLogoLabel,
  icon: 'i-simple-icons-nuxtdotjs',
  onSelect() {
    if (logo.value) {
      copy(logo.value.$el.outerHTML, {
        title: copiedTitle,
        description: copiedDescription,
        icon: 'i-lucide-circle-check',
        color: 'success'
      })
    }
  }
}]])
</script>

<template>
  <UHeader>
    <template #left>
      <UContextMenu :items="logoContextMenuItems" size="xs">
        <NuxtLink to="/" class="flex gap-2 items-end" :aria-label="homeAriaLabel">
          <RiobaldoLogo ref="logo" class="block w-auto h-6" />
        </NuxtLink>
      </UContextMenu>
    </template>

    <UNavigationMenu :items="headerLinks" variant="link" :ui="{ linkLeadingIcon: 'hidden' }" />

    <template #right>
      <UColorModeButton />
    </template>

    <template #body>
      <UContentNavigation :navigation="mobileNavigation" :default-open="defaultOpen" highlight />
    </template>
  </UHeader>
</template>
