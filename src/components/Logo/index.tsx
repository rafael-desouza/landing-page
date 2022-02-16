import React from 'react'
import { LogoProps } from 'types/api'
import { getImageURL } from 'utils/getImageURL'
import * as S from './styles'

const Logo = ({ alternativeText, url }: LogoProps) => (
  <S.LogoWrapper src={getImageURL(url)} alt={alternativeText} />
)

export default Logo
