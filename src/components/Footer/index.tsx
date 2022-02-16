import React from 'react'

import Container from 'components/Container'

import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Container>
      <p>
        Desenvolvido por{' '}
        <a href="https://rafael-desouza.github.io">Rafael Ferreira de Souza </a>
        e
      </p>
      <p>
        Design por <a href="https://dribbble.com/vmarcosp">Marcos Oliveira</a>
      </p>
    </Container>
  </S.Wrapper>
)

export default Footer
