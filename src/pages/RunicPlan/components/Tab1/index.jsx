import React from 'react'
import { Container, ContainerBanner, RunasContainer, Span } from './RPR.Elements'
import Runas from '../../../../data/Runas'
import CardRune from '../../../../components/CardRune/CardRune'


const Tab1 = () => {
  return (
    <Container>
        <ContainerBanner>
            <Span>Selecione qual Runa deseja obte-la.</Span>
        </ContainerBanner>

        <RunasContainer>
            {Runas.map((runa, index) => {
                return <CardRune runa={runa} key={index} index={index} />
            })}
        </RunasContainer>
    </Container>
  )
}

export default Tab1