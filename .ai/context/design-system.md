# Riobaldo Design System

## Design Philosophy
Creating an engaging, accessible, and intuitive learning environment that balances academic rigor with approachable aesthetics, inspired by Brazilian cultural elements and modern educational interfaces.

## Brand Identity

### Mission
Democratize quality education in mathematics and philosophy for Brazilian high school students through technology and thoughtful design.

### Values
- **Accessibility**: Design for all students regardless of abilities
- **Clarity**: Complex concepts made visually simple
- **Engagement**: Interactive and delightful learning
- **Cultural**: Brazilian identity and references

## Color System

### Primary Palette
```css
:root {
  /* Brand Colors - Inspired by Brazilian nature */
  --primary-500: #4F46E5;     /* Indigo - Knowledge */
  --secondary-500: #10B981;   /* Emerald - Growth */
  
  /* Subject Colors */
  --math-500: #3B82F6;        /* Blue - Logic */
  --philosophy-500: #8B5CF6;  /* Purple - Wisdom */
  
  /* Semantic Colors */
  --success-500: #10B981;     /* Green - Correct */
  --warning-500: #F59E0B;     /* Amber - Attention */
  --error-500: #EF4444;       /* Red - Incorrect */
  --info-500: #06B6D4;        /* Cyan - Information */
}
```

### Neutral Palette
```css
:root {
  /* Gray Scale for UI */
  --gray-50: #F9FAFB;
  --gray-100: #F3F4F6;
  --gray-200: #E5E7EB;
  --gray-300: #D1D5DB;
  --gray-400: #9CA3AF;
  --gray-500: #6B7280;
  --gray-600: #4B5563;
  --gray-700: #374151;
  --gray-800: #1F2937;
  --gray-900: #111827;
  --gray-950: #030712;
}
```

### Dark Mode
```css
/* Automatic dark mode adjustments */
.dark {
  --bg-primary: var(--gray-900);
  --bg-secondary: var(--gray-800);
  --text-primary: var(--gray-100);
  --text-secondary: var(--gray-400);
  --border: var(--gray-700);
}
```

## Typography

### Font Stack
```css
:root {
  /* Headings - Modern, clean */
  --font-heading: 'Inter', system-ui, sans-serif;
  
  /* Body - Readable, friendly */
  --font-body: 'Inter', system-ui, sans-serif;
  
  /* Math/Code - Monospace */
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
  
  /* Philosophy quotes - Serif */
  --font-serif: 'Crimson Text', 'Georgia', serif;
}
```

### Type Scale
```css
/* Based on Perfect Fourth (1.333) scale */
.text-xs    { font-size: 0.75rem; line-height: 1rem; }
.text-sm    { font-size: 0.875rem; line-height: 1.25rem; }
.text-base  { font-size: 1rem; line-height: 1.5rem; }
.text-lg    { font-size: 1.125rem; line-height: 1.75rem; }
.text-xl    { font-size: 1.25rem; line-height: 1.75rem; }
.text-2xl   { font-size: 1.5rem; line-height: 2rem; }
.text-3xl   { font-size: 1.875rem; line-height: 2.25rem; }
.text-4xl   { font-size: 2.25rem; line-height: 2.5rem; }
.text-5xl   { font-size: 3rem; line-height: 1; }
```

### Font Weights
```css
.font-light    { font-weight: 300; }
.font-normal   { font-weight: 400; }
.font-medium   { font-weight: 500; }
.font-semibold { font-weight: 600; }
.font-bold     { font-weight: 700; }
```

## Spacing System

### Base Unit: 4px
```css
/* Consistent spacing scale */
.space-0  { 0px }
.space-1  { 4px }
.space-2  { 8px }
.space-3  { 12px }
.space-4  { 16px }
.space-5  { 20px }
.space-6  { 24px }
.space-8  { 32px }
.space-10 { 40px }
.space-12 { 48px }
.space-16 { 64px }
.space-20 { 80px }
.space-24 { 96px }
```

## Layout System

### Container Widths
```css
.container-sm  { max-width: 640px; }
.container-md  { max-width: 768px; }
.container-lg  { max-width: 1024px; }
.container-xl  { max-width: 1280px; }
.container-2xl { max-width: 1536px; }
```

### Grid System
```css
/* 12-column grid */
.grid-cols-1  { grid-template-columns: repeat(1, 1fr); }
.grid-cols-2  { grid-template-columns: repeat(2, 1fr); }
.grid-cols-3  { grid-template-columns: repeat(3, 1fr); }
.grid-cols-4  { grid-template-columns: repeat(4, 1fr); }
.grid-cols-6  { grid-template-columns: repeat(6, 1fr); }
.grid-cols-12 { grid-template-columns: repeat(12, 1fr); }
```

### Breakpoints
```css
/* Mobile-first responsive design */
@media (min-width: 640px)  { /* sm */ }
@media (min-width: 768px)  { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

## Component Patterns

### Cards
```css
.card {
  @apply bg-white dark:bg-gray-800;
  @apply border border-gray-200 dark:border-gray-700;
  @apply rounded-lg shadow-sm;
  @apply p-6;
}

.card-hover {
  @apply transition-shadow duration-200;
  @apply hover:shadow-lg;
}
```

### Buttons
```css
/* Primary Button */
.btn-primary {
  @apply bg-primary-500 text-white;
  @apply px-4 py-2 rounded-lg;
  @apply font-medium;
  @apply transition-all duration-200;
  @apply hover:bg-primary-600 hover:shadow-md;
  @apply active:scale-95;
}

/* Secondary Button */
.btn-secondary {
  @apply bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100;
  @apply border border-gray-300 dark:border-gray-600;
}

/* Ghost Button */
.btn-ghost {
  @apply text-gray-600 dark:text-gray-400;
  @apply hover:bg-gray-100 dark:hover:bg-gray-800;
}
```

### Forms
```css
.input {
  @apply w-full px-3 py-2;
  @apply bg-white dark:bg-gray-800;
  @apply border border-gray-300 dark:border-gray-600;
  @apply rounded-lg;
  @apply focus:ring-2 focus:ring-primary-500 focus:border-transparent;
  @apply transition-all duration-200;
}

.input-error {
  @apply border-red-500 focus:ring-red-500;
}
```

## Icons System

### Icon Libraries
- **Heroicons**: Primary UI icons
- **Lucide**: Secondary icons
- **Tabler**: Specialized icons
- **Custom**: Subject-specific icons

### Icon Sizes
```css
.icon-xs { width: 12px; height: 12px; }
.icon-sm { width: 16px; height: 16px; }
.icon-md { width: 20px; height: 20px; }
.icon-lg { width: 24px; height: 24px; }
.icon-xl { width: 32px; height: 32px; }
```

## Animation & Motion

### Transitions
```css
/* Standard transitions */
.transition-fast { transition-duration: 150ms; }
.transition-base { transition-duration: 200ms; }
.transition-slow { transition-duration: 300ms; }

/* Easing functions */
.ease-in-out { transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }
.ease-out { transition-timing-function: cubic-bezier(0, 0, 0.2, 1); }
.ease-in { transition-timing-function: cubic-bezier(0.4, 0, 1, 1); }
```

### Animations
```css
/* Success animation */
@keyframes success-pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.8; }
}

/* Loading spinner */
@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Fade in */
@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
```

## Educational UI Components

### Question States
```css
/* Unanswered */
.question-pending {
  @apply border-gray-300 bg-gray-50;
}

/* In Progress */
.question-active {
  @apply border-blue-500 bg-blue-50;
  @apply ring-2 ring-blue-200;
}

/* Correct */
.question-correct {
  @apply border-green-500 bg-green-50;
}

/* Incorrect */
.question-incorrect {
  @apply border-red-500 bg-red-50;
}
```

### Progress Indicators
```css
/* Linear progress */
.progress-bar {
  @apply h-2 bg-gray-200 rounded-full overflow-hidden;
}

.progress-fill {
  @apply h-full bg-gradient-to-r from-primary-400 to-primary-600;
  @apply transition-all duration-500 ease-out;
}

/* Circular progress */
.progress-circle {
  @apply relative inline-flex items-center justify-center;
}
```

### Feedback States
```css
/* Success feedback */
.feedback-success {
  @apply bg-green-50 border-green-200 text-green-800;
  @apply dark:bg-green-900/20 dark:border-green-800 dark:text-green-200;
}

/* Error feedback */
.feedback-error {
  @apply bg-red-50 border-red-200 text-red-800;
  @apply dark:bg-red-900/20 dark:border-red-800 dark:text-red-200;
}

/* Hint */
.feedback-hint {
  @apply bg-amber-50 border-amber-200 text-amber-800;
  @apply dark:bg-amber-900/20 dark:border-amber-800 dark:text-amber-200;
}
```

## Accessibility Guidelines

### Color Contrast
- Normal text: 4.5:1 minimum ratio
- Large text: 3:1 minimum ratio
- Interactive elements: 3:1 minimum ratio
- Focus indicators: Visible and high contrast

### Focus States
```css
.focus-visible {
  @apply outline-none ring-2 ring-primary-500 ring-offset-2;
  @apply ring-offset-white dark:ring-offset-gray-900;
}
```

### Screen Reader Support
```css
/* Visually hidden but screen reader accessible */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

## Responsive Design Patterns

### Mobile-First Approach
```vue
<template>
  <!-- Stack on mobile, grid on larger screens -->
  <div class="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0">
    <!-- Content -->
  </div>
</template>
```

### Touch Targets
- Minimum size: 44x44px
- Spacing between targets: 8px minimum
- Clear active states for touch

## Math & Philosophy Specific

### Math Notation
```css
.math-formula {
  @apply font-mono text-lg;
  @apply bg-blue-50 dark:bg-blue-900/20;
  @apply px-4 py-2 rounded-lg;
  @apply overflow-x-auto;
}

.math-symbol {
  @apply text-blue-600 dark:text-blue-400;
  @apply font-semibold;
}
```

### Philosophy Quotes
```css
.philosophy-quote {
  @apply font-serif text-lg italic;
  @apply border-l-4 border-purple-500;
  @apply pl-4 py-2;
  @apply bg-purple-50 dark:bg-purple-900/20;
}

.quote-author {
  @apply font-sans text-sm text-gray-600;
  @apply mt-2 not-italic;
}
```

## Cultural Elements

### Brazilian Identity
- Use of warm colors inspired by Brazilian nature
- Integration of Portuguese language considerations
- References to Brazilian educational context
- Celebration of diversity and inclusion

### Visual References
- Geometric patterns inspired by Brazilian modernism
- Color palette reflecting tropical environment
- Typography considering Portuguese diacritics

## Performance Considerations

### CSS Optimization
- Use Tailwind's purge for production
- Minimize custom CSS
- Leverage CSS variables for theming
- Use GPU-accelerated animations

### Image Guidelines
- Use WebP format when possible
- Implement lazy loading
- Provide appropriate alt text
- Use responsive images

This design system ensures consistency, accessibility, and cultural relevance while maintaining high performance and user engagement.