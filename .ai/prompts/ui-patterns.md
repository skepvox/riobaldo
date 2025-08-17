# UI/UX Patterns Prompt

When implementing UI/UX patterns for Riobaldo, follow these design principles and patterns:

## Design System Foundation

### Color Palette
```typescript
// Semantic colors for education context
const colors = {
  primary: {
    DEFAULT: '#4F46E5', // Indigo - trust, knowledge
    50: '#EEF2FF',
    // ... full scale
  },
  success: {
    DEFAULT: '#10B981', // Green - correct answers
  },
  warning: {
    DEFAULT: '#F59E0B', // Amber - hints, warnings
  },
  error: {
    DEFAULT: '#EF4444', // Red - incorrect answers
  },
  math: {
    DEFAULT: '#3B82F6', // Blue - logic, precision
  },
  philosophy: {
    DEFAULT: '#8B5CF6', // Purple - creativity, thought
  }
}
```

### Typography Scale
```css
/* Educational content hierarchy */
.text-question { @apply text-xl font-medium; }
.text-answer { @apply text-lg; }
.text-explanation { @apply text-base text-gray-600 dark:text-gray-400; }
.text-hint { @apply text-sm italic text-amber-600; }
.text-formula { @apply font-mono text-base; }
```

## Common UI Patterns

### 1. Question Card Pattern
```vue
<template>
  <UCard class="hover:shadow-lg transition-shadow">
    <!-- Question Header -->
    <template #header>
      <div class="flex items-center justify-between">
        <UBadge :color="difficultyColor">
          {{ difficulty }}
        </UBadge>
        <span class="text-sm text-gray-500">
          {{ timeEstimate }} min
        </span>
      </div>
    </template>
    
    <!-- Question Content -->
    <div class="space-y-4">
      <h3 class="text-question">{{ question }}</h3>
      
      <!-- Interactive Area -->
      <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <slot name="interactive" />
      </div>
      
      <!-- Hint System -->
      <UCollapse v-model="showHint">
        <template #trigger>
          <UButton variant="ghost" size="sm">
            <UIcon name="i-heroicons-light-bulb" />
            Need a hint?
          </UButton>
        </template>
        <UAlert color="amber" variant="soft">
          {{ hint }}
        </UAlert>
      </UCollapse>
    </div>
    
    <!-- Actions -->
    <template #footer>
      <div class="flex justify-between">
        <UButton variant="ghost" @click="skip">
          Skip
        </UButton>
        <UButton color="primary" @click="submit">
          Submit Answer
        </UButton>
      </div>
    </template>
  </UCard>
</template>
```

### 2. Progress Tracking Pattern
```vue
<template>
  <div class="space-y-2">
    <!-- Linear Progress -->
    <div class="flex items-center gap-4">
      <span class="text-sm font-medium">Progress</span>
      <UProgress :value="progress" :max="100" />
      <span class="text-sm text-gray-500">{{ progress }}%</span>
    </div>
    
    <!-- Step Indicator -->
    <div class="flex items-center gap-2">
      <div
        v-for="step in totalSteps"
        :key="step"
        class="w-2 h-2 rounded-full transition-all"
        :class="{
          'bg-primary-500 w-8': step === currentStep,
          'bg-primary-500': step < currentStep,
          'bg-gray-300': step > currentStep
        }"
      />
    </div>
    
    <!-- Stats Grid -->
    <div class="grid grid-cols-3 gap-4 mt-4">
      <UCard class="text-center">
        <div class="text-2xl font-bold text-green-600">{{ correct }}</div>
        <div class="text-xs text-gray-500">Correct</div>
      </UCard>
      <UCard class="text-center">
        <div class="text-2xl font-bold text-red-600">{{ incorrect }}</div>
        <div class="text-xs text-gray-500">Incorrect</div>
      </UCard>
      <UCard class="text-center">
        <div class="text-2xl font-bold text-blue-600">{{ streak }}</div>
        <div class="text-xs text-gray-500">Streak</div>
      </UCard>
    </div>
  </div>
</template>
```

