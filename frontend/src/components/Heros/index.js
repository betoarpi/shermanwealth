import React from 'react'
import { HeroMain, HeroStandard, HeroMini } from './styles'
import Img from 'gatsby-image'

export const MainHero = (props) => {
  const { children, imgSrc, isPreview = false } = props
  return (
    <HeroMain>
      {children}
      {imgSrc && !isPreview && <Img fluid={imgSrc} alt='Main Hero Banner' />}
      {imgSrc && isPreview && <img src={imgSrc} alt='Main Hero Banner' />}
      <span className='triangle'> </span>
    </HeroMain>
  )
}

export const Hero = (props) => {
  const { children, imgSrc } = props
  return (
    <HeroStandard>
      {children}
      {imgSrc && <Img fluid={imgSrc} alt='Hero Banner' />}
      <span className='triangle'> </span>
    </HeroStandard>
  )
}

export const MiniHero = (props) => {
  const { children } = props
  return (
    <HeroMini>
      {children}
      <span className='triangle'> </span>
    </HeroMini>
  )
}
