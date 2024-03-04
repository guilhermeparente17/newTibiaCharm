import React from 'react'
import { CardContainer, CardImage, CardSpan, CardStatus, CardTitle } from './Card.Elements'
import { useStore } from '../../zustand/store'

const Card = ({creature}) => {
  const {setAddCreatureCreatedRune} = useStore();

  return (
    <CardContainer onClick={() => setAddCreatureCreatedRune(creature)}>
      <CardImage src={creature.image_url} />

      <CardTitle>{creature.name}</CardTitle>

      <CardStatus>
        <CardSpan>HP: {creature.hp}</CardSpan>
        <CardSpan>Pontos de charm: {creature.charmPoints}</CardSpan>
        <CardSpan>100%: {creature.xp100}</CardSpan>
        <CardSpan>150%: {creature.xp150}</CardSpan>
      </CardStatus>
    </CardContainer>
  )
}

export default Card