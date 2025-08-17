# Claude Code Startup Checklist

## Automatic Startup Procedure

When starting a Claude Code session for the Riobaldo project, automatically perform these checks:

### 1. Project Context Verification
```bash
# Check if we're in the correct project directory
pwd  # Should be /Users/*/riobaldo
```

### 2. Git Status Check
```bash
# Check current branch
git branch --show-current

# Check branch status
git status

# Check if there are uncommitted changes
git diff --stat

# Check recent commits
git log --oneline -5
```

### 3. Branch Verification
- **Main branch**: Production - should be clean, no direct development
- **Develop branch**: Active development - all new work starts here
- **Feature branches**: Should branch from develop, not main

### 4. .ai Folder Structure Verification
Verify the following files exist:
```
.ai/
├── .claude-project         ✓ Project configuration
├── claude.config.json      ✓ Claude settings
├── startup-checklist.md    ✓ This file
├── prompts/
│   ├── component.md        ✓ Component creation guide
│   ├── api.md             ✓ API endpoint guide
│   ├── ui-patterns.md     ✓ UI/UX patterns
│   └── refactor.md        ✓ Refactoring guide
└── context/
    ├── architecture.md     ✓ System architecture
    ├── design-system.md    ✓ Design guidelines
    └── conventions.md      ✓ Code conventions
```

### 5. Environment Check
```bash
# Check Node/pnpm versions
node --version  # Should be 18+ for Nuxt 4
pnpm --version

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
  echo "⚠️ Dependencies not installed. Run: pnpm install"
fi

# Check for .env files (don't display contents)
if [ -f ".env" ]; then
  echo "✓ .env file exists"
else
  echo "⚠️ .env file missing"
fi

if [ -f ".env.local" ]; then
  echo "✓ .env.local file exists"
else
  echo "⚠️ .env.local file missing (needed for local development)"
fi
```

### 6. Development Server Status
```bash
# Check if dev server is running
lsof -i :3000 2>/dev/null
```

## Startup Report Template

After running checks, provide this summary:

```
📋 Riobaldo Project Status
━━━━━━━━━━━━━━━━━━━━━━━━
📁 Project: riobaldo
🌿 Branch: [current-branch]
📊 Status: [clean/modified/ahead/behind]
🔧 Environment: [ready/needs-setup]
💻 Dev Server: [running/stopped]

⚠️ Issues Found:
- [List any issues]

✅ Ready to start: [Yes/No]
```

## Decision Tree

### If on main branch:
1. Check if changes need to be committed
2. If clean, switch to develop: `git checkout develop`
3. If develop doesn't exist: `git checkout -b develop`

### If on develop branch:
1. Check if up to date with main: `git fetch origin && git status`
2. If behind, consider merging: `git merge origin/main`
3. Ready for new feature branch if needed

### If on feature branch:
1. Check parent branch (should be develop)
2. Check if up to date with develop
3. Continue work or prepare to merge

## Common Startup Commands

### Quick Setup (run in sequence)
```bash
# 1. Ensure we're on the right branch
git checkout develop

# 2. Update from remote
git pull origin develop

# 3. Install/update dependencies
pnpm install

# 4. Start dev server
pnpm dev
```

### Creating New Feature
```bash
# 1. Ensure develop is up to date
git checkout develop
git pull origin develop

# 2. Create feature branch
git checkout -b feature/[feature-name]

# 3. Ready to work!
```

## Automated Startup Script

For future automation, this bash script can be used:

```bash
#!/bin/bash
# Save as .ai/startup.sh

echo "🚀 Starting Riobaldo Project Check..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Function to check status
check_status() {
    echo ""
    echo "📁 Project: $(basename $(pwd))"
    echo "🌿 Branch: $(git branch --show-current)"
    
    if [ -z "$(git status --porcelain)" ]; then
        echo "📊 Status: Clean"
    else
        echo "📊 Status: Modified ($(git status --short | wc -l) files)"
    fi
    
    if [ -d "node_modules" ]; then
        echo "📦 Dependencies: Installed"
    else
        echo "📦 Dependencies: Not installed"
    fi
    
    if lsof -i :3000 >/dev/null 2>&1; then
        echo "💻 Dev Server: Running"
    else
        echo "💻 Dev Server: Stopped"
    fi
}

# Function to check branch rules
check_branch_rules() {
    current_branch=$(git branch --show-current)
    
    if [ "$current_branch" = "main" ]; then
        echo ""
        echo "⚠️  Warning: You're on main branch!"
        echo "   Run: git checkout develop"
    elif [ "$current_branch" = "develop" ]; then
        echo "✅ On develop branch - ready for development"
    elif [[ "$current_branch" == feature/* ]] || [[ "$current_branch" == fix/* ]]; then
        echo "✅ On $current_branch - feature/fix branch"
    else
        echo "⚠️  Non-standard branch: $current_branch"
    fi
}

# Run checks
check_status
check_branch_rules

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Ready to start development!"
```

## Important Reminders

1. **Never commit directly to main** - Always work on develop or feature branches
2. **Check .ai folder updates** - Ensure guidelines are current
3. **Run tests before committing** - Maintain code quality
4. **Update documentation** - Keep .ai context files current
5. **Follow branch naming** - feature/, fix/, chore/, style/, refactor/

## Quick Reference

- **Project Docs**: `.ai/context/architecture.md`
- **Coding Standards**: `.ai/context/conventions.md`
- **Design System**: `.ai/context/design-system.md`
- **Component Guide**: `.ai/prompts/component.md`
- **API Guide**: `.ai/prompts/api.md`

---

*This checklist ensures consistent project setup and prevents common issues. Run through it at the start of each Claude Code session.*