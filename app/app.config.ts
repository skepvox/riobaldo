export default defineAppConfig({
  global: {
    available: true,
    meetingLink: undefined,
    email: 'skepvox@gmail.com',
    picture: {
      dark: 'https://github.com/skepvox.png?size=512',
      light: 'https://github.com/skepvox.png?size=512',
      alt: 'Retrato de Thiago Oliveira'
    }
  },
  ui: {
    colors: {
      primary: 'indigo', // Deep wisdom, knowledge
      secondary: 'amber', // Enlightenment, golden ratio
      neutral: 'stone', // Ancient texts, parchment
      important: 'purple', // Royal, philosophical tradition
      success: 'emerald', // Growth, understanding
      warning: 'amber', // Caution in reasoning
      error: 'rose' // Logical fallacies
    }
  },
  uiPro: {
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    },
    prose: {
      img: {
        base: 'w-full'
      },
      codeTree: {
        slots: {
          root: 'bg-default m-0',
          content: '[&>div>pre]:rounded-r-none'
        }
      }
    }
  }
})
