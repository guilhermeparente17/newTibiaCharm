import React from 'react'
import { PageRoutesContainer, PageRoutesContent } from './PageRoutes.Elements'
import Rotas from '../../routes'
import Header from '../../components/Header/Header'

const PageRoutes = () => {
  return (
    <PageRoutesContainer>
        <PageRoutesContent>
            <Header />

            <Rotas />
        </PageRoutesContent>
    </PageRoutesContainer>
  )
}

export default PageRoutes