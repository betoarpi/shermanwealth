import React from 'react'
import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment RegularContentBlock on WordPressAcf_regular_content {
    content_text
  }
`

const RegularContent = ({ content_text, contentText }) => {
  const text = content_text !== undefined ? content_text : contentText
  return (
    <div dangerouslySetInnerHTML={{ __html: text, }} />
  )
}

export default RegularContent
