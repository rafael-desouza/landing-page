import React, { useEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import { ReviewProps } from 'types/api'
import { getImageURL } from 'utils/getImageURL'

import * as S from './styles'

const ReviewCard: React.FC<{ ReviewProps: ReviewProps; id: number }> = ({
  id,
  ReviewProps: reviewProps
}) => {
  useEffect(() => {
    const texts = document.querySelectorAll('p.description')

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        entry.target.classList[
          entry.target.scrollHeight > entry.contentRect.height + 25
            ? 'add'
            : 'remove'
        ]('truncated')
      }
    })

    texts.forEach((text) => observer.observe(text))
  })

  return (
    <S.Card>
      <S.User>
        <S.Image
          src={getImageURL(reviewProps.photo.url)}
          alt={reviewProps.name}
        />
        <S.Name>{reviewProps.name}</S.Name>
      </S.User>
      <S.Text>
        <input type="checkbox" id={`review-${id}`} />
        <p className="description">{reviewProps.text}</p>
        <label className="label-more" htmlFor={`review-${id}`}>
          Ver tudo
        </label>
      </S.Text>
    </S.Card>
  )
}

export default ReviewCard
