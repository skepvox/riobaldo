<template>
  <div class="skepvox-logo-container">
    <img
      src="/favicon/favicon.png"
      alt="Skepvox"
      class="skepvox-logo-image"
    >
    <span class="skepvox-logo-text">Skepvox</span>
  </div>
</template>

<script setup lang="ts">
// SkepvoxLogo component - displays the Skepvox platform logo with text
</script>

<style scoped>
.skepvox-logo-container {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem; /* 12px spacing between logo and text */
}

.skepvox-logo-image {
  display: inline-block;
  width: auto;
  height: 2.5rem; /* 40px - larger size for better visibility */
  object-fit: contain;
}

.skepvox-logo-text {
  font-size: 1.5rem; /* 24px */
  font-weight: 700;
  letter-spacing: -0.025em;
  color: var(--ui-text-highlighted);
}
</style>
