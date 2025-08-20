<script setup lang="ts">
</script>

<template>
  <div>
    <AppHeader />
    <UContainer class="sm:border-x border-default">
      <slot />
      <AppFooter />
    </UContainer>
  </div>
</template>
