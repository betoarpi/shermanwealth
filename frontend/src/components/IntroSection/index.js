import React from 'react'
import styled from 'styled-components'

const Intro = styled.div`
  color: var(--color-primary_l1);
  font-size: 1.3rem;
  margin-bottom:4rem;
`

const IntroSectionBlock = ({ intro_text }) => {
  return (
    <Intro dangerouslySetInnerHTML={{ __html: intro_text }} />
  )
}

export default IntroSectionBlock