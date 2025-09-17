# Internationalization (i18n) Implementation Guide for Riobaldo (Nuxt 4)

This guide describes a safe, incremental, and production‑ready way to implement internationalization for three locales in this project:

- pt-BR — Portuguese (Brazil) — current default
- en — English
- fr — French

## Current Implementation Snapshot

- `@nuxtjs/i18n` v10 with `prefix_except_default` and JSON messages stored under `i18n/locales` (default `restructureDir` is already `i18n`).
- Default locale `pt-BR`; `/en` and `/fr` receive prefixed routes, while `/blog` stays unprefixed via route opt-out plus `defineI18nRoute(false)`.
- Core UI strings (layout, navigation, footer, homepage) now use `$t`/`useI18n`; add new keys in the locale JSON before referencing them in components.
- Locale switcher lives in `AppHeader.vue` and relies on the locale metadata (`code`, `name`) defined in `nuxt.config.ts`.
- Head/meta handling centralised in `app/app.vue` with `useLocaleHead` for HTML attributes and `useSeoMeta` fallbacks.

It covers routing strategy, UI translations, SEO, content localization with `@nuxt/content`, and migration tactics to avoid breaking existing pages or builds. Follow the phases in order for a smooth rollout.

--------------------------------------------------------------------------------

## Goals & Principles

- Keep changes incremental and reversible.
- Prefer non-breaking defaults: English as default locale, localized prefixes for others.
- Start with UI strings (Phase 1), then progressively localize content (Phase 2+).
- Ensure SSR/SEO correctness: `lang` attributes, `hreflang` links, canonical URLs.
- Keep bundle size reasonable and avoid regressions in prerendering.

--------------------------------------------------------------------------------

## Prerequisites

- Nuxt 4.x (already present)
- `@nuxtjs/i18n` v10.x (already listed in `package.json`)
- `@nuxt/content` configured (already present)

Optional but recommended:
- Node.js ≥ 18.20 (or ≥ 20) environment.
- Vercel environment variables for any secrets; never commit `.env`.

--------------------------------------------------------------------------------

## Phase 1 — Enable i18n (UI only)

This phase integrates `@nuxtjs/i18n` for UI strings without touching content. It gives you locale routing, a language switcher, and SEO signals. Content remains in the current language until Phase 2.

### 1. Add the module and basic config

Edit `nuxt.config.ts` to enable i18n with a path‑prefix strategy. Example:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    // ...existing modules
    '@nuxtjs/i18n'
  ],

  i18n: {
    // Use English as default and do not prefix it
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    lazy: true,
    langDir: 'locales',
    locales: [
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
      { code: 'fr', iso: 'fr-FR', name: 'Français', file: 'fr.json' },
      { code: 'pt-BR', iso: 'pt-BR', name: 'Português (Brasil)', file: 'pt-BR.json' }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // Only do automatic redirect on root path
      alwaysRedirect: false
    },
    // Enables <html lang>, hreflang alternates, etc.
    experimental: {
      localeDetector: 'header'
    }
  }
})
```

Notes:
- `strategy: 'prefix_except_default'` keeps English at `/...` and prefixes others at `/fr/...` and `/pt-BR/...`.
- `lazy + langDir` loads translation files on demand.
- The `experimental.localeDetector` defaults are safe; we limit automatic redirects to the root path.

### 2. Create translation files

Create `i18n/locales/en.json`, `i18n/locales/fr.json`, `i18n/locales/pt-BR.json` with at least the UI strings used on the homepage, header, footer, and banners.

Example seeds (expand as needed):

```json
// i18n/locales/en.json
{
  "app": {
    "siteName": "Riobaldo",
    "tagline": "Philosophy & Mathematics"
  },
  "home": {
    "title": "Riobaldo - Philosophy and Mathematics",
    "description": "An educational platform for studying philosophy and algebra at high school level.",
    "exploreLavelle": "Explore Lavelle",
    "studyAlgebra": "Study Algebra"
  },
  "banner": {
    "title": "Get the official course for Nuxt 4 and save $50 with code NUXT4RDY",
    "cta": "Claim discount"
  }
}
```

```json
// i18n/locales/fr.json
{
  "app": {
    "siteName": "Riobaldo",
    "tagline": "Philosophie & Mathématiques"
  },
  "home": {
    "title": "Riobaldo - Philosophie et Mathématiques",
    "description": "Plateforme éducative pour l'étude de la philosophie et de l'algèbre au lycée.",
    "exploreLavelle": "Explorer Lavelle",
    "studyAlgebra": "Étudier l'Algèbre"
  },
  "banner": {
    "title": "Obtenez le cours officiel pour Nuxt 4 et économisez 50 $ avec le code NUXT4RDY",
    "cta": "Profiter de la réduction"
  }
}
```

```json
// i18n/locales/pt-BR.json
{
  "app": {
    "siteName": "Riobaldo",
    "tagline": "Filosofia e Matemática"
  },
  "home": {
    "title": "Riobaldo - Filosofia e Matemática",
    "description": "Plataforma educacional para o estudo de filosofia e álgebra no ensino médio.",
    "exploreLavelle": "Explorar Lavelle",
    "studyAlgebra": "Estudar Álgebra"
  },
  "banner": {
    "title": "Faça o curso oficial de Nuxt 4 e economize US$ 50 com o código NUXT4RDY",
    "cta": "Resgatar desconto"
  }
}
```

### 3. Replace hardcoded UI strings

Update components and pages to use `useI18n()` or `$t` instead of hardcoded text. Examples:

Header/meta in `app/app.vue`:

```ts
// app/app.vue (script setup)
const { t, locale } = useI18n()

