export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
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
