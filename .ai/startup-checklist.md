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

## Branch Decision Tree

- **On main?** → Switch to develop: `git checkout develop`
- **On develop?** → Check if up to date, create feature branch if needed
- **On feature?** → Ensure based on develop, continue work

*See `.ai/context/conventions.md` for full Git workflow guidelines*

## Quick Commands

```bash
# Quick start
git checkout develop && git pull
pnpm install && pnpm dev

# New feature
git checkout -b feature/[name]
```

*See `.ai/context/architecture.md` for full development workflow*

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

---

*Run this checklist at the start of each Claude Code session. Reference other `.ai/` docs for detailed guidelines.*