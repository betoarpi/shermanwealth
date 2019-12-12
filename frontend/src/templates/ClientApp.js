import React, { Component } from 'react'
import Layout from '../components/layout'
import { MiniHero } from '../components/Heros/index'
import { graphql } from 'gatsby'
import ClientAppIcon from '../images/icons8-login-100.png'

export default class ClientApp extends Component {
  render() {
    const { data } = this.props
    return (
      <Layout>
        <MiniHero>
          <h1>{data.wordpressPage.title}</h1>
          <img src={ClientAppIcon} alt='Client App icon' />
        </MiniHero>
        <div className='container'>
          <h3>Other sections pending to configure in DB and Gatsby</h3>
        </div>
        <section className='container'
          dangerouslySetInnerHTML={{
            __html: data.wordpressPage.content,
          }}
        />
      </Layout>
    )
  }
}

export const query = graphql`
  query ClientAppQuery($slug: String!) {
    wordpressPage(slug: { eq: $slug }) {
      title
      slug
      content
      template
    }
  }
`
