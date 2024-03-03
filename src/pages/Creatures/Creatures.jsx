import React from 'react'
import { CreatureContainer, CreaturesList } from './Creatures.Elements'
import Search from '../../components/Search/Search'
import CreaturesData from '../../data/Creatures'
import Card from '../../components/Card/Card'

const Creatures = () => {
    console.log(CreaturesData);
  return (
    <CreatureContainer>
        <Search />

        <CreaturesList>
            {
                CreaturesData.map((creature, index) => {
                    return <Card creature={creature} key={index} />
                })
            }
        </CreaturesList>
    </CreatureContainer>
  )
}

export default Creatures