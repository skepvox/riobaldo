<script setup lang="ts">
const title = 'Kit de Design'
const description = 'Recursos de design para o Skepvox estão a caminho.'
const placeholder = 'Estamos preparando recursos de design para o Skepvox. Volte em breve!'

definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title,
  description
})
</script>

<template>
  <UContainer class="py-16">
    <UPage>
      <UPageHeader :title="title" :description="description" />
      <UPageBody>
        <UCard>
          <div class="prose dark:prose-invert">
            <p>
              {{ description }}
            </p>
            <p>
              {{ placeholder }}
            </p>
          </div>
        </UCard>
      </UPageBody>
    </UPage>
  </UContainer>
</template>
