<script setup lang="ts">
const logo = useTemplateRef('logo')
const { copy } = useClipboard()
const { headerLinks } = useHeaderLinks()
const route = useRoute()
const menuOpen = useState<boolean>('app-header-menu-open', () => false)
const {
  hasNavigation: hasAuthorNavigation,
  editionItems,
  languageItems,
  editionModel,
  languageModel,
  displayNavigation
} = useAuthorNavigation()

const copyLogoLabel = 'Copiar logo como SVG'
const copiedTitle = 'Logotipo Riobaldo copiado como SVG'
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

const mobileLinks = computed(() => headerLinks.value.map((link) => {
  const to = typeof link.to === 'string' ? link.to : undefined

  return {
    ...link,
    defaultOpen: Boolean(link.children?.length && to && route.path.startsWith(to))
  }
}))

const headerMenu = { shouldScaleBackground: true }
</script>

<template>
  <UHeader v-model:open="menuOpen" :ui="{ left: 'min-w-0' }" :menu="headerMenu">
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
        default-open
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
