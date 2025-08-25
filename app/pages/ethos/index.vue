<script setup lang="ts">

useSeoMeta({
  title: 'Ethos - Filosofia',
  description: 'Reflexões filosóficas e pensamento crítico',
  ogTitle: 'Ethos - Filosofia',
  ogDescription: 'Reflexões filosóficas e pensamento crítico'
})
</script>

<template>
  <UPage>
    <UPageHero
      title="Ethos"
      description="Filosofia: reflexões, ideias e pensamento crítico"
      :ui="{
        title: '!mx-0 text-left',
        description: '!mx-0 text-left'
      }"
    />
    
    <UPageSection>
      <div class="prose prose-lg dark:prose-invert max-w-none">
        <p>Explore os conteúdos filosóficos disponíveis.</p>
      </div>
    </UPageSection>
  </UPage>
</template>