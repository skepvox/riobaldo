<script setup lang="ts">
defineProps<{
  section: any
}>()
</script>

<template>
  <UPageSection
    :title="section.title"
    :ui="{
      container: '!p-0 gap-4 sm:gap-4',
      title: 'text-left text-2xl/tight sm:text-3xl/tight font-semibold',
      description: 'mt-2 text-base sm:text-lg text-muted'
    }"
  >
    <template #description>
      <div class="flex flex-col gap-2">
        <Motion
          v-for="(experience, index) in section.items"
          :key="index"
          :initial="{ opacity: 0, transform: 'translateY(20px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.4 + 0.2 * index }"
          :in-view-options="{ once: true }"
          class="text-muted flex items-center text-nowrap gap-2"
        >
          <p class="text-sm text-muted">
            {{ experience.date }}
          </p>
          <USeparator />
          <ULink
            class="flex items-center gap-1"
            :to="experience.company.url"
            target="_blank"
          >
            <span class="text-sm text-muted">
              {{ experience.position }}
            </span>
            <div
              class="inline-flex items-center gap-1"
              :style="{ color: experience.company.color }"
            >
              <span class="font-medium">{{ experience.company.name }}</span>
              <UIcon v-if="experience.company.icon" :name="experience.company.icon" />
            </div>
          </ULink>
        </Motion>
      </div>
    </template>
  </UPageSection>
</template>
