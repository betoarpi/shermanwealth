import React from 'react'
import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment RegularContentBlock on WordPressAcf_regular_content {
    content_text
  }
`

const RegularContent = ({ content_text }) => {
  return (
    <article dangerouslySetInnerHTML={{ __html: content_text, }} />
  )
}

export default RegularContent
