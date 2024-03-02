import React from 'react'
import { ButtonContainer } from './Button.Elements'

const Button = ({children}) => {
  return (
    <ButtonContainer>{children}</ButtonContainer>
  )
}

export default Button