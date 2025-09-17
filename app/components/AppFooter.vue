<script setup lang="ts">
const { footerLinks } = useFooterLinks()
const { t } = useI18n()

const siteName = computed(() => t('app.siteName'))
const currentYear = computed(() => new Date().getFullYear())
const copyrightLabel = computed(() => t('footer.copyright', {
  start: 2024,
  year: currentYear.value,
  site: siteName.value
}))
const licenseLabel = computed(() => t('footer.license'))
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
        <span class="sr-only">{{ t('footer.social.instagram') }}</span>
      </UButton>
      <UButton
        color="neutral"
        variant="ghost"
        to="https://x.com/skepvox"
        target="_blank"
        icon="i-simple-icons-x"
      >
        <span class="sr-only">{{ t('footer.social.x') }}</span>
      </UButton>
      <UButton
        color="neutral"
        variant="ghost"
        to="https://bsky.app/profile/skepvox.bsky.social"
        target="_blank"
        icon="i-simple-icons-bluesky"
      >
        <span class="sr-only">{{ t('footer.social.bluesky') }}</span>
      </UButton>
      <UButton
        color="neutral"
        variant="ghost"
        to="https://linkedin.com/in/skepvox"
        target="_blank"
        icon="i-simple-icons-linkedin"
      >
        <span class="sr-only">{{ t('footer.social.linkedin') }}</span>
      </UButton>
      <UButton
        color="neutral"
        variant="ghost"
        to="https://discord.gg/skepvox"
        target="_blank"
        icon="i-simple-icons-discord"
      >
        <span class="sr-only">{{ t('footer.social.discord') }}</span>
      </UButton>
      <UButton
        color="neutral"
        variant="ghost"
        to="https://github.com/skepvox"
        target="_blank"
        icon="i-simple-icons-github"
      >
        <span class="sr-only">{{ t('footer.social.github') }}</span>
      </UButton>
    </template>
  </UFooter>
</template>
