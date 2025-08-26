<script setup lang="ts">
const { footerLinks } = useFooterLinks()
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
        Copyright © 2024-{{ new Date().getFullYear() }} Riobaldo - <NuxtLink class="hover:underline" to="https://github.com/skepvox/riobaldo/blob/main/LICENSE" target="_blank">
          MIT License
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
        <span class="sr-only">Skepvox on Instagram</span>
      </UButton>
      <UButton
        color="neutral"
        variant="ghost"
        to="https://x.com/skepvox"
        target="_blank"
        icon="i-simple-icons-x"
      >
        <span class="sr-only">Skepvox on X</span>
      </UButton>
      <UButton
        color="neutral"
        variant="ghost"
        to="https://bsky.app/profile/skepvox.bsky.social"
        target="_blank"
        icon="i-simple-icons-bluesky"
      >
        <span class="sr-only">Skepvox on BlueSky</span>
      </UButton>
      <UButton
        color="neutral"
        variant="ghost"
        to="https://linkedin.com/in/skepvox"
        target="_blank"
        icon="i-simple-icons-linkedin"
      >
        <span class="sr-only">Skepvox on LinkedIn</span>
      </UButton>
      <UButton
        color="neutral"
        variant="ghost"
        to="https://discord.gg/skepvox"
        target="_blank"
        icon="i-simple-icons-discord"
      >
        <span class="sr-only">Skepvox on Discord</span>
      </UButton>
      <UButton
        color="neutral"
        variant="ghost"
        to="https://github.com/skepvox"
        target="_blank"
        icon="i-simple-icons-github"
      >
        <span class="sr-only">Skepvox on GitHub</span>
      </UButton>
    </template>
  </UFooter>
</template>
