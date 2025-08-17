# Claude Code Instructions for Riobaldo Project

## Startup Procedure

**IMPORTANT**: At the beginning of each session, automatically perform these checks:

1. **Check current branch**: Run `git branch --show-current`
2. **Check git status**: Run `git status` 
3. **Verify .ai folder**: Ensure all context and prompt files exist
4. **Report status**: Provide a brief status summary

## Project Context

This is **Riobaldo**, a web application supporting high school students in mathematics and philosophy education. Built with:
- Nuxt 4 (Vue 3)
- Nuxt UI Pro
- Tailwind CSS v4
- TypeScript
- Supabase (Database, Auth, Storage)

## Key Guidelines

### Branch Management
- **NEVER** commit directly to main branch
- **ALWAYS** work on develop or feature branches
- Follow naming: `feature/`, `fix/`, `chore/`, `style/`, `refactor/`

### Before Any Work
1. Ensure you're on the correct branch (usually develop or a feature branch)
2. Check if branch is up to date
3. Verify no uncommitted changes that might conflict

### Code Conventions
- Use TypeScript for all new code
- Follow Vue 3 Composition API with `<script setup>`
- Use Nuxt UI Pro components when available
- Follow conventions in `.ai/context/conventions.md`

### Component Creation
- Reference `.ai/prompts/component.md` for component patterns
- Use Nuxt UI Pro conventions
- Ensure accessibility (ARIA labels, keyboard navigation)

### API Development
- Reference `.ai/prompts/api.md` for API patterns
- Use Supabase for data operations when possible
- Follow RESTful conventions

### Testing & Quality
Before marking any task complete:
- Run `pnpm lint` if available
- Run `pnpm typecheck` if available
- Ensure no TypeScript errors
- Test the functionality manually

### Commits
Use conventional commits:
```
feat(scope): add new feature
fix(scope): fix bug
docs(scope): update documentation
style(scope): formatting changes
refactor(scope): code restructuring
test(scope): add tests
chore(scope): maintenance
```

## Project Structure Reference

Key directories:
- `app/` - Frontend application (components, pages, layouts)
- `server/` - Backend API (when implemented)
- `content/` - Content management
- `.ai/` - AI assistant configuration and context

## Common Commands

```bash
# Development
pnpm dev          # Start dev server
pnpm build        # Build for production
pnpm preview      # Preview production build

# Git workflow
git checkout develop                    # Switch to develop
git checkout -b feature/new-feature    # Create feature branch
git add .                               # Stage changes
git commit -m "feat: description"      # Commit with message
git push origin feature/new-feature    # Push branch

# Utilities
pnpm lint         # Run linter
pnpm typecheck    # Check TypeScript
```

## Important Files

- `.ai/startup-checklist.md` - Detailed startup procedure
- `.ai/context/architecture.md` - System architecture
- `.ai/context/design-system.md` - Design guidelines  
- `.ai/context/conventions.md` - Code conventions
- `.ai/.claude-project` - Project configuration

## Supabase Integration

When working with Supabase:
1. Use Row Level Security (RLS) policies
2. Follow table naming conventions (snake_case, plural)
3. Use Supabase client through composables
4. Handle errors gracefully

## UI/UX Principles

1. Mobile-first responsive design
2. Dark mode support by default
3. Accessibility is mandatory
4. Follow Material Design principles adapted for education
5. Use semantic HTML

## Performance Considerations

1. Use lazy loading for heavy components
2. Optimize images with NuxtImg
3. Implement proper caching strategies
4. Minimize bundle size

## Security Requirements

1. Never commit secrets or API keys
2. Validate all user inputs
3. Use environment variables for sensitive data
4. Implement proper authentication checks
5. Follow OWASP best practices

---

**Remember**: Always check `.ai/startup-checklist.md` at session start and follow the project's branch strategy!