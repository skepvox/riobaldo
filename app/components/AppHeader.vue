<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const logo = useTemplateRef('logo')
const { copy } = useClipboard()
const { headerLinks } = useHeaderLinks()

const copyLogoLabel = 'Copiar logo como SVG'
const copiedTitle = 'Logotipo Riobaldo copiado como SVG'
const copiedDescription = 'Você já pode colá-lo no seu projeto'
const homeAriaLabel = 'Voltar para a página inicial'

const authorMobileItems = computed<ContentNavigationItem[]>(() => {
  return headerLinks.value
    .filter(link => link.id === 'louis-lavelle')
    .map(link => ({
      title: link.label,
      path: typeof link.to === 'string' ? link.to : undefined,
      icon: link.icon,
      children: [] as ContentNavigationItem[]
    }))
    .filter(item => Boolean(item.path))
    .map(item => ({ ...item } as ContentNavigationItem))
})

const mobileNavigation = computed<ContentNavigationItem[]>(() => {
  const items: ContentNavigationItem[] = [
    {
      title: 'Início',
      path: '/',
      icon: 'i-lucide-home'
    }
  ]

  items.push(...authorMobileItems.value)

  items.push({
    title: 'Blog',
    path: '/blog',
    icon: 'i-lucide-newspaper'
  } as ContentNavigationItem)

  return items
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
      <UColorModeSwitch />
    </template>

    <template #body>
      <UContentNavigation :navigation="mobileNavigation" highlight />
    </template>
  </UHeader>
</template>
