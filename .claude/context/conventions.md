# Riobaldo Code Conventions

## General Principles

1. **Clarity over Cleverness**: Write code that is easy to understand
2. **Consistency**: Follow established patterns throughout the codebase
3. **Type Safety**: Leverage TypeScript for better developer experience
4. **Performance**: Consider performance implications of code choices
5. **Accessibility**: Ensure all features are accessible to all users

## Git Workflow

### Branch Naming
```bash
feature/add-question-component
fix/timer-synchronization  
style/improve-mobile-layout
chore/update-dependencies
refactor/optimize-api-calls
release/v1.0.0
hotfix/critical-auth-bug
```

### Commit Messages
```bash
# Format: <type>(<scope>): <subject>

feat(auth): implement Supabase authentication
fix(questions): resolve timer sync issue
docs(api): update endpoint documentation
style(ui): improve button hover states
refactor(store): optimize state management
test(math): add formula validation tests
chore(deps): update Nuxt to v4.0.1
```

## TypeScript Conventions

### Type Definitions
```typescript
// Use interfaces for objects
interface User {
  id: string
  email: string
  profile: UserProfile
}

// Use type for unions and primitives
type QuestionType = 'math' | 'philosophy'
type ID = string | number

// Use enums sparingly, prefer const objects
const QuestionDifficulty = {
  EASY: 'easy',
  MEDIUM: 'medium',
  HARD: 'hard'
} as const

type QuestionDifficulty = typeof QuestionDifficulty[keyof typeof QuestionDifficulty]
```

### Naming Conventions
```typescript
// PascalCase for types/interfaces/classes
interface UserProfile {}
class QuestionService {}

// camelCase for variables/functions
const userName = 'Thiago'
function calculateScore() {}

// UPPER_SNAKE_CASE for constants
const MAX_ATTEMPTS = 3
const API_TIMEOUT = 5000

// Prefix booleans with is/has/should
const isLoading = ref(false)
const hasPermission = computed(() => {})
const shouldUpdate = () => {}
```

## Vue/Nuxt Conventions

### Component Structure
```vue
<script setup lang="ts">
// 1. Imports
import { ref, computed } from 'vue'
import type { Question } from '~/types'

// 2. Props & Emits
const props = defineProps<{
  question: Question
  disabled?: boolean
}>()

const emit = defineEmits<{
  submit: [answer: string]
  skip: []
}>()

// 3. Composables
const { user } = useAuth()
const toast = useToast()

// 4. Reactive State
const answer = ref('')
const isSubmitting = ref(false)

// 5. Computed Properties
const isValid = computed(() => answer.value.length > 0)

// 6. Methods
const handleSubmit = async () => {
  if (!isValid.value) return
  
  isSubmitting.value = true
  try {
    await submitAnswer(answer.value)
    emit('submit', answer.value)
  } finally {
    isSubmitting.value = false
  }
}

// 7. Lifecycle Hooks
onMounted(() => {
  // initialization
})

// 8. Watchers
watch(answer, (newValue) => {
  // react to changes
})
</script>

<template>
  <!-- Template with semantic HTML -->
</template>

<style scoped>
/* Scoped styles */
</style>
```

### File Naming
```
components/
  QuestionCard.vue          # PascalCase for components
  BaseButton.vue           # Prefix base components

composables/
  useAuth.ts               # use prefix for composables
  useQuestions.ts

utils/
  format-date.ts           # kebab-case for utilities
  validate-email.ts

stores/
  user.ts                  # singular, lowercase
  questions.ts
```

## Styling Conventions

### Tailwind Classes Order
```vue
<div 
  class="
    /* Layout */
    relative flex items-center justify-between
    
    /* Spacing */
    p-4 mt-2 mb-4
    
    /* Sizing */
    w-full h-64
    
    /* Typography */
    text-lg font-medium text-gray-900
    
    /* Background */
    bg-white dark:bg-gray-800
    
    /* Border */
    border border-gray-200 rounded-lg
    
    /* Effects */
    shadow-sm hover:shadow-lg
    
    /* Transitions */
    transition-all duration-200
  "
>
```

### Custom CSS
```css
/* Use CSS custom properties for theming */
:root {
  --color-primary: #4F46E5;
  --spacing-unit: 4px;
}

/* BEM naming for custom classes */
.question-card { }
.question-card__header { }
.question-card__content { }
.question-card--active { }
```

## API Conventions

### Endpoint Naming
```typescript
// RESTful conventions
GET    /api/questions          // List
POST   /api/questions          // Create
GET    /api/questions/:id      // Read
PUT    /api/questions/:id      // Update
DELETE /api/questions/:id      // Delete

// Action endpoints
POST   /api/questions/:id/submit
POST   /api/questions/:id/hint
```

### Response Format
```typescript
// Success response
{
  success: true,
  data: { /* actual data */ },
  meta: {
    page: 1,
    total: 100
  }
}

// Error response
{
  success: false,
  error: {
    code: 'VALIDATION_ERROR',
    message: 'Invalid input',
    details: { /* field errors */ }
  }
}
```

## Supabase Conventions

