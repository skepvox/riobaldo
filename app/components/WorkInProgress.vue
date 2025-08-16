<script setup lang="ts">
const route = useRoute()
const { global } = useAppConfig()

</script>

<template #links>
    <Motion
    :initial="{
        scale: 1.1,
        opacity: 0,
        filter: 'blur(20px)'
    }"
    :animate="{
        scale: 1,
        opacity: 1,
        filter: 'blur(0px)'
    }"
    :transition="{
        duration: 0.6,
        delay: 0.5
    }"
    >
    <div
        class="flex items-center gap-2"
    >
        <!-- <UButton v-bind="page.hero.links[0]" /> -->
        <UButton
        :color="global.available ? 'success' : 'error'"
        variant="ghost"
        class="gap-2"
        :to=$route.path
        :label="'Work in Progress ...'"
        >
        <template #leading>
            <span class="relative flex size-2">
            <span
                class="absolute inline-flex size-full rounded-full opacity-75"
                :class="global.available ? 'bg-success animate-ping' : 'bg-error'"
            />
            <span
                class="relative inline-flex size-2 scale-90 rounded-full 'bg-success'"
                :class="global.available ? 'bg-success' : 'bg-error'"
            />
            </span>
        </template>
        </UButton>
    </div>
    </Motion>
</template>
