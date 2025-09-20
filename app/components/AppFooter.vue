<script setup lang="ts">
const { footerLinks } = useFooterLinks()

const siteName = 'Riobaldo'
const currentYear = new Date().getFullYear()
const copyrightLabel = `Direitos autorais © 2024-${currentYear} ${siteName}`
const licenseLabel = 'Licença MIT'
const socialLabels = {
  instagram: 'Skepvox no Instagram',
  x: 'Skepvox no X',
  bluesky: 'Skepvox no BlueSky',
  linkedin: 'Skepvox no LinkedIn',
  discord: 'Skepvox no Discord',
  github: 'Skepvox no GitHub'
}
</script>

<template>
  <USeparator icon="i-lucide-infinity" class="h-px" />

  <UFooter :ui="{ top: 'border-b border-default' }">
    <template #top>
      <UContainer>
        <UFooterColumns :columns="footerLinks">
          <template #right>
            <NewsletterForm />
          </template>
        </UFooterColumns>
      </UContainer>
    </template>

    <template #left>
      <p class="text-muted text-sm">
        {{ copyrightLabel }} - <NuxtLink class="hover:underline" to="https://github.com/skepvox/riobaldo/blob/main/LICENSE" target="_blank">
          {{ licenseLabel }}
        </NuxtLink>
      </p>
    </template>

    <template #right>
      <UButton
        color="neutral"
        variant="ghost"
        to="https://instagram.com/skepvox"
        target="_blank"
        icon="i-simple-icons-instagram"
      >
        <span class="sr-only">{{ socialLabels.instagram }}</span>
      </UButton>
      <UButton
        color="neutral"
        variant="ghost"
        to="https://x.com/skepvox"
        target="_blank"
        icon="i-simple-icons-x"
      >
        <span class="sr-only">{{ socialLabels.x }}</span>
      </UButton>
      <UButton
        color="neutral"
        variant="ghost"
        to="https://bsky.app/profile/skepvox.bsky.social"
        target="_blank"
        icon="i-simple-icons-bluesky"
      >
        <span class="sr-only">{{ socialLabels.bluesky }}</span>
      </UButton>
      <UButton
        color="neutral"
        variant="ghost"
        to="https://linkedin.com/in/skepvox"
        target="_blank"
        icon="i-simple-icons-linkedin"
      >
        <span class="sr-only">{{ socialLabels.linkedin }}</span>
      </UButton>
      <UButton
        color="neutral"
        variant="ghost"
        to="https://discord.gg/skepvox"
        target="_blank"
        icon="i-simple-icons-discord"
      >
        <span class="sr-only">{{ socialLabels.discord }}</span>
      </UButton>
      <UButton
        color="neutral"
        variant="ghost"
        to="https://github.com/skepvox"
        target="_blank"
        icon="i-simple-icons-github"
      >
        <span class="sr-only">{{ socialLabels.github }}</span>
      </UButton>
    </template>
  </UFooter>
</template>
