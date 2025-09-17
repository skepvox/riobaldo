<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation', ref([]))
const logo = useTemplateRef('logo')
const route = useRoute()
const { copy } = useClipboard()
const { headerLinks } = useHeaderLinks()
const { t, locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()

const flagIcons: Record<string, string> = {
  'pt-BR': 'flag:br-4x3',
  'en': 'flag:us-4x3',
  'fr': 'flag:fr-4x3'
}

const hasLocaleSwitcher = computed(() => locales.value.length > 1)

const mobileNavigation = computed<ContentNavigationItem[]>(() => {
  // Navigation is already filtered by locale from app.vue
  const louisLavelleLink = navigation.value.find(link => link.path?.includes('/louis-lavelle'))
  const marcusAureliusLink = navigation.value.find(link => link.path?.includes('/marcus-aurelius'))
  const docsLink = navigation.value.find(link => link.path?.includes('/docs'))

  // Get Resources and Products from headerLinks
  const resourcesLink = headerLinks.value.find(link => link.id === 'resources')
  const productsLink = headerLinks.value.find(link => link.id === 'products')

  return [
    {
      title: t('navigation.home.label'),
      path: localePath('/', locale.value as any),
      icon: 'i-lucide-home'
    } as ContentNavigationItem,
    louisLavelleLink,
    marcusAureliusLink,
    {
      title: t('navigation.blog.label'),
      path: localePath('/blog', locale.value as any),
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
  label: t('header.contextMenu.copyLogo'),
  icon: 'i-simple-icons-nuxtdotjs',
  onSelect() {
    if (logo.value) {
      copy(logo.value.$el.outerHTML, {
        title: t('header.contextMenu.copiedTitle'),
        description: t('header.contextMenu.copiedDescription'),
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
        <NuxtLink to="/" class="flex gap-2 items-end" :aria-label="t('header.aria.backToHome')">
          <RiobaldoLogo ref="logo" class="block w-auto h-6" />
        </NuxtLink>
      </UContextMenu>
    </template>

    <UNavigationMenu :items="headerLinks" variant="link" :ui="{ linkLeadingIcon: 'hidden' }" />

    <template #right>
      <UTooltip :text="t('header.tooltip.search')" :kbds="['meta', 'K']">
        <UContentSearchButton />
      </UTooltip>

      <div v-if="hasLocaleSwitcher" class="flex items-center gap-1">
        <UTooltip
          v-for="loc in locales"
          :key="loc.code"
          :text="loc.name"
        >
          <UButton
            :to="switchLocalePath(loc.code)"
            size="xs"
            color="neutral"
            variant="ghost"
            square
            :aria-label="`Switch to ${loc.name}`"
            class="!p-1"
          >
            <UIcon
              :name="flagIcons[loc.code]"
              :class="[
                'size-5 transition-all',
                locale === loc.code
                  ? 'saturate-100'
                  : 'saturate-0 hover:saturate-100 opacity-75 hover:opacity-100'
              ]"
            />
          </UButton>
        </UTooltip>
      </div>

      <UColorModeButton />
    </template>

    <template #body>
      <UContentNavigation :navigation="mobileNavigation" :default-open="defaultOpen" highlight />
    </template>
  </UHeader>
</template>
