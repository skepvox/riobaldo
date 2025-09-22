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
    // Louis Lavelle redirects
    '/louis-lavelle/manual-de-metodologia-dialetica': { redirect: '/louis-lavelle/manual-de-metodologia-dialetica/livro-01/reflexao-e-metodo', prerender: false },
    '/louis-lavelle/manual-de-metodologia-dialetica/livro-01': { redirect: '/louis-lavelle/manual-de-metodologia-dialetica/livro-01/reflexao-e-metodo', prerender: false },
    '/louis-lavelle/manual-de-metodologia-dialetica/livro-02': { redirect: '/louis-lavelle/manual-de-metodologia-dialetica/livro-02/a-dialetica-da-consciencia', prerender: false },
    '/louis-lavelle/manual-de-metodologia-dialetica/livro-03': { redirect: '/louis-lavelle/manual-de-metodologia-dialetica/livro-03/descoberta-e-significacao', prerender: false },
    '/louis-lavelle/manuel-de-methodologie-dialectique': { redirect: '/louis-lavelle/manuel-de-methodologie-dialectique/livre-01/reflexion-et-methode', prerender: false },
    '/louis-lavelle/manuel-de-methodologie-dialectique/livre-01': { redirect: '/louis-lavelle/manuel-de-methodologie-dialectique/livre-01/reflexion-et-methode', prerender: false },
    '/louis-lavelle/manuel-de-methodologie-dialectique/livre-02': { redirect: '/louis-lavelle/manuel-de-methodologie-dialectique/livre-02/la-dialectique-de-la-conscience', prerender: false },
    '/louis-lavelle/manuel-de-methodologie-dialectique/livre-03': { redirect: '/louis-lavelle/manuel-de-methodologie-dialectique/livre-03/decouverte-et-signification', prerender: false }
    // Marcus Aurelius redirects
  },
  sourcemap: true,
  experimental: {
    payloadExtraction: false
  },
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
    provider: 'vercel',
    screens: {
      'avatar': 40,
      'avatar2x': 80,
      'lg': 1024,
      'xl': 1280,
      '2xl': 1536
    }
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
