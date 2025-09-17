import type { ContentNavigationItem } from '@nuxt/content'

/**
 * Unified navigation filtering for i18n support
 * This ensures consistent filtering across sidebar and mobile navigation
 */

// Helper to normalize locale codes for comparison
export const normalizeLocaleCode = (code: string) => code.toLowerCase()

// Strip numeric prefixes from paths (e.g., "1.introduction" -> "introduction")
export const stripNumericSegments = (value?: string) => {
  if (!value) return value
  return value.replace(/\/\d+\.([^/]+)/g, '/$1')
}

// Extract locale from file suffix (e.g., "file.en.md" -> { basePath: "file", locale: "en" })
export const splitLocaleFromPath = (value: string | undefined, localeList: string[]) => {
  if (!value) {
    return { basePath: value, locale: null }
  }

  // Check for locale suffix pattern (e.g., .en, .fr, .pt-BR)
  const match = value.match(/^(.*)\.([a-z0-9-]+)$/)
  if (match) {
    const localeSuffix = match[2].toLowerCase()
    if (localeList.includes(localeSuffix)) {
      return { basePath: match[1], locale: localeSuffix }
    }
  }

  // Check for locale in path segments (e.g., /en/, /fr/)
  for (const locale of localeList) {
    if (value.includes(`/${locale}/`)) {
      return { basePath: value.replace(`/${locale}/`, '/'), locale }
    }
  }

  return { basePath: value, locale: null }
}

// Check if item should be included based on current locale
export const shouldIncludeInLocale = (
  path: string | undefined,
  currentLocale: string,
  localeList: string[],
  defaultLocale = 'pt-br'
): boolean => {
  if (!path) return true

  const normalizedCurrent = normalizeLocaleCode(currentLocale)
  const normalizedDefault = normalizeLocaleCode(defaultLocale)

  // Extract locale from the path
  const { locale: pathLocale } = splitLocaleFromPath(stripNumericSegments(path), localeList)

  // If no locale found in path, it's for the default locale
  if (!pathLocale) {
    return normalizedCurrent === normalizedDefault
  }

  // Check if path locale matches current locale
  return normalizeLocaleCode(pathLocale) === normalizedCurrent
}

// Main filtering function for navigation items
export const filterNavigationByLocale = (
  items: ContentNavigationItem[] = [],
  currentLocale: string,
  localeList: string[],
  defaultLocale = 'pt-BR'
): ContentNavigationItem[] => {
  const filtered: ContentNavigationItem[] = []
  const normalizedLocaleList = localeList.map(l => normalizeLocaleCode(l))

  for (const item of items) {
    // Check if the item itself should be included
    const candidatePath = item.path || (typeof item.to === 'string' ? item.to : undefined)
    const shouldIncludeItem = shouldIncludeInLocale(
      candidatePath,
      currentLocale,
      normalizedLocaleList,
      defaultLocale
    )

    // Recursively filter children
    const children = item.children
      ? filterNavigationByLocale(item.children, currentLocale, localeList, defaultLocale)
      : []

    // Skip items that don't match locale and have no matching children
    if (!shouldIncludeItem && children.length === 0) {
      continue
    }

    // Create filtered item
    const next: ContentNavigationItem = { ...item }

    // Update children if any
    if (children.length > 0) {
      next.children = children
    } else if (next.children) {
      delete next.children
    }

    // Update path to include locale prefix if needed (for non-default locales)
    if (candidatePath && candidatePath.startsWith('/')) {
      const { basePath } = splitLocaleFromPath(stripNumericSegments(candidatePath), normalizedLocaleList)
      if (basePath && normalizeLocaleCode(currentLocale) !== normalizeLocaleCode(defaultLocale)) {
        // Add locale prefix for non-default locales
        if (!candidatePath.includes(`/${currentLocale}/`)) {
          const localePath = `/${currentLocale}${basePath}`
          next.path = localePath
          if (typeof item.to === 'string') {
            next.to = localePath
          }
        }
      }
    }

    filtered.push(next)
  }

  // Sort by order metadata or alphabetically
  filtered.sort((a, b) => {
    const orderA = typeof (a as any).meta?.order === 'number' ? (a as any).meta.order : Number.POSITIVE_INFINITY
    const orderB = typeof (b as any).meta?.order === 'number' ? (b as any).meta.order : Number.POSITIVE_INFINITY

    if (orderA !== orderB) {
      return orderA - orderB
    }

    const titleA = a.title || ''
    const titleB = b.title || ''
    return titleA.localeCompare(titleB)
  })

  return filtered
}
