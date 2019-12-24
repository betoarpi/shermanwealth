import React from 'react'
import { BtnCTA } from '../Buttons/index'
import { ButtonContainer } from './styles'

export default function WorkWithUs({content}) {
  return (
    <>
      <div dangerouslySetInnerHTML={{__html: content}} />
      <ButtonContainer>
        <BtnCTA>
          Join Us
        </BtnCTA>
      </ButtonContainer>
    </>
  )
}
