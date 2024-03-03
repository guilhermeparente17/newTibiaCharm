import React from 'react'
import { HeaderContainer, HeaderItem, HeaderLogo, HeaderMenu, SpanStyle } from './Header.Elements'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HeaderContainer>
        <Link to="/"><HeaderLogo>Tibia <SpanStyle>Charm</SpanStyle></HeaderLogo></Link>

        <HeaderMenu>
            <Link to="/creatures"><HeaderItem>Criaturas</HeaderItem></Link>
            <HeaderItem>Runas</HeaderItem>
            <HeaderItem>Plano Rúnico</HeaderItem>
            <HeaderItem>Meu Plano Rúnico</HeaderItem>
        </HeaderMenu>
    </HeaderContainer>
  )
}

export default Header