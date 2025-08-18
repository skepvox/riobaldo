# Claude Code Instructions for Riobaldo Project

## 🚀 Quick Start

**IMPORTANT**: At session start, run the startup checks detailed in `.ai/startup-checklist.md`

## 📚 Project Context

**Riobaldo** - Educational platform for high school mathematics and philosophy
- **Tech Stack**: Nuxt 4, Vue 3, Nuxt UI Pro, Tailwind CSS v4, TypeScript, Supabase
- **Architecture**: See `.ai/context/architecture.md` for full system design

## 📋 Key References

### Essential Documentation
- **Startup Procedure**: `.ai/startup-checklist.md` - Run at every session start
- **Code Conventions**: `.ai/context/conventions.md` - Coding standards and patterns
- **System Architecture**: `.ai/context/architecture.md` - Technical stack and structure
- **Design System**: `.ai/context/design-system.md` - UI/UX guidelines

### Development Guides
- **Component Creation**: `.ai/prompts/component.md` - Nuxt UI Pro patterns
- **API Development**: `.ai/prompts/api.md` - Backend endpoint patterns
- **Refactoring**: `.ai/prompts/refactor.md` - Code improvement guidelines
- **UI Patterns**: `.ai/prompts/ui-patterns.md` - Interface design patterns

## ⚡ Quick Guidelines

### Branch Strategy
- **NEVER** commit to main
- **ALWAYS** work on develop or feature branches
- See `.ai/context/conventions.md#git-workflow` for naming conventions

### Before Starting Work
1. Run startup checks (`.ai/startup-checklist.md`)
2. Ensure correct branch (usually develop)
3. Pull latest changes
4. Check for conflicts

### Quality Checklist
Before marking tasks complete:
- [ ] Run `pnpm lint`
- [ ] Run `pnpm typecheck`
- [ ] Test functionality
- [ ] Follow conventions in `.ai/context/conventions.md`

## 🛠 Common Commands

```bash
# Quick setup
pnpm install      # Install dependencies
pnpm dev          # Start development

# Git workflow (see conventions.md for details)
git checkout develop
git checkout -b feature/name
git commit -m "type(scope): message"
```

## 🔑 Key Principles

### Development
- **Mobile-first** responsive design
- **Dark mode** support by default
- **Accessibility** is mandatory (WCAG AA)
- **TypeScript** for type safety
- **Semantic HTML** always

### Security
- Never commit secrets or API keys
- Validate all user inputs
- Use environment variables for sensitive data
- Implement proper authentication checks
- Follow OWASP best practices

### Performance
- Lazy load heavy components
- Optimize images with NuxtImg
- Implement proper caching
- Minimize bundle size

### Supabase Integration
- Use Row Level Security (RLS) policies
- Follow table naming (snake_case, plural)
- Use Supabase client through composables
- Handle errors gracefully

---

**Remember**: Always run `.ai/startup-checklist.md` at session start!