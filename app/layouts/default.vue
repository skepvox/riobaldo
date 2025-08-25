<script setup lang="ts">
</script>

<template>
  <div>
    <FloatingNavbar />
    <UContainer class="sm:border-x border-default">
      <slot />
      <AppFooter />
    </UContainer>
  </div>
</template>
