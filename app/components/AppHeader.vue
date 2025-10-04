<script setup lang="ts">
import type { ComponentPublicInstance } from 'vue'

const logo = useTemplateRef('logo')
const headerRoot = useTemplateRef<ComponentPublicInstance | HTMLElement | null>('header')
const headerElement = computed<HTMLElement | null>(() => {
  const target = headerRoot.value
  if (!target) {
    return null
  }
  if (target instanceof HTMLElement) {
    return target
  }
  if ('$el' in target && target.$el instanceof HTMLElement) {
    return target.$el
  }
  return null
})
const { copy } = useClipboard()
const { headerLinks } = useHeaderLinks()
const route = useRoute()
const menuOpen = useState<boolean>('app-header-menu-open', () => false)
const appHeaderHeight = useState<number>('app-header-height', () => 0)
const { height: headerHeight } = useElementSize(headerElement)

watchEffect(() => {
  appHeaderHeight.value = headerHeight.value || 0
})
const {
  hasNavigation: hasAuthorNavigation,
  editionItems,
  languageItems,
  editionModel,
  languageModel,
  displayNavigation
} = useAuthorNavigation()

const copyLogoLabel = 'Copiar logo como SVG'
const copiedTitle = 'Logotipo Skepvox copiado como SVG'
const copiedDescription = 'Você já pode colá-lo no seu projeto'
const homeAriaLabel = 'Voltar para a página inicial'

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

const closeMenu = () => {
  if (!menuOpen.value) {
    return
  }

  menuOpen.value = false
}

const closeMenuAfterNavigation = () => {
  if (!menuOpen.value) {
    return
  }

  if (!import.meta.client) {
    closeMenu()
    return
  }

  requestAnimationFrame(() => {
    window.setTimeout(() => {
      closeMenu()
    }, 150)
  })
}

const enhanceLink = (link: Record<string, any>) => {
  const hasChildren = Array.isArray(link.children) && link.children.length > 0
  const to = typeof link.to === 'string' ? link.to : undefined

  const enhanced: Record<string, any> = {
    ...link,
    defaultOpen: Boolean(hasChildren && to && route.path.startsWith(to))
  }

  if (hasChildren) {
    enhanced.children = link.children.map((child: Record<string, any>) => ({
      ...child,
      onSelect: () => {
        if (typeof child.onSelect === 'function') {
          child.onSelect()
        }
        closeMenuAfterNavigation()
      }
    }))
  } else {
    enhanced.onSelect = () => {
      if (typeof link.onSelect === 'function') {
        link.onSelect()
      }
      closeMenuAfterNavigation()
    }
  }

  return enhanced
}

const mobileLinks = computed(() => headerLinks.value.map(link => enhanceLink(link as Record<string, any>)))

const headerMenu = { shouldScaleBackground: true }
</script>

<template>
  <UHeader ref="header" v-model:open="menuOpen" :ui="{ left: 'min-w-0' }" :menu="headerMenu">
    <template #left>
      <UContextMenu :items="logoContextMenuItems" size="xs">
        <NuxtLink to="/" class="flex gap-2 items-end" :aria-label="homeAriaLabel">
          <SkepvoxLogo ref="logo" class="block w-auto h-6" />
        </NuxtLink>
      </UContextMenu>
    </template>

    <UNavigationMenu :items="headerLinks" variant="link" :ui="{ linkLeadingIcon: 'hidden' }" />

    <template #right>
      <UColorModeSwitch />
    </template>

    <template #body>
      <UNavigationMenu orientation="vertical" :items="mobileLinks" class="-mx-2.5" :default-value="route.path" />

      <USeparator type="dashed" class="mt-4 mb-6" />

      <div v-if="hasAuthorNavigation" class="flex flex-col gap-2 w-[calc(100%+1.25rem)] mb-5.5 -mx-2.5">
        <UTabs
          v-if="editionItems.length"
          v-model="editionModel"
          :items="editionItems"
          :content="false"
          color="neutral"
          size="xs"
          :ui="{
            indicator: 'bg-default',
            trigger: 'px-1 data-[state=active]:text-highlighted w-full'
          }"
        />

        <UTabs
          v-if="languageItems.length"
          v-model="languageModel"
          :items="languageItems"
          :content="false"
          color="neutral"
          size="xs"
          :ui="{
            indicator: 'bg-default',
            trigger: 'px-1 data-[state=active]:text-highlighted w-full'
          }"
        />
      </div>

      <UContentNavigation
        v-if="hasAuthorNavigation"
        :navigation="displayNavigation"
        highlight
        :ui="{ linkTrailingBadge: 'font-semibold uppercase' }"
      >
        <template #link-title="{ link }">
          <span class="inline-flex items-center gap-0.5">
            {{ link.title }}
          </span>
        </template>
      </UContentNavigation>
    </template>
  </UHeader>
</template>