### Table Naming
```sql
-- Use snake_case plural for tables
CREATE TABLE questions (...);
CREATE TABLE user_submissions (...);

-- Use snake_case for columns
CREATE TABLE questions (
  id UUID PRIMARY KEY,
  question_text TEXT,
  created_at TIMESTAMPTZ,
  is_active BOOLEAN
);
```

### RLS Policies
```sql
-- Name policies clearly
CREATE POLICY "Users can read their own submissions"
ON submissions FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Teachers can create questions"
ON questions FOR INSERT
WITH CHECK (
  EXISTS (
    SELECT 1 FROM profiles
    WHERE id = auth.uid()
    AND role = 'teacher'
  )
);
```

## Testing Conventions

### Test File Naming
```
QuestionCard.test.ts       # Unit tests
QuestionCard.spec.ts       # Integration tests
questions.e2e.ts           # E2E tests
```

### Test Structure
```typescript
describe('QuestionCard', () => {
  // Group related tests
  describe('rendering', () => {
    it('should display question text', () => {
      // Arrange
      const question = createMockQuestion()
      
      // Act
      const wrapper = mount(QuestionCard, {
        props: { question }
      })
      
      // Assert
      expect(wrapper.text()).toContain(question.text)
    })
  })
  
  describe('interactions', () => {
    it('should emit submit event with answer', async () => {
      // Test implementation
    })
  })
})
```

## Error Handling

### Custom Error Classes
```typescript
// Define specific error types
export class ValidationError extends Error {
  constructor(
    message: string,
    public fields: Record<string, string>
  ) {
    super(message)
    this.name = 'ValidationError'
  }
}

export class AuthenticationError extends Error {
  constructor(message = 'Authentication required') {
    super(message)
    this.name = 'AuthenticationError'
  }
}
```

### Error Boundaries
```vue
<script setup>
// Graceful error handling
const handleError = (error: Error) => {
  console.error('Component error:', error)
  
  if (error instanceof ValidationError) {
    toast.error('Please check your input')
  } else if (error instanceof AuthenticationError) {
    navigateTo('/login')
  } else {
    toast.error('Something went wrong')
  }
}
</script>
```

## Performance Guidelines

### Image Optimization
```vue
<!-- Use Nuxt Image for optimization -->
<NuxtImg
  src="/images/hero.jpg"
  alt="Hero image"
  loading="lazy"
  :width="800"
  :height="600"
  format="webp"
/>
```

### Code Splitting
```typescript
// Lazy load heavy components
const MathFormulaEditor = defineAsyncComponent(
  () => import('~/components/MathFormulaEditor.vue')
)

// Dynamic imports for libraries
const loadKatex = () => import('katex')
```

### Memoization
```typescript
// Use computed for expensive calculations
const expensiveResult = computed(() => {
  return useMemo(() => {
    // Heavy computation
    return processLargeDataset(data.value)
  }, [data.value])
})
```

## Documentation

### Component Documentation
```vue
<script setup lang="ts">
/**
 * QuestionCard Component
 * 
 * Displays a question with interactive answer input
 * 
 * @prop {Question} question - The question to display
 * @prop {boolean} disabled - Disable interactions
 * 
 * @emit {string} submit - Emitted with answer on submit
 * @emit {void} skip - Emitted when question is skipped
 * 
 * @example
 * <QuestionCard 
 *   :question="currentQuestion"
 *   @submit="handleAnswer"
 * />
 */
</script>
```

### Function Documentation
```typescript
/**
 * Calculates the user's score based on answers
 * 
 * @param answers - Array of user answers
 * @param questions - Array of questions
 * @returns Score object with points and percentage
 * 
 * @example
 * const score = calculateScore(userAnswers, questions)
 * console.log(`Score: ${score.percentage}%`)
 */
function calculateScore(
  answers: Answer[],
  questions: Question[]
): Score {
  // Implementation
}
```

## Security Best Practices

### Input Validation
```typescript
// Always validate user input
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Sanitize data before storage
const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
}
```

### Environment Variables
```typescript
// Never commit secrets
// Use .env.local for local development
const config = {
  supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL,
  supabaseAnonKey: process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY,
  // Private keys only on server
  supabaseServiceKey: process.env.SUPABASE_SERVICE_KEY
}
```

## Accessibility Requirements

### ARIA Labels
```vue
<button
  :aria-label="`Submit answer for question ${questionNumber}`"
  :aria-disabled="isDisabled"
  @click="handleSubmit"
>
  Submit
</button>
```

### Keyboard Navigation
```vue
<script setup>
// Support keyboard navigation
const handleKeydown = (event: KeyboardEvent) => {
  switch (event.key) {
    case 'Enter':
      if (!event.shiftKey) {
        event.preventDefault()
        handleSubmit()
      }
      break
    case 'Escape':
      handleCancel()
      break
  }
}
</script>
```

## Code Review Checklist

### Before Submitting PR
- [ ] Code follows naming conventions
- [ ] TypeScript types are properly defined
- [ ] Components are accessible
- [ ] Tests are written and passing
- [ ] Documentation is updated
- [ ] No console.logs in production code
- [ ] No hardcoded values
- [ ] Error handling is implemented
- [ ] Performance impact considered
- [ ] Security best practices followed

These conventions ensure code quality, maintainability, and consistency across the Riobaldo project.