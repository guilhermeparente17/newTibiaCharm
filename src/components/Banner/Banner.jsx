import React from 'react'
import { BannerContainer } from './Banner.Elements'

const Banner = ({children}) => {
  return (
    <BannerContainer>
        {children}
    </BannerContainer>
  )
}

export default Banner