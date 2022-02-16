import React from 'react'

import { GrGithub } from 'react-icons/gr'
import { FaDribbble, FaTwitter } from 'react-icons/fa'

import * as S from './styles'
import { AuthorsProps } from 'types/api'
import { getImageURL } from 'utils/getImageURL'

const icons = {
  twitter: <FaTwitter />,
  github: <GrGithub />,
  dribbble: <FaDribbble />
}

const ProfileCard: React.FC<AuthorsProps> = ({
  name,
  role,
  photo,
  socialLinks,
  description
}) => (
  <S.Card key={name}>
    <S.Image src={getImageURL(photo.url)} alt={photo.alternativeText} />
    <S.Name>{name}</S.Name>
    <S.Role>{role}</S.Role>

    <S.Description>{description}</S.Description>
  </S.Card>
)

export default ProfileCard
