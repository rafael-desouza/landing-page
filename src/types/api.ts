export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}

export type LogoProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: ButtonProps
  image: ImageProps
}

export type ButtonProps = {
  label: string
  url: string
}

export type ImageProps = {
  alternativeText: string
  url: string
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: ImageProps
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type TechIcon = {
  title: string
  icon: {
    url: string
  }
}

export type SectionConceptsProps = {
  title: string
  concepts: ConceptsProps[]
}

export type ConceptsProps = {
  id: number
  title: string
}

export type SectionModulesProps = {
  title: string
  modules: ModuleProps[]
}

export type ModuleProps = {
  title: string
  subtitle: string
  description: string
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: ButtonProps
}

export type SectionAboutUsProps = {
  title: string
  authors: AuthorsProps[]
}

export type AuthorsProps = {
  photo: ImageProps
  role: string
  name: string
  description: string
  socialLinks: SocialLinksProps[]
}

export type SocialLinksProps = {
  title: string
  url: string
}

export type SectionReviewsProps = {
  title: string
  reviews: ReviewProps[]
}

export type ReviewProps = {
  name: string
  text: string
  photo: ImageProps
}

export type SectionFaqProps = {
  title: string
  questions: Question[]
}

export type Question = {
  question: string
  answer: string
}