useHead({
  titleTemplate: title => title ? `${title} · ${t('app.siteName')}` : `${t('app.siteName')}: ${t('app.tagline')}`
})

// SEO (localized)
useSeoMeta({
  twitterSite: 'skepvox' // keep as-is if constant
})

// html lang + hreflang
const { head } = useLocaleHead({ addDirAttribute: true, addSeoAttributes: true })
useHead(head)
```

Homepage in `app/pages/index.vue` (replace static FR strings):

```vue
<template>
  <UPageHero>
    <template #title>
      {{ $t('app.siteName') }}<br>
      <span class="text-primary">{{ $t('app.tagline') }}</span>
    </template>
    <template #description>
      <p class="text-lg">{{ $t('home.description') }}</p>
    </template>
    <template #links>
      <UButton to="/louis-lavelle" size="xl">{{ $t('home.exploreLavelle') }}</UButton>
      <UButton to="/modules" size="xl" color="neutral" variant="subtle">{{ $t('home.studyAlgebra') }}</UButton>
    </template>
  </UPageHero>
</template>
```

Banner in `app/layouts/default.vue`:

```vue
<UBanner
  :title="$t('banner.title')"
  ...
  :actions="[{ label: $t('banner.cta'), ... }]"
/>
```

### 4. Language switcher

Add a locale switcher to your header or footer using helpers from `@nuxtjs/i18n`:

```vue
<script setup lang="ts">
const { locales, locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <div class="flex items-center gap-2">
    <NuxtLink
      v-for="l in locales"
      :key="l.code"
      :to="switchLocalePath(l.code)"
      class="text-sm"
      :class="{ 'font-semibold underline': l.code === locale }"
    >
      {{ l.name }}
    </NuxtLink>
  </div>
  <!-- Example: EN | Français | Português (Brasil) -->
  <!-- Consider a dropdown if you prefer. -->
  
</template>
```

### 5. SEO verification

Check that:
- `<html lang="...">` reflects the current locale.
- `<link rel="alternate" hreflang="...">` tags are injected.
- Titles and descriptions are localized.

Run locally and check `/`, `/fr`, `/pt-BR` pages.

--------------------------------------------------------------------------------

## Phase 2 — Content Localization (Docs, Blog, Collections)

After the UI is localized, progressively localize content. There are two common patterns compatible with `@nuxt/content`:

1) Suffix per file (recommended):
   - `index.en.md`, `index.fr.md`, `index.pt-BR.md`
   - Same directory and slug; i18n picks correct variant.

2) Per-locale subdirectories:
   - `en/..., fr/..., pt-BR/...`
   - Requires more routing discipline.

This project uses collections via `content.config.ts`. The suffix pattern is a safer increment because:
- No directory reshuffle.
- Easy to add partial translations.
- Nuxt Content injects `_locale` metadata.

### 1. File naming and frontmatter

For every localized page, create parallel files with locale suffixes, e.g.:

```
content/docs/getting-started/introduction.en.md
content/docs/getting-started/introduction.fr.md
content/docs/getting-started/introduction.pt-BR.md
```

Keep the same frontmatter schema. You can add an explicit `lang` or `seo` fields if needed; `@nuxt/content` will set `_locale` automatically from filename suffix.

### 2. Querying localized content

This codebase uses the new collections APIs: `queryCollection`, `queryCollectionNavigation`, etc. With localized files present, content navigation and queries generally resolve to the current route’s locale automatically. If you need explicit control, filter by `_locale`:

```ts
// Explicit filtering example if needed
const { locale } = useI18n()
const docs = await queryCollection('docs').where({ _locale: locale.value }).all()
```

In `app/pages/docs/[...slug].vue`, the existing `queryCollectionNavigation('docs')` and `queryCollection('docs')` should surface the right variant when localized files are present. If you observe cross‑locale bleed, add locale filtering as above to `asideNavigation`, `page`, and `surround` queries.

### 3. Navigation & search

The app builds navigation and search indices from content collections in `app/app.vue` using:

```ts
queryCollectionNavigation('docs')
queryCollectionSearchSections('docs')
```

As you add localized content, verify that navigation shows locale‑appropriate labels. If not, adjust to filter by `locale` or `_locale` similarly.

### 4. Redirects and route rules

You have many redirects in `nuxt.config.ts`. With `prefix_except_default`, i18n will mount routes under `/fr/...` and `/pt-BR/...` as needed. Keep the global redirects for default locale. For locale‑specific redirects, duplicate under prefixes only when you have differing destinations per language.

### 5. Gradual rollout

It’s perfectly safe to ship a mixed set:
- Default locale fully populated (en).
- Secondary locales partially populated: when a localized page is missing, the app should fallback to default locale content or show a clear “Not yet translated” notice.

To enforce fallback behavior in components that fetch content directly, you can implement a small helper:

```ts
async function fetchLocalizedPage(collection: string, path: string, locale: string) {
  const localized = await queryCollection(collection).path(path).where({ _locale: locale }).first()
  if (localized) return localized
  return await queryCollection(collection).path(path).where({ _locale: 'en' }).first()
}
```

--------------------------------------------------------------------------------

## Phase 3 — SEO, Analytics, and UX Polish

### 1. `i18nHead`/`useLocaleHead`

You already call `useHead` in `app/app.vue`. Add `useLocaleHead` (or `i18nHead`) to ensure `lang`, `dir`, and `hreflang` are always correct (see Phase 1 step 3). Confirm no duplicate `htmlAttrs` from other hooks.

### 2. Canonical and alternates

Where you set SEO for specific pages (e.g., docs), ensure canonical points to the current locale URL and alternates list other locales. The `useLocaleHead` output includes alternates; you may add an explicit canonical if needed.

### 3. Language‑aware OG images

If you include titles/descriptions in OG images (e.g., `defineOgImageComponent('Docs', ...)`), use `t()` for localized strings and confirm the `nuxt-og-image` pipeline handles non‑ASCII typography. For pt‑BR and fr, test diacritics rendering.

### 4. Analytics segmentation (optional)

If you use Plausible, configure goals/filters per locale prefix in the Plausible dashboard (no code change required). If using any other analytics, ensure the path prefixes are recognized.

--------------------------------------------------------------------------------

## Edge Cases & Safety Checklist

- Locale code in URLs: `pt-BR` contains a hyphen. `@nuxtjs/i18n` handles this. Verify route generation (`/pt-BR/...`) and switcher.
- Client‑only integrations: i18n changes should not affect `app/plugins/adblock.ts`, `newsletter.client.ts`, or `kapa.client.ts`.
- Prerender noise: With `nitro.prerender.crawlLinks: true`, avoid crawling links to untranslated content during build. Options:
  - Temporarily set `crawlLinks: false` during rollout, or
  - Gate links in templates by locale availability, or
  - Keep `failOnError: false` (already set) and accept warnings.
- Content collections: Some collections (e.g., Louis Lavelle, Marcus Aurelius) use deep custom paths. Localize only where it makes sense; keep originals in their language if that’s the intended scholarly source.

--------------------------------------------------------------------------------

## Testing Plan

1) Local
- Navigate to `/`, `/fr`, `/pt-BR` and verify:
  - Language switcher works
  - `<html lang>` changes
  - `hreflang` alternates present
  - Headline and banner localized

2) Content
- Duplicate 1–2 docs pages using the suffix approach (`.fr.md`, `.pt-BR.md`) and confirm docs navigation + page body switch per locale.

3) Build
- `pnpm build` locally; confirm no fatal prerender errors.

4) Vercel Preview
- Deploy a preview (PR); validate that redirects and locale prefixes behave correctly.

--------------------------------------------------------------------------------

## Rollback Plan

- Disable i18n by removing `@nuxtjs/i18n` from `modules` and the `i18n` config block in `nuxt.config.ts`.
- Keep `i18n/locales/*.json` in the repo (harmless) or remove them later.
- Revert UI strings to the previous hardcoded text only if necessary (but prefer keeping translation hooks for future work).

--------------------------------------------------------------------------------

## Suggested Follow‑ups (Optional)

- Add an “Untranslated” badge or notice for content that falls back to default locale.
- Centralize common UI strings (header/footer/buttons) to minimize translation surface.
- Add a GitHub Action to validate `en.json`, `fr.json`, and `pt-BR.json` schemas match (keys present) using a simple script.

--------------------------------------------------------------------------------

## Reference: Files to Touch

- `nuxt.config.ts` — enable `@nuxtjs/i18n` and add `i18n` block.
- `i18n/locales/en.json`, `i18n/locales/fr.json`, `i18n/locales/pt-BR.json` — add UI translations.
- `app/app.vue`, `app/layouts/default.vue`, `app/pages/index.vue` — replace hardcoded text with `$t()` and add `useLocaleHead`.
- `app/pages/docs/[...slug].vue` — verify content queries pick the current locale; add `_locale` filters if required.
- `content/**` — add localized file variants using the suffix pattern (`.en.md`, `.fr.md`, `.pt-BR.md`).

--------------------------------------------------------------------------------

## Minimal Diff Examples

1) `nuxt.config.ts`

```diff
 modules: [
   '@nuxt/ui-pro',
   'nuxt-content-twoslash',
   '@nuxt/content',
   '@nuxt/image',
   '@nuxtjs/plausible',
   '@nuxt/eslint',
   '@nuxt/scripts',
   '@vueuse/nuxt',
   'nuxt-og-image',
   'motion-v/nuxt',
   'nuxt-llms',
   'nuxt-charts',
+  '@nuxtjs/i18n'
 ],

+ i18n: {
+   defaultLocale: 'en',
+   strategy: 'prefix_except_default',
+   lazy: true,
+   langDir: 'app/locales',
+   locales: [
+     { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
+     { code: 'fr', iso: 'fr-FR', name: 'Français', file: 'fr.json' },
+     { code: 'pt-BR', iso: 'pt-BR', name: 'Português (Brasil)', file: 'pt-BR.json' }
+   ],
+   detectBrowserLanguage: {
+     useCookie: true,
+     cookieKey: 'i18n_redirected',
+     redirectOn: 'root',
+     alwaysRedirect: false
+   }
+ }
```

2) `app/app.vue` (head + SEO)

```diff
 const colorMode = useColorMode()
+const { t } = useI18n()

 useHead({
-  titleTemplate: title => title ? `${title} · Riobaldo` : 'Riobaldo: Platform for Philosophical and Algebraic Studies',
+  titleTemplate: title => title ? `${title} · ${t('app.siteName')}` : `${t('app.siteName')}: ${t('app.tagline')}`,
   meta: [
     { key: 'theme-color', name: 'theme-color', content: color }
   ]
 })

+const { head } = useLocaleHead({ addDirAttribute: true, addSeoAttributes: true })
+useHead(head)
```

That’s it for a safe baseline. Expand translations gradually and verify prerender output in Vercel previews.
