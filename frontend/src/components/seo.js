/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { getMetaInformation } from '../utils/getMetaInformation'

function SEO({ description, lang, meta, title, yoastMeta }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const TwitterCard = yoastMeta !== null ? getMetaInformation('twitter:card', yoastMeta).content : 'summary'
  const TwitterTitle = yoastMeta !== null ?  getMetaInformation('twitter:title', yoastMeta).content : title
  const TwitterDescription = yoastMeta !== null ?  getMetaInformation('twitter:description', yoastMeta).content : 'Sherman Wealth Management is your financial concierge. Our holistic approach to financial planning incorporates all aspects of your financial life. We hold ongoing conversations about the milestones you foresee for your life – marriage, children, career change, retirement – and we create strategies to help you prepare for every step of the way. The result is a customized blueprint so you can more efficiently build your wealth and surpass your goals and needs.'

  const metaDescription = description || site.siteMetadata.description
  // let metaDescription = yoastMeta !== null ? getMetaInformation('description', yoastMeta).content : description || site.siteMetadata.description
  // if (metaDescription === null) {
  //   metaDescription = 'Sherman Wealth Management is your financial concierge. Our holistic approach to financial planning incorporates all aspects of your financial life. We hold ongoing conversations about the milestones you foresee for your life – marriage, children, career change, retirement – and we create strategies to help you prepare for every step of the way. The result is a customized blueprint so you can more efficiently build your wealth and surpass your goals and needs.'
  // }
  //   metaDescription = 'Sherman Wealth Management is your financial concierge. Our holistic approach to financial planning incorporates all aspects of your financial life. We hold ongoing conversations about the milestones you foresee for your life – marriage, children, career change, retirement – and we create strategies to help you prepare for every step of the way. The result is a customized blueprint so you can more efficiently build your wealth and surpass your goals and needs.'

  // const metaDescription = yoastMeta !== null ? getMetaInformation('description', yoastMeta).content
  //   : 'Sherman Wealth Management is your financial concierge. Our holistic approach to financial planning incorporates all aspects of your financial life. We hold ongoing conversations about the milestones you foresee for your life – marriage, children, career change, retirement – and we create strategies to help you prepare for every step of the way. The result is a customized blueprint so you can more efficiently build your wealth and surpass your goals and needs.'

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      // titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: TwitterCard,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: TwitterTitle,
        },
        {
          name: `twitter:description`,
          content: TwitterDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
