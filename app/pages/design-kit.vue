<script setup lang="ts">
const { t } = useI18n()

const title = computed(() => t('navigation.designKit.title', 'Design Kit'))
const description = computed(() => t('navigation.designKit.description', 'Design resources coming soon.'))

definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: () => title.value,
  description: () => description.value
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
              {{ t('navigation.designKit.placeholder', 'We are preparing design resources for Riobaldo. Check back soon!') }}
            </p>
          </div>
        </UCard>
      </UPageBody>
    </UPage>
  </UContainer>
</template>
