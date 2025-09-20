export interface HomeLink {
  label: string
  to?: string
  icon?: string
  trailingIcon?: string
  color?: string
  variant?: string
  size?: string
  target?: '_blank' | '_self'
}

export interface HomeHeroImage {
  src: string
  alt: string
  width?: number
  height?: number
}

export interface HomeHero {
  greeting?: string
  title: string
  description: string
  links?: HomeLink[]
  images?: HomeHeroImage[]
}

export interface HomeQuoteAuthorAvatar {
  src: string
  srcset?: string
  alt?: string
  width?: number
  height?: number
}

export interface HomeQuoteAuthor {
  name: string
  description?: string
  avatar?: HomeQuoteAuthorAvatar
}

export interface HomeQuote {
  quote: string
  author: HomeQuoteAuthor
}

export interface HomeExperienceCompany {
  name: string
  url: string
  icon: string
  color: string
}

export interface HomeExperienceItem {
  date: string
  position: string
  company: HomeExperienceCompany
}

export interface HomeSection {
  title: string
  description: string
}

export interface HomeQuotesSection extends HomeSection {
  items: HomeQuote[]
}

export interface HomeExperienceSection extends HomeSection {
  items: HomeExperienceItem[]
}

export interface HomePageContent {
  seo?: {
    title: string
    description: string
  }
  title: string
  description: string
  hero: HomeHero
  about: HomeSection
  experience: HomeExperienceSection
  quotes: HomeQuotesSection
  blog: HomeSection
}
