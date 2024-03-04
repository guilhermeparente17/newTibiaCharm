import React from 'react'
import { ButtonContainer } from './Button.Elements'

const Button = ({children, onClick}) => {
  return (
    <ButtonContainer onClick={onClick}>{children}</ButtonContainer>
  )
}

export default Button