<script setup lang="ts">
import { computed } from 'vue'

const route = useRoute()
const appConfig = useAppConfig()

const available = computed(() => appConfig.global?.available ?? true)
</script>

<template>
  <div class="flex items-center gap-2">
    <UButton
      :color="available ? 'success' : 'error'"
      variant="ghost"
      class="gap-2"
      :to="route.path"
      label="Work in Progress ..."
    >
      <template #leading>
        <span class="relative flex size-2">
          <span
            class="absolute inline-flex size-full rounded-full opacity-75"
            :class="available ? 'bg-success animate-ping' : 'bg-error'"
          />
          <span
            class="relative inline-flex size-2 scale-90 rounded-full"
            :class="available ? 'bg-success' : 'bg-error'"
          />
        </span>
      </template>
    </UButton>
  </div>
</template>
