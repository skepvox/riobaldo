# Component Creation Prompt - Nuxt UI Pro Conventions

When creating components for Riobaldo, follow these Nuxt UI Pro best practices:

## Component Structure

```vue
<script setup lang="ts">
// 1. Type imports
import type { PropType } from 'vue'

// 2. Interface definitions
interface ComponentProps {
  title?: string
  description?: string
  variant?: 'default' | 'primary' | 'secondary'
  loading?: boolean
}

// 3. Props definition with TypeScript
const props = withDefaults(defineProps<ComponentProps>(), {
  variant: 'default',
  loading: false
})

// 4. Emits definition
const emit = defineEmits<{
  'update:modelValue': [value: string]
  'submit': [data: FormData]
}>()

// 5. Composables
const { t } = useI18n()
const toast = useToast()
const colorMode = useColorMode()

// 6. Reactive state
const isOpen = ref(false)
const formData = reactive({})

// 7. Computed properties
const computedClasses = computed(() => ({
  'dark:bg-gray-900': colorMode.value === 'dark',
  'opacity-50': props.loading
}))

// 8. Methods
const handleSubmit = async () => {
  // Implementation
}

// 9. Lifecycle hooks
onMounted(() => {
  // Setup logic
})
</script>

<template>
  <div class="relative">
    <!-- Use semantic HTML -->
    <header>
      <!-- Leverage slots for flexibility -->
      <slot name="header" :title="title">
        <h2 class="text-2xl font-bold">{{ title }}</h2>
      </slot>
    </header>

    <main>
      <!-- Use Nuxt UI components when available -->
      <UContainer>
        <UCard>
          <template #header>
            <!-- Named slots for customization -->
          </template>
        </UCard>
      </UContainer>
    </main>

    <!-- Conditional rendering with v-if/v-show -->
    <footer v-if="!loading">
      <slot name="footer" />
    </footer>
  </div>
</template>

<style scoped>
/* Use Tailwind utilities first */
/* Custom CSS only when Tailwind can't achieve the design */
@apply transition-all duration-200;

/* Component-specific styles */
.custom-animation {
  animation: slide-in 0.3s ease-out;
}
</style>
```

## Naming Conventions

### Files
- Components: `PascalCase.vue` (e.g., `QuestionCard.vue`)
- Composables: `camelCase.ts` (e.g., `useQuestion.ts`)
- Utilities: `kebab-case.ts` (e.g., `format-date.ts`)

### Templates
- Use kebab-case in templates: `<question-card />`
- Prefix with module context: `MathQuestionCard.vue`, `PhilosophyQuestionCard.vue`

### Component Organization
```
components/
├── ui/                    # Base UI components
│   ├── Button.vue
│   └── Card.vue
├── math/                  # Math-specific components
│   ├── QuestionCard.vue
│   └── FormulaEditor.vue
├── philosophy/            # Philosophy-specific components
│   ├── ArgumentTree.vue
│   └── ConceptMap.vue
└── shared/               # Shared components
    ├── Timer.vue
    └── ProgressBar.vue
```

## Props & Emits Best Practices

### Props
```typescript
// Use TypeScript interfaces
interface Props {
  // Required props
  id: string
  
  // Optional with defaults
  title?: string
  
  // Complex types
  questions?: Question[]
  
  // Variants following Nuxt UI patterns
  variant?: 'default' | 'primary' | 'secondary'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  
  // Loading states
  loading?: boolean
  disabled?: boolean
}

// With defaults
withDefaults(defineProps<Props>(), {
  title: '',
  variant: 'default',
  size: 'md',
  loading: false,
  disabled: false
})
```

### Emits
```typescript
// Type-safe emits
const emit = defineEmits<{
  'update:modelValue': [value: string]
  'change': [value: string]
  'submit': [data: FormData]
  'error': [error: Error]
}>()
```

## Configuration Through UI Prop

Follow Nuxt UI's configuration pattern:

```vue
<UButton
  :ui="{
    base: 'custom-base-class',
    rounded: 'rounded-full',
    variant: {
      solid: 'shadow-lg'
    }
  }"
/>
```

## State Management

### Local State
```typescript
// Use ref for primitives
const isOpen = ref(false)
const count = ref(0)

// Use reactive for objects
const form = reactive({
  name: '',
  email: ''
})
```

### Global State (Pinia)
```typescript
// stores/question.ts
export const useQuestionStore = defineStore('question', () => {
  const questions = ref<Question[]>([])
  const currentQuestion = ref<Question | null>(null)
  
  const fetchQuestions = async () => {
    // Implementation
  }
  
  return {
    questions: readonly(questions),
    currentQuestion: readonly(currentQuestion),
    fetchQuestions
  }
})
```

## Composables Pattern

```typescript
// composables/useQuestion.ts
export const useQuestion = () => {
  const loading = ref(false)
  const error = ref<Error | null>(null)
  
  const submitAnswer = async (answer: string) => {
    loading.value = true
    try {
      // Implementation
    } catch (e) {
      error.value = e as Error
    } finally {
      loading.value = false
    }
  }
  
  return {
    loading: readonly(loading),
    error: readonly(error),
    submitAnswer
  }
}
```

## Accessibility Requirements

- **ARIA Labels**: Include proper ARIA attributes
- **Keyboard Navigation**: Support Tab, Enter, Escape keys
- **Focus Management**: Manage focus for modals and dynamic content
- **Screen Reader Support**: Use semantic HTML and announcements
- **Color Contrast**: Ensure WCAG AA compliance

```vue
<button
  :aria-label="t('button.submit')"
  :aria-disabled="disabled"
  :aria-busy="loading"
  @click="handleClick"
  @keydown.enter.space="handleClick"
>
  <span class="sr-only">{{ screenReaderText }}</span>
  {{ buttonText }}
</button>
```

## Performance Optimization

### Lazy Loading
```vue
<LazyMathQuestionCard v-if="showQuestion" />
```

### Hydration Strategies
```vue
<NuxtClientFallback>
  <MathFormulaEditor />
  <template #fallback>
    <div>Loading editor...</div>
  </template>
</NuxtClientFallback>
```

### Memoization
```typescript
const expensiveComputation = computed(() => {
  return useMemo(() => {
    // Heavy computation
  }, [dependency])
})
```

## Testing Requirements

```typescript
// Component.test.ts
describe('QuestionCard', () => {
  it('renders question text', () => {
    const wrapper = mount(QuestionCard, {
      props: {
        question: 'What is 2+2?'
      }
    })
    expect(wrapper.text()).toContain('What is 2+2?')
  })
  
  it('emits answer on submit', async () => {
    const wrapper = mount(QuestionCard)
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('submit')).toBeTruthy()
  })
})
```

## Dark Mode Support

```vue
<template>
  <div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <!-- Content automatically adapts to color mode -->
  </div>
</template>
```

## Icon Usage

Use Nuxt UI's icon system:

```vue
<UIcon name="i-heroicons-academic-cap" class="w-5 h-5" />
<UIcon name="i-lucide-calculator" />
<UIcon name="i-tabler-math-function" />
```

Remember: Prioritize Nuxt UI Pro components, maintain consistency with the design system, and ensure all components are accessible and performant.