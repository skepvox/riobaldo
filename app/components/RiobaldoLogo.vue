<template>
  <div class="riobaldo-logo-container">
    <img 
      src="/favicon/favicon.png" 
      alt="Riobaldo" 
      class="riobaldo-logo-image"
    />
    <span class="riobaldo-logo-text">Riobaldo</span>
  </div>
</template>

<script setup lang="ts">
// RiobaldoLogo component - displays the Riobaldo platform logo with text
</script>

<style scoped>
.riobaldo-logo-container {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem; /* 12px spacing between logo and text */
}

.riobaldo-logo-image {
  display: inline-block;
  width: auto;
  height: 2.5rem; /* 40px - larger size for better visibility */
  object-fit: contain;
}

.riobaldo-logo-text {
  font-size: 1.5rem; /* 24px */
  font-weight: 700;
  letter-spacing: -0.025em;
  color: var(--ui-text-highlighted);
}
</style>