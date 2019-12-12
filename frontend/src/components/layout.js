/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./Footer/index"

import { GlobalStyles } from "../styles/GlobalStyles"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
      wordpressWpApiMenusMenusItems(slug: {eq: "main-menu"}) {
        items {
          classes
          title
          object_id
          url
          object_slug
          order
          wordpress_children {
            wordpress_parent
            classes
            object_id
            object_slug
            title
            type
            type_label
          }
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyles />
      <Header
        menu={data.wordpressWpApiMenusMenusItems.items}
        siteTitle={data.site.siteMetadata.title}
      />
      <main>{children}</main>
      <Footer />
      <div id="modal"></div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
