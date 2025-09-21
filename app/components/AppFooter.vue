<script setup lang="ts">
const siteName = 'Riobaldo'
const currentYear = new Date().getFullYear()
const copyrightLabel = `Copyright © ${currentYear} ${siteName}`
const socialLabels = {
  instagram: 'Skepvox no Instagram',
  x: 'Skepvox no X',
  bluesky: 'Skepvox no BlueSky',
  linkedin: 'Skepvox no LinkedIn',
  github: 'Skepvox no GitHub'
}
</script>

<template>
  <USeparator icon="i-lucide-infinity" class="h-px" />

  <UFooter>
    <template #left>
      <p class="text-muted text-sm">
        {{ copyrightLabel }}
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
        to="https://github.com/skepvox"
        target="_blank"
        icon="i-simple-icons-github"
      >
        <span class="sr-only">{{ socialLabels.github }}</span>
      </UButton>
    </template>
  </UFooter>
</template>
