# Code Refactoring Prompt

When refactoring code for Riobaldo, follow these principles and patterns:

## Refactoring Principles

### 1. Clean Code Principles
- **Single Responsibility**: Each function/component does one thing well
- **DRY (Don't Repeat Yourself)**: Extract common logic
- **KISS (Keep It Simple)**: Prefer simple solutions
- **YAGNI (You Aren't Gonna Need It)**: Don't over-engineer

### 2. Code Smells to Fix
- Long functions (> 20 lines)
- Duplicate code
- Large components (> 200 lines)
- Deep nesting (> 3 levels)
- Magic numbers/strings
- Unclear naming
- Mixed concerns

## Component Refactoring

### Before: Monolithic Component
```vue
<!-- ❌ Bad: Everything in one component -->
<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <div v-for="item in items" :key="item.id">
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
        <button @click="handleClick(item)">
          {{ item.status === 'completed' ? 'View' : 'Start' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// 300+ lines of mixed logic
</script>
```

### After: Composed Components
```vue
<!-- ✅ Good: Separated concerns -->
<template>
  <LoadingState v-if="loading" />
  <ErrorState v-else-if="error" :error="error" />
  <QuestionList
    v-else
    :questions="questions"
    @select="handleQuestionSelect"
  />
</template>

<script setup lang="ts">
import { useQuestions } from '~/composables/useQuestions'

const { questions, loading, error } = useQuestions()
const handleQuestionSelect = (question: Question) => {
  // Focused logic
}
</script>
```

## Composables Extraction

### Before: Inline Logic
```typescript
// ❌ Bad: Logic mixed in component
const component = defineComponent({
  setup() {
    const data = ref([])
    const loading = ref(false)
    const error = ref(null)
    
    const fetchData = async () => {
      loading.value = true
      try {
        const response = await $fetch('/api/data')
        data.value = response
      } catch (e) {
        error.value = e
      } finally {
        loading.value = false
      }
    }
    
    onMounted(() => {
      fetchData()
    })
    
    return { data, loading, error, fetchData }
  }
})
```

### After: Reusable Composable
```typescript
// ✅ Good: Extracted to composable
// composables/useAsyncData.ts
export function useAsyncData<T>(
  url: string,
  options?: UseFetchOptions
) {
  const data = ref<T | null>(null)
  const loading = ref(false)
  const error = ref<Error | null>(null)
  
  const execute = async () => {
    loading.value = true
    error.value = null
    
    try {
      data.value = await $fetch<T>(url, options)
    } catch (e) {
      error.value = e as Error
    } finally {
      loading.value = false
    }
  }
  
  onMounted(() => {
    execute()
  })
  
  return {
    data: readonly(data),
    loading: readonly(loading),
    error: readonly(error),
    refresh: execute
  }
}

// Usage in component
const { data: questions, loading, error, refresh } = useAsyncData<Question[]>('/api/questions')
```

## Type Safety Improvements

### Before: Loose Types
```typescript
// ❌ Bad: Using 'any' and missing types
function processData(data: any) {
  return data.map((item: any) => ({
    id: item.id,
    name: item.name || 'Unknown',
    value: item.val * 2
  }))
}
```

### After: Strict Types
```typescript
// ✅ Good: Proper type definitions
interface RawDataItem {
  id: string
  name?: string
  val: number
}

interface ProcessedDataItem {
  id: string
  name: string
  value: number
}

function processData(data: RawDataItem[]): ProcessedDataItem[] {
  return data.map((item) => ({
    id: item.id,
    name: item.name ?? 'Unknown',
    value: item.val * 2
  }))
}
```

## Performance Optimization

### Before: Unnecessary Re-renders
```vue
<!-- ❌ Bad: Everything re-computes -->
<template>
  <div v-for="item in items.filter(i => i.active).sort((a, b) => a.order - b.order)">
    {{ expensiveFormat(item) }}
  </div>
</template>
```

### After: Optimized Computations
```vue
<!-- ✅ Good: Computed and memoized -->
<template>
  <div v-for="item in sortedActiveItems" :key="item.id">
    {{ formattedItems[item.id] }}
  </div>
</template>

<script setup>
const sortedActiveItems = computed(() => 
  items.value
    .filter(i => i.active)
    .sort((a, b) => a.order - b.order)
)

const formattedItems = computed(() => {
  const formatted = {}
  for (const item of items.value) {
    formatted[item.id] = useMemo(() => expensiveFormat(item), [item])
  }
  return formatted
})
</script>
```

## State Management Refactoring

### Before: Prop Drilling
```vue
<!-- ❌ Bad: Passing props through multiple levels -->
<GrandParent :user="user" :settings="settings" />
  <Parent :user="user" :settings="settings" />
    <Child :user="user" :settings="settings" />
      <GrandChild :user="user" :settings="settings" />
```

### After: Proper State Management
```typescript
// ✅ Good: Using Pinia store
// stores/app.ts
export const useAppStore = defineStore('app', () => {
  const user = ref<User | null>(null)
  const settings = ref<Settings>(defaultSettings)
  
  const updateSettings = (newSettings: Partial<Settings>) => {
    settings.value = { ...settings.value, ...newSettings }
  }
  
  return {
    user: readonly(user),
    settings: readonly(settings),
    updateSettings
  }
})

// In any component
const { user, settings } = storeToRefs(useAppStore())
```

## API Layer Refactoring

### Before: Scattered API Calls
```typescript
// ❌ Bad: API calls everywhere
// Component A
const data1 = await $fetch('/api/questions?type=math')

// Component B
const data2 = await $fetch('/api/questions?type=philosophy')
```

### After: Centralized API Layer
```typescript
// ✅ Good: API service layer
// services/api/questions.ts
class QuestionsAPI {
  private readonly baseURL = '/api/questions'
  
  async getByType(type: QuestionType) {
    return $fetch<Question[]>(this.baseURL, {
      query: { type }
    })
  }
  
  async getById(id: string) {
    return $fetch<Question>(`${this.baseURL}/${id}`)
  }
  
  async create(data: CreateQuestionDTO) {
    return $fetch<Question>(this.baseURL, {
      method: 'POST',
      body: data
    })
  }
}

export const questionsAPI = new QuestionsAPI()

// Usage
const mathQuestions = await questionsAPI.getByType('math')
```

## Error Handling Refactoring

### Before: Repetitive Error Handling
```typescript
// ❌ Bad: Same error handling everywhere
try {
  const data = await fetchData()
  // process
} catch (error) {
  console.error('Error:', error)
  toast.error('Something went wrong')
  // Same pattern repeated
}
```

### After: Centralized Error Handler
```typescript
// ✅ Good: Error boundary and handler
// utils/errorHandler.ts
export class AppError extends Error {
  constructor(
    message: string,
    public code: string,
    public statusCode?: number
  ) {
    super(message)
  }
}

export async function handleAsync<T>(
  fn: () => Promise<T>,
  options?: {
    fallback?: T
    onError?: (error: Error) => void
    showToast?: boolean
  }
): Promise<T | undefined> {
  try {
    return await fn()
  } catch (error) {
    const appError = error instanceof AppError 
      ? error 
      : new AppError('An error occurred', 'UNKNOWN')
    
    if (options?.onError) {
      options.onError(appError)
    }
    
    if (options?.showToast !== false) {
      useToast().add({
        title: 'Error',
        description: appError.message,
        color: 'red'
      })
    }
    
    return options?.fallback
  }
}

// Usage
const data = await handleAsync(
  () => questionsAPI.getByType('math'),
  {
    fallback: [],
    showToast: true
  }
)
```

## Testing After Refactoring

### Unit Tests
```typescript
describe('useQuestions composable', () => {
  it('should fetch questions on mount', async () => {
    const { result } = renderHook(() => useQuestions())
    
    expect(result.current.loading.value).toBe(true)
    
    await waitFor(() => {
      expect(result.current.loading.value).toBe(false)
      expect(result.current.questions.value).toHaveLength(10)
    })
  })
})
```

### Integration Tests
```typescript
describe('Question Flow', () => {
  it('should complete question workflow', async () => {
    const { getByText, getByRole } = render(QuestionView)
    
    // Test refactored components work together
    await userEvent.click(getByText('Start'))
    expect(getByRole('heading')).toHaveTextContent('Question 1')
    
    await userEvent.type(getByRole('textbox'), '42')
    await userEvent.click(getByText('Submit'))
    
    expect(getByText('Correct!')).toBeInTheDocument()
  })
})
```

## Refactoring Checklist

### Before Starting
- [ ] Ensure tests exist and pass
- [ ] Create a branch: `refactor/component-name`
- [ ] Document current behavior

### During Refactoring
- [ ] Make small, incremental changes
- [ ] Run tests after each change
- [ ] Keep commits atomic and descriptive
- [ ] Update types and interfaces
- [ ] Extract magic values to constants
- [ ] Remove dead code
- [ ] Improve naming

### After Refactoring
- [ ] All tests pass
- [ ] No TypeScript errors
- [ ] Performance metrics maintained/improved
- [ ] Code coverage maintained/improved
- [ ] Documentation updated
- [ ] PR created with before/after comparison

## Common Refactoring Patterns

### 1. Extract Method
```typescript
// Before
function processOrder(order) {
  // 50 lines of validation
  // 30 lines of calculation
  // 20 lines of formatting
}

// After
function processOrder(order) {
  const validated = validateOrder(order)
  const calculated = calculateTotals(validated)
  return formatOrderOutput(calculated)
}
```

### 2. Replace Conditional with Polymorphism
```typescript
// Before
function getQuestionComponent(type: string) {
  if (type === 'math') return MathQuestion
  if (type === 'philosophy') return PhilosophyQuestion
  if (type === 'multiple-choice') return MultipleChoice
  // ...
}

// After
const questionComponents: Record<QuestionType, Component> = {
  math: MathQuestion,
  philosophy: PhilosophyQuestion,
  'multiple-choice': MultipleChoice
}

function getQuestionComponent(type: QuestionType) {
  return questionComponents[type] || DefaultQuestion
}
```

### 3. Replace Magic Numbers
```typescript
// Before
if (score > 80) return 'excellent'
if (score > 60) return 'good'

// After
const SCORE_THRESHOLDS = {
  EXCELLENT: 80,
  GOOD: 60,
  PASSING: 40
} as const

if (score > SCORE_THRESHOLDS.EXCELLENT) return 'excellent'
if (score > SCORE_THRESHOLDS.GOOD) return 'good'
```

Remember: Refactor for clarity, maintainability, and performance. Always ensure behavior remains unchanged unless fixing bugs.