import React from 'react'
import { HeaderContainer, HeaderItem, HeaderLogo, HeaderMenu, SpanStyle } from './Header.Elements'

const Header = () => {
  return (
    <HeaderContainer>
        <HeaderLogo>Tibia <SpanStyle>Charm</SpanStyle></HeaderLogo>

        <HeaderMenu>
            <HeaderItem>Criaturas</HeaderItem>
            <HeaderItem>Runas</HeaderItem>
            <HeaderItem>Plano Rúnico</HeaderItem>
            <HeaderItem>Meu Plano Rúnico</HeaderItem>
        </HeaderMenu>
    </HeaderContainer>
  )
}

export default Header