### 3. Feedback Pattern
```vue
<template>
  <!-- Success Feedback -->
  <Transition
    enter-active-class="transform ease-out duration-300 transition"
    enter-from-class="translate-y-2 opacity-0"
    enter-to-class="translate-y-0 opacity-100"
  >
    <UAlert
      v-if="showFeedback"
      :color="isCorrect ? 'success' : 'error'"
      :icon="isCorrect ? 'i-heroicons-check-circle' : 'i-heroicons-x-circle'"
    >
      <template #title>
        {{ isCorrect ? 'Excellent!' : 'Not quite right' }}
      </template>
      <template #description>
        <div class="space-y-2">
          <p>{{ feedbackMessage }}</p>
          <UButton
            v-if="!isCorrect"
            size="sm"
            variant="soft"
            @click="showExplanation = true"
          >
            View Explanation
          </UButton>
        </div>
      </template>
    </UAlert>
  </Transition>
  
  <!-- Detailed Explanation Modal -->
  <UModal v-model="showExplanation">
    <UCard>
      <template #header>
        <h3 class="font-semibold">Understanding the Solution</h3>
      </template>
      
      <div class="space-y-4">
        <!-- Step-by-step explanation -->
        <div
          v-for="(step, index) in explanationSteps"
          :key="index"
          class="flex gap-3"
        >
          <div class="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-xs">
            {{ index + 1 }}
          </div>
          <div class="flex-1">
            <p class="text-sm">{{ step }}</p>
          </div>
        </div>
      </div>
    </UCard>
  </UModal>
</template>
```

### 4. Timer Pattern
```vue
<template>
  <div class="flex items-center gap-2">
    <UIcon
      name="i-heroicons-clock"
      :class="isUrgent ? 'text-red-500 animate-pulse' : 'text-gray-500'"
    />
    <span
      class="font-mono text-lg"
      :class="{
        'text-red-500': timeRemaining < 60,
        'text-amber-500': timeRemaining < 180,
        'text-gray-700 dark:text-gray-300': timeRemaining >= 180
      }"
    >
      {{ formattedTime }}
    </span>
    <UButton
      v-if="isPaused"
      size="xs"
      variant="ghost"
      @click="resume"
    >
      Resume
    </UButton>
  </div>
</template>
```

### 5. Interactive Math Input
```vue
<template>
  <div class="space-y-4">
    <!-- Formula Display -->
    <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg font-mono text-lg text-center">
      <katex-element :expression="formula" />
    </div>
    
    <!-- Calculator Pad -->
    <div class="grid grid-cols-4 gap-2">
      <UButton
        v-for="button in calculatorButtons"
        :key="button.value"
        :variant="button.type === 'operator' ? 'soft' : 'outline'"
        @click="handleInput(button.value)"
      >
        {{ button.label }}
      </UButton>
    </div>
    
    <!-- Common Formulas -->
    <USelectMenu
      v-model="selectedFormula"
      :options="commonFormulas"
      placeholder="Insert common formula..."
    />
  </div>
</template>
```

### 6. Philosophy Argument Builder
```vue
<template>
  <div class="space-y-4">
    <!-- Premise Builder -->
    <div class="space-y-2">
      <label class="text-sm font-medium">Premises</label>
      <TransitionGroup
        enter-active-class="transform ease-out duration-200"
        enter-from-class="opacity-0 translate-y-1"
      >
        <div
          v-for="(premise, index) in premises"
          :key="premise.id"
          class="flex gap-2"
        >
          <span class="text-sm text-gray-500">{{ index + 1 }}.</span>
          <UInput
            v-model="premise.text"
            placeholder="Enter premise..."
            class="flex-1"
          />
          <UButton
            size="sm"
            color="red"
            variant="ghost"
            @click="removePremise(index)"
          >
            <UIcon name="i-heroicons-trash" />
          </UButton>
        </div>
      </TransitionGroup>
      <UButton
        size="sm"
        variant="soft"
        @click="addPremise"
      >
        <UIcon name="i-heroicons-plus" />
        Add Premise
      </UButton>
    </div>
    
    <!-- Conclusion -->
    <div>
      <label class="text-sm font-medium">Conclusion</label>
      <UTextarea
        v-model="conclusion"
        placeholder="Therefore..."
        :rows="2"
      />
    </div>
    
    <!-- Validity Check -->
    <UAlert
      v-if="validityCheck"
      :color="isValid ? 'success' : 'warning'"
    >
      <template #title>
        {{ isValid ? 'Valid Argument' : 'Check Your Logic' }}
      </template>
      {{ validityMessage }}
    </UAlert>
  </div>
</template>
```

## Animation Patterns

### Micro-interactions
```css
/* Button hover states */
.interactive-element {
  @apply transition-all duration-200 ease-out;
  @apply hover:scale-105 hover:shadow-md;
  @apply active:scale-95;
}

/* Success animation */
@keyframes success-bounce {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.success-animation {
  animation: success-bounce 0.5s ease-out;
}

/* Loading skeleton */
.skeleton {
  @apply animate-pulse bg-gray-200 dark:bg-gray-700 rounded;
}
```

### Page Transitions
```vue
<template>
  <Transition
    name="page"
    mode="out-in"
  >
    <div :key="currentPage">
      <!-- Page content -->
    </div>
  </Transition>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.page-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
```

## Responsive Patterns

### Mobile-First Design
```vue
<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Mobile: Stack -->
    <!-- Tablet: 2 columns -->
    <!-- Desktop: 3 columns -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <!-- Content -->
    </div>
    
    <!-- Mobile: Bottom sheet -->
    <!-- Desktop: Sidebar -->
    <USlideover
      v-model="showPanel"
      :side="isMobile ? 'bottom' : 'right'"
    >
      <!-- Panel content -->
    </USlideover>
  </div>
</template>
```

## Accessibility Patterns

### Focus Management
```vue
<script setup>
// Trap focus in modal
const trapFocus = (e: KeyboardEvent) => {
  if (e.key === 'Tab') {
    const focusables = modalRef.value?.querySelectorAll(
      'button, input, select, textarea, a[href]'
    )
    const first = focusables?.[0]
    const last = focusables?.[focusables.length - 1]
    
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault()
      last?.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first?.focus()
    }
  }
}
</script>
```

### Screen Reader Announcements
```vue
<template>
  <!-- Live region for dynamic updates -->
  <div
    aria-live="polite"
    aria-atomic="true"
    class="sr-only"
  >
    {{ announcement }}
  </div>
</template>
```

## Loading States

### Skeleton Screens
```vue
<template>
  <div v-if="loading" class="space-y-4">
    <div class="skeleton h-8 w-3/4" />
    <div class="skeleton h-32 w-full" />
    <div class="flex gap-2">
      <div class="skeleton h-10 w-24" />
      <div class="skeleton h-10 w-24" />
    </div>
  </div>
  <div v-else>
    <!-- Actual content -->
  </div>
</template>
```

## Error States

### User-Friendly Error Messages
```vue
<template>
  <UCard v-if="error" class="border-red-200 dark:border-red-800">
    <div class="text-center space-y-4">
      <UIcon
        name="i-heroicons-exclamation-triangle"
        class="w-12 h-12 text-red-500 mx-auto"
      />
      <h3 class="text-lg font-semibold">
        {{ errorTitle }}
      </h3>
      <p class="text-gray-600 dark:text-gray-400">
        {{ errorMessage }}
      </p>
      <div class="flex gap-2 justify-center">
        <UButton
          variant="soft"
          @click="retry"
        >
          Try Again
        </UButton>
        <UButton
          variant="ghost"
          @click="goBack"
        >
          Go Back
        </UButton>
      </div>
    </div>
  </UCard>
</template>
```

Remember: Prioritize clarity, provide immediate feedback, maintain consistency, and ensure all interactions are accessible and responsive.