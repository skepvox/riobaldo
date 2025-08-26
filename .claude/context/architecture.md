# Riobaldo System Architecture

## Overview
Riobaldo is a web application designed to support high school students in mathematics and philosophy education through interactive learning experiences, real-time feedback, and AI-powered assistance.

## Tech Stack

### Frontend
- **Framework**: Nuxt 4 (Vue 3)
- **UI Library**: Nuxt UI Pro
- **Styling**: Tailwind CSS v4
- **TypeScript**: Full type safety
- **State Management**: Pinia
- **Icons**: Heroicons, Lucide, Tabler

### Backend
- **Runtime**: Nitro (Nuxt's server engine)
- **API**: Server API routes (`/server/api`)
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Real-time**: Supabase Realtime
- **Storage**: Supabase Storage

### Infrastructure
- **Deployment**: Vercel
- **Version Control**: Git with GitHub
- **CI/CD**: GitHub Actions (planned)
- **Content**: Nuxt Content (for educational materials)

## Architecture Layers

```
┌─────────────────────────────────────────┐
│           Presentation Layer             │
│  (Vue Components, Nuxt UI Pro, Pages)   │
├─────────────────────────────────────────┤
│          Application Layer               │
│   (Composables, Stores, Services)       │
├─────────────────────────────────────────┤
│            API Layer                     │
│    (Server Routes, Middleware)          │
├─────────────────────────────────────────┤
│           Data Layer                     │
│    (Supabase: Database, Auth, Storage)  │
└─────────────────────────────────────────┘
```

## Current Directory Structure

```
riobaldo/
├── app/                    # Frontend application
│   ├── assets/            # Build-time assets
│   │   └── css/          # Global styles
│   ├── components/        # Vue components
│   │   ├── landing/      # Landing page components
│   │   ├── ui/           # Base UI components (future)
│   │   ├── math/         # Math-specific (future)
│   │   ├── philosophy/   # Philosophy-specific (future)
│   │   └── shared/       # Shared components (future)
│   ├── pages/            # Route pages
│   │   └── blog/         # Blog pages
│   ├── layouts/          # Page layouts
│   ├── composables/      # Vue composables (future)
│   ├── stores/           # Pinia stores (future)
│   ├── utils/            # Utility functions
│   ├── app.config.ts     # App configuration
│   ├── app.vue           # Root component
│   └── error.vue         # Error page
├── content/              # Content management
│   └── blog/            # Blog posts
├── server/               # Backend application (future)
│   ├── api/             # API endpoints
│   ├── middleware/      # Server middleware
│   ├── utils/           # Server utilities
│   └── plugins/         # Server plugins
├── public/              # Static assets
│   ├── blog/           # Blog images
│   ├── favicon/        # Favicon variations
│   ├── marquee/        # Hero marquee images
│   └── quotes/         # Quote author images
├── tests/               # Test files (future)
├── nuxt.config.ts      # Nuxt configuration
├── tsconfig.json       # TypeScript configuration
├── package.json        # Dependencies
└── vercel.json         # Vercel deployment config
```

## Core Modules

### 1. Question System
- Question creation and management
- Different question types (multiple choice, essay, problem-solving)
- Difficulty levels and categorization
- Progress tracking

### 2. Learning Modules
- **Mathematics Module**
  - Formula editor (KaTeX/MathJax)
  - Step-by-step solutions
  - Graph visualizations
  - Calculator tools
  - Geometric drawings

- **Philosophy Module**
  - Argument builder
  - Concept mapping
  - Text analysis
  - Discussion forums
  - Quote library

### 3. Feedback System
- Real-time answer validation
- AI-powered feedback (Claude/GPT API)
- Hint system
- Detailed explanations
- Peer review

### 4. Progress Tracking
- User statistics
- Learning analytics
- Achievement system
- Performance reports
- Study streaks

### 5. AI Integration
- Natural language processing
- Personalized learning paths
- Content recommendations
- Automated grading
- Socratic dialogue

## Supabase Integration

### Database Schema (PostgreSQL)
```sql
-- Users (handled by Supabase Auth)
-- Additional user profile data
profiles
├── id (uuid, FK to auth.users)
├── username (text)
├── grade_level (int)
├── created_at (timestamp)
└── updated_at (timestamp)

-- Questions
questions
├── id (uuid)
├── title (text)
├── content (text)
├── type (enum: math, philosophy)
├── difficulty (enum: easy, medium, hard)
├── created_by (uuid, FK to profiles)
├── created_at (timestamp)
└── updated_at (timestamp)

-- Submissions
submissions
├── id (uuid)
├── question_id (uuid, FK to questions)
├── user_id (uuid, FK to profiles)
├── answer (jsonb)
├── score (float)
├── feedback (text)
├── submitted_at (timestamp)
└── graded_at (timestamp)

-- Progress
user_progress
├── id (uuid)
├── user_id (uuid, FK to profiles)
├── subject (enum: math, philosophy)
├── level (int)
├── xp_points (int)
├── streak_days (int)
└── updated_at (timestamp)
```

### Supabase Services
```typescript
// composables/useSupabase.ts
export const useSupabase = () => {
  const client = useSupabaseClient()
  const user = useSupabaseUser()
  
  return {
    client,
    user,
    // Helper methods
    async getQuestions(filters) {},
    async submitAnswer(data) {},
    async getUserProgress() {}
  }
}
```

### Real-time Subscriptions
```typescript
// Real-time question updates
const subscription = supabase
  .channel('questions')
  .on('postgres_changes', {
    event: '*',
    schema: 'public',
    table: 'questions'
  }, (payload) => {
    // Handle real-time updates
  })
  .subscribe()
```

## Data Flow

### Request Flow
```
User Action → Vue Component → Composable → Supabase Client → Supabase API → PostgreSQL
                                              ↓
User Update ← Vue Reactivity ← Store Update ← Real-time/Response ← Database
```

### Authentication Flow
```
Login Request → Supabase Auth → JWT Token → Session Storage → Protected Routes
```

## API Design

### Supabase RPC Functions
```typescript
// Custom database functions
supabase.rpc('calculate_user_level', { user_id })
supabase.rpc('get_recommended_questions', { user_id, count })
supabase.rpc('evaluate_answer', { submission_id })
```

### Server API Endpoints (Nitro)
```
POST   /api/ai/feedback        # Get AI feedback
POST   /api/ai/hint           # Generate hint
GET    /api/stats/leaderboard # Get leaderboard
POST   /api/export/progress   # Export user progress
```

## Security Considerations

### Authentication & Authorization
- Supabase Auth with JWT
- Row Level Security (RLS) policies
- Role-based access control (Student, Teacher, Admin)
- Multi-factor authentication support

### Data Protection
- Input validation and sanitization
- SQL injection prevention (via Supabase)
- XSS protection (Vue's built-in)
- CSRF protection
- Rate limiting (Supabase + custom)

### Privacy
- GDPR/LGPD compliance
- Data encryption at rest (Supabase)
- Secure API communication (HTTPS)
- PII data handling policies

## Performance Optimization

### Frontend
- Code splitting and lazy loading
- Image optimization (Nuxt Image)
- Component memoization
- Virtual scrolling for lists
- Service Worker caching
- Nuxt's hybrid rendering

### Backend
- Supabase connection pooling
- Database indexes
- Materialized views for analytics
- Edge caching (Vercel)
- Incremental Static Regeneration

### Monitoring
- Vercel Analytics
- Supabase Dashboard
- Error tracking (Sentry planned)
- Performance monitoring
- User behavior analytics

## Development Workflow

### Local Development
See `CLAUDE.md` for common commands or run `pnpm run` to see all available scripts.

### Environment Variables
```env
SUPABASE_URL=https://[project].supabase.co
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_KEY=your-service-key
AI_API_KEY=your-ai-api-key
```

### Branch Strategy
See `.claude/context/conventions.md#git-workflow` for branch naming and workflow conventions.

## Future Enhancements

### Phase 1 (MVP)
- Basic question system
- Supabase authentication
- Simple feedback mechanism
- Progress tracking
- Content management

### Phase 2
- AI-powered feedback integration
- Advanced analytics dashboard
- Mobile responsiveness optimization
- Offline support with PWA
- Gamification elements

### Phase 3
- Collaborative features
- Live tutoring sessions
- Content marketplace
- API for third-party integration
- Mobile app (Capacitor/React Native)

## Disaster Recovery

### Backup Strategy
- Supabase automatic backups
- Git repository (GitHub)
- Environment variable backup
- User data exports via Supabase

### Recovery Plan
- RTO: 2 hours
- RPO: 1 hour
- Rollback procedures via Vercel
- Database restore via Supabase

This architecture leverages Nuxt 4's capabilities with Supabase's backend services to create a scalable, maintainable educational platform.