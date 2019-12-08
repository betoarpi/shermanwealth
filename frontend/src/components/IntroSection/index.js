import React from 'react'

const IntroSectionBlock = ({ intro_text }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: intro_text }} />
  )
}

export default IntroSectionBlock