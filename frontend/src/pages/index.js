import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import { FaChevronDown } from 'react-icons/fa'

import Layout from '../components/layout'
import { MainHero } from '../components/Heros/index'
import Image from '../components/image'
import SEO from '../components/seo'

export default class IndexPage extends Component {
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <SEO title='Home' />
        <MainHero
          key='main-hero__home'
          imgSrc={data.wordpressPage.featured_media === null ?
            '/' :
            data.wordpressPage.featured_media.source_url
          }
        >
          <span>Where are you in</span>
          <br />
          your journey?
          <FaChevronDown />
        </MainHero>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to='/page-2/'>Go to page 2</Link>
      </Layout>
    )
  }
}

export const query = graphql`
  query HomePageQuery {
    wordpressPage(slug: {eq: "home11-2-2"}){
      featured_media{
        source_url
      }
    }
  }
`
