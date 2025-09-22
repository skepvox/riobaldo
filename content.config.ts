import { defineContentConfig, defineCollection, z } from '@nuxt/content'

const Image = z.object({
  src: z.string(),
  alt: z.string(),
  width: z.number().optional(),
  height: z.number().optional()
})

const DualModeImage = z.object({
  light: z.string().editor({ input: 'media' }),
  dark: z.string().editor({ input: 'media' }),
  width: z.number().optional(),
  height: z.number().optional(),
  alt: z.string().optional()
})

const Link = z.object({
  label: z.string(),
  to: z.string(),
  icon: z.string().optional()
})

const Button = z.object({
  label: z.string(),
  icon: z.string().optional(),
  trailingIcon: z.string().optional(),
  to: z.string().optional(),
  color: z.enum(['primary', 'neutral', 'success', 'warning', 'error', 'info']).optional(),
  size: z.enum(['xs', 'sm', 'md', 'lg', 'xl']).optional(),
  variant: z.enum(['solid', 'outline', 'subtle', 'soft', 'ghost', 'link']).optional(),
  id: z.string().optional(),
  target: z.enum(['_blank', '_self']).optional()
})

const BaseSection = z.object({
  title: z.string(),
  description: z.string()
})

const Author = z.object({
  name: z.string(),
  description: z.string().optional(),
  username: z.string().optional(),
  twitter: z.string().optional(),
  bluesky: z.string().optional(),
  to: z.string().optional(),
  avatar: Image.optional()
})

const Testimonial = z.object({
  quote: z.string(),
  author: Author
})

const QuoteAuthorAvatar = z.object({
  src: z.string(),
  srcset: z.string().optional(),
  alt: z.string().optional()
}).optional()

const Quote = z.object({
  quote: z.string(),
  author: z.object({
    name: z.string(),
    description: z.string().optional(),
    avatar: QuoteAuthorAvatar
  })
})

const ExperienceItem = z.object({
  date: z.string(),
  position: z.string(),
  company: z.object({
    name: z.string(),
    url: z.string().url(),
    icon: z.string().editor({ input: 'icon' }),
    color: z.string()
  })
})

const PageFeature = z.object({
  title: z.string(),
  description: z.string(),
  icon: z.string().editor({ input: 'icon' }),
  to: z.string().optional(),
  target: z.enum(['_blank', '_self']).optional(),
  soon: z.boolean().optional()
})

const PageSection = BaseSection.extend({
  links: z.array(Button),
  features: z.array(PageFeature),
  image: DualModeImage,
  cta: z.object({
    title: z.string(),
    label: z.string(),
    to: z.string(),
    icon: z.string()
  }).optional()
})

const PageHero = BaseSection.extend({
  image: DualModeImage.optional(),
  head: z.object({
    title: z.string().optional(),
    description: z.string().optional()
  }).optional(),
  headline: z.object({
    label: z.string(),
    to: z.string(),
    icon: z.string().optional().editor({ input: 'icon' })
  }).optional(),
  links: z.array(Button).optional(),
  cta: Link.optional()
})

export default defineContentConfig({
  collections: {
    home: defineCollection({
      type: 'page',
      source: 'home.yml',
      schema: z.object({
        seo: z.object({
          title: z.string(),
          description: z.string()
        }).optional(),
        title: z.string(),
        description: z.string(),
        hero: z.object({
          greeting: z.string().optional(),
          title: z.string(),
          description: z.string(),
          links: z.array(Button).optional(),
          images: z.array(Image).optional()
        }),
        about: BaseSection,
        experience: BaseSection.extend({
          items: z.array(ExperienceItem)
        }),
        quotes: BaseSection.extend({
          items: z.array(Quote)
        }),
        blog: BaseSection
      })
    }),
    index: defineCollection({
      type: 'data',
      source: 'index.yml',
      schema: z.object({
        hero: z.object({
          title: z.string(),
          description: z.string(),
          cta: Link.extend({
            icon: z.string()
          }),
          tabs: z.array(z.object({
            title: z.string(),
            icon: z.string(),
            content: z.string()
          }))
        }),
        logos: z.object({
          title: z.string(),
          companies: z.array(DualModeImage)
        }),
        features: PageSection,
        foundation: PageSection.extend({
          items: z.array(z.object({
            id: z.string(),
            title: z.string(),
            description: z.string(),
            logo: z.string(),
            color: z.string(),
            gradient: z.string(),
            link: Link
          }))
        }),
        testimonial: Testimonial,
        deploy: PageSection,
        stats: PageSection.extend({
          community: BaseSection,
          x: z.number(),
          discord: z.string(),
          cta: Button
        }),
        support: PageSection.extend({
          companies: z.array(Image.pick({ src: true, alt: true }))
        }),
        sponsors: PageSection.extend({
          cta: Button
        })
      })
    }),
    blog: defineCollection({
      type: 'page',
      source: 'blog/*',
      schema: z.object({
        image: z.string().editor({ input: 'media' }),
        authors: z.array(Author),
        date: z.string().date(),
        draft: z.boolean().optional(),
        category: z.enum(['Release', 'Tutorial', 'Announcement', 'Article']),
        tags: z.array(z.string())
      })
    }),
    landing: defineCollection({
      type: 'page',
      source: [
        { include: 'blog.yml' },
        { include: 'louis-lavelle.yml' }
      ],
      schema: PageHero
    }),
    louisLavelle: defineCollection({
      type: 'page',
      source: 'louis-lavelle/**/*',
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        author: z.string().optional(),
        date: z.string().date().optional(),
        tags: z.array(z.string()).optional()
      })
    })
  }
})
