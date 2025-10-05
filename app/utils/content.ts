import type { ContentNavigationItem, ParsedContentv2 } from '@nuxt/content'
import type { Ref } from 'vue'

type DocumentPage = (ParsedContentv2 & {
  titleTemplate?: string
  path?: string
}) | null | undefined

export function navPageFromPath(path: string, tree: ContentNavigationItem[]): ContentNavigationItem | undefined {
  for (const file of tree) {
    if (file.path === path) {
      return file
    }

    if (file.children) {
      const result = navPageFromPath(path, file.children)
      if (result) {
        return result
      }
    }
  }
}

export function findTitleTemplate(page: Ref<DocumentPage>, navigation: Ref<ContentNavigationItem[]>): string {
  if (!page.value?.path) {
    return '%s · SkepVox'
  }

  if (page.value.titleTemplate) {
    return page.value.titleTemplate
  }

  const parts = page.value.path.split('/')
  const items = []
  let current = navigation.value

  for (let index = 1; index < parts.length; index += 1) {
    const prefix = parts.slice(0, index + 1).join('/')
    const node = current.find(item => item.path === prefix)

    if (!node) break

    current = node.children
    items.unshift(node)
  }

  return items.find(item => typeof item.titleTemplate === 'string')?.titleTemplate || '%s · SkepVox'
}

export function getNavigationOrder(item: ContentNavigationItem): number {
  const nav = (item as any).navigation
  const navOrder = typeof nav?.order === 'number' ? nav.order : undefined
  const frontmatterOrder = typeof (item as any).order === 'number' ? (item as any).order : undefined
  return navOrder ?? frontmatterOrder ?? Number.MAX_SAFE_INTEGER
}

export function sortNavigation(items: ContentNavigationItem[] = []): ContentNavigationItem[] {
  return [...items]
    .map(item => ({
      ...item,
      children: item.children ? sortNavigation(item.children as ContentNavigationItem[]) : item.children
    }))
    .sort((a, b) => {
      const aOrder = getNavigationOrder(a)
      const bOrder = getNavigationOrder(b)
      if (aOrder !== bOrder) {
        return aOrder - bOrder
      }
      return String(a.title || '').localeCompare(String(b.title || ''))
    })
}

export function flattenNavigation(items: ContentNavigationItem[] = []): ContentNavigationItem[] {
  return sortNavigation(items).flatMap((item) => {
    const children = Array.isArray(item.children) ? flattenNavigation(item.children as ContentNavigationItem[]) : []
    if ((item as any).page === false || (children.length && children.some(child => child.path === item.path))) {
      return children
    }
    const { children: _children, ...rest } = item as ContentNavigationItem & { children?: ContentNavigationItem[] }
    return [{ ...rest }, ...children]
  })
}
