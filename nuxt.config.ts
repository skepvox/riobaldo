import { createResolver } from 'nuxt/kit'
import { parseMdc } from './helpers/mdc-parser.mjs'

const { resolve } = createResolver(import.meta.url)

// Riobaldo configuration
export default defineNuxtConfig({
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
    'nuxt-charts'
  ],
  $development: {
    site: {
      url: 'http://localhost:3000'
    }
  },
  devtools: {
    enabled: true
  },
  app: {
    pageTransition: false,
    layoutTransition: false
  },
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'dark'
  },
  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: 'material-theme-lighter',
            dark: 'material-theme-palenight'
          },
          langs: ['sql', 'diff', 'ini']
        }
      }
    }
  },
  mdc: {
    highlight: {
      noApiRoute: false
    }
  },
  ui: {
    theme: {
      colors: ['primary', 'secondary', 'info', 'success', 'warning', 'error', 'important']
    }
  },
  routeRules: {
    // Pre-render
    '/': { prerender: true }, // Enable prerender for homepage
    // '/blog/rss.xml': { prerender: true }, // Commented out - route doesn't exist
    '/404.html': { prerender: true },
    '/docs/getting-started/introduction': { prerender: true },
    // Redirects
    '/docs': { redirect: '/docs/getting-started/introduction', prerender: false },
    '/docs/getting-started': { redirect: '/docs/getting-started/introduction', prerender: false },
    '/docs/guide/concepts': { redirect: '/docs/guide/concepts/auto-imports', prerender: false },
    '/docs/guide/directory-structure': { redirect: '/docs/guide/directory-structure/app', prerender: false },
    '/docs/guide/going-further': { redirect: '/docs/guide/going-further/experimental-features', prerender: false },
    '/docs/guide/going-further/edge-release-channel': { redirect: '/docs/guide/going-further/nightly-release-channel', prerender: false },
    '/docs/guide/recipes': { redirect: '/docs/guide/recipes/custom-routing', prerender: false },
    '/docs/guide/best-practices': { redirect: '/docs/guide/best-practices/performance', prerender: false },
    '/docs/guide/going-further/custom-routing': { redirect: '/docs/guide/recipes/custom-routing', prerender: false },
    // Ethos redirects
    '/ethos': { redirect: '/ethos/louis-lavelle/manual-de-metodologia-dialetica/livro-1/reflexao-e-metodo', prerender: false },
    '/ethos/manuel-de-methodologie-dialectique': { redirect: '/ethos/manual-de-metodologia-dialetica/reflexao-e-metodo', prerender: false },
    '/ethos/louis-lavelle': { redirect: '/ethos/louis-lavelle/manual-de-metodologia-dialetica/livro-1/reflexao-e-metodo', prerender: false },
    '/ethos/louis-lavelle/manual-de-metodologia-dialetica': { redirect: '/ethos/louis-lavelle/manual-de-metodologia-dialetica/livro-1/reflexao-e-metodo', prerender: false },
    '/ethos/louis-lavelle/manual-de-metodologia-dialetica/livro-1': { redirect: '/ethos/louis-lavelle/manual-de-metodologia-dialetica/livro-1/reflexao-e-metodo', prerender: false },
    '/ethos/louis-lavelle/manuel-de-methodologie-dialectique': { redirect: '/ethos/louis-lavelle/manuel-de-methodologie-dialectique/livre-1/reflexion-et-methode', prerender: false },
    '/ethos/louis-lavelle/manuel-de-methodologie-dialectique/livre-1': { redirect: '/ethos/louis-lavelle/manuel-de-methodologie-dialectique/livre-1/reflexion-et-methode', prerender: false },
    // Marcus Aurelius redirects
    '/ethos/marcus-aurelius': { redirect: '/ethos/marcus-aurelius/para-si-mesmo/livro-01', prerender: false },
    '/ethos/marcus-aurelius/para-si-mesmo': { redirect: '/ethos/marcus-aurelius/para-si-mesmo/livro-01', prerender: false },
    '/ethos/marcus-aurelius/ta-eis-heauton': { redirect: '/ethos/marcus-aurelius/ta-eis-heauton/biblio-alpha', prerender: false }
  },
  sourcemap: true,
  compatibilityDate: '2025-07-17',
  nitro: {
    preset: 'vercel',
    prerender: {
      crawlLinks: true,
      routes: ['/'], // Enable prerendering for homepage
      autoSubfolderIndex: false,
      failOnError: false // Continue build even if some pages fail to prerender
    }
  },
  typescript: {
    strict: false
  },
  hooks: {
    'content:file:afterParse': async ({ file, content }) => {
      if (file.id === 'index/index.yml') {
        // @ts-expect-error -- TODO: fix this
        for (const tab of content.hero.tabs) {
          tab.content = await parseMdc(tab.content)
        }
        // @ts-expect-error -- TODO: fix this
        delete content.meta.body
      }
    }
  },
  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never'
      }
    }
  },
  icon: {
    customCollections: [{
      prefix: 'custom',
      dir: resolve('./app/assets/icons')
    }],
    clientBundle: {
      scan: true,
      includeCustomCollections: true
    },
    provider: 'iconify'
  },
  image: {
    format: ['webp', 'jpeg', 'jpg', 'png', 'svg'],
    provider: 'vercel'
  },
  llms: {
    domain: 'https://riobaldo.com',
    title: 'Riobaldo',
    description: 'Riobaldo is a platform for philosophical and algebraic studies, offering comprehensive educational content and resources for advanced learning.',
    full: {
      title: 'Riobaldo',
      description: 'Platform for philosophical and algebraic studies with complete documentation and educational content.'
    }
  },
  twoslash: {
    floatingVueOptions: {
      classMarkdown: 'prose prose-primary dark:prose-invert'
    },
    // Skip Twoslash in dev to improve performance. Turn this on when you want to explicitly test twoslash in dev.
    enableInDev: false,
    // Do not throw when twoslash fails, the typecheck should be down in github.com/nuxt/nuxt's CI
    throws: false
  }
})
