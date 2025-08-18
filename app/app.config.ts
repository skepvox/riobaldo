export default defineAppConfig({
  global: {
    picture: {
      dark: 'https://github.com/skepvox.png?size=512',
      light: 'https://github.com/skepvox.png?size=512',
      alt: 'Minha imagem de perfil'
    },
    // meetingLink: '/',
    email: 'skepvox@gmail.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    }
  },
  uiPro: {
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Copyright © ${new Date().getFullYear()} Thiago Oliveira`,
    colorMode: false,
    links: [
      {
        'icon': 'i-simple-icons-instagram',
        'to': 'https://instagram.com/skepvox',
        'target': '_blank',
        'aria-label': 'Instagram'
      },
      // {
      //   'icon': 'i-simple-icons-x',
      //   'to': 'https://x.com/skepvox',
      //   'target': '_blank',
      //   'aria-label': 'X'
      // },
      // {
      //   'icon': 'i-simple-icons-github',
      //   'to': 'https://github.com/skepvox',
      //   'target': '_blank',
      //   'aria-label': 'GitHub'
      // }
    ]
  }
})
