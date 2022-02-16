import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { SectionAboutProjectProps } from 'types/api'
import { getImageURL } from 'utils/getImageURL'

type Props = {
  aboutProject: SectionAboutProjectProps
}

const SectionAboutProject = ({ aboutProject }: Props) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image
          src={getImageURL(aboutProject.image.url)}
          alt={aboutProject.image.alternativeText}
          loading="lazy"
        />
        <div>
          <Heading>{aboutProject.title}</Heading>
          <S.Text
            dangerouslySetInnerHTML={{ __html: aboutProject.description }}
          />
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
