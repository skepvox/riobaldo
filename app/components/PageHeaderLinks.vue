<script setup lang="ts">
const route = useRoute()
const toast = useToast()
const { copy } = useClipboard()
const site = useSiteConfig()

const mdPath = computed(() => `${site.url}/raw${route.path}.md`)

const items = [
  {
    label: 'WhatsApp',
    icon: 'i-simple-icons-whatsapp',
    target: '_blank',
    to: `https://wa.me/?text=${encodeURIComponent(`${site.url}${route.path}`)}`
  },
  {
    label: 'ChatGPT',
    icon: 'i-simple-icons:openai',
    target: '_blank',
    to: `https://chatgpt.com/?hints=search&q=${encodeURIComponent(`Leia ${mdPath.value} para que eu possa lhe fazer perguntas.`)}`
  },
  {
    label: 'Claude',
    icon: 'i-simple-icons:anthropic',
    target: '_blank',
    to: `https://claude.ai/new?q=${encodeURIComponent(`Leia ${mdPath.value} para que eu possa lhe fazer perguntas.`)}`
  },
  {
    label: 'Gemini',
    icon: 'i-simple-icons-google',
    target: '_blank',
    to: `https://gemini.google.com/app?q=${encodeURIComponent(`Leia ${mdPath.value} para que eu possa lhe fazer perguntas.`)}`
  },
  {
    label: 'Link',
    icon: 'i-lucide-link',
    onSelect() {
      copy(`${site.url}${route.path}`)
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
