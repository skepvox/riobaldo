<script setup lang="ts">
const route = useRoute()
const toast = useToast()
const { copy } = useClipboard()
const site = useSiteConfig()

const pageUrl = computed(() => `${site.url}${route.path}`)
const sharePrompt = computed(() => `Leia ${pageUrl.value} para que eu possa lhe fazer perguntas.`)

const items = [
  {
    label: 'WhatsApp',
    icon: 'i-simple-icons-whatsapp',
    target: '_blank',
    to: `https://wa.me/?text=${encodeURIComponent(pageUrl.value)}`
  },
  {
    label: 'ChatGPT',
    icon: 'i-simple-icons:openai',
    target: '_blank',
    to: `https://chatgpt.com/?model=gpt-4o-mini&q=${encodeURIComponent(sharePrompt.value)}`
  },
  {
    label: 'Claude',
    icon: 'i-simple-icons:anthropic',
    target: '_blank',
    to: `https://claude.ai/new?q=${encodeURIComponent(sharePrompt.value)}`
  },
  {
    label: 'Gemini',
    icon: 'i-simple-icons-google',
    target: '_blank',
    to: `https://gemini.google.com/app?q=${encodeURIComponent(sharePrompt.value)}`
  },
  {
    label: 'Link',
    icon: 'i-lucide-link',
    onSelect() {
      copy(pageUrl.value)
      toast.add({
        title: 'Link copiado',
        icon: 'i-lucide-check-circle'
      })
    }
  }
]
</script>

<template>
  <UDropdownMenu
    :items="items"
    :content="{
      align: 'end',
      side: 'bottom',
      sideOffset: 8
    }"
    :ui="{
      content: 'w-48'
    }"
  >
    <UButton
      label="Compartilhar"
      icon="i-lucide-share-2"
      color="primary"
      variant="outline"
    />
  </UDropdownMenu>
</template>
