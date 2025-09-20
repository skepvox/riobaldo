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
        container: 'py-10 sm:py-20 lg:py-20',
        title: 'sm:text-5xl'
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
