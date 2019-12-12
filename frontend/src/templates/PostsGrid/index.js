import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../../components/layout'
import { MiniHero } from '../../components/Heros/index'
import BlogNav from '../../components/BlogNav/index'
import NewsItem from '../../components/NewsItem/index'
import BlogGrid from './styles'

import { FaChevronRight } from 'react-icons/fa'
import NewsIcon from '../../images/icons8-news-100.png'

export default class PostsGrid extends Component {
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <MiniHero>
          <h1 dangerouslySetInnerHTML={{ __html: data.wordpressPage.title, }} />
          <img src={NewsIcon} alt='News & Resources icon' />
        </MiniHero>
        <section className='container'>
          <div
            dangerouslySetInnerHTML={{
              __html: data.wordpressPage.content,
            }}
          />
          <BlogNav />
          <BlogGrid>
            {data.allWordpressPost.edges.length > 0 ?
              data.allWordpressPost.edges.map(post => {
                const postContent = post.node.content.toString()
                const noHTML = postContent.replace(/<[^>]*>/g, '')
                const customExcerpt = noHTML.slice(0, 180)
                return (
                  <NewsItem
                    key={post.node.id}
                  >
                    <h4 dangerouslySetInnerHTML={{ __html: post.node.title }} />
                    <p>{customExcerpt} ...</p>
                    <Link to={`posts/${post.node.slug}`}>
                      Read More
                      <FaChevronRight />
                    </Link>
                    <figure>
                      {post.node.featured_media !== null ?
                        <Img fluid={post.node.featured_media.localFile.childImageSharp.fluid} alt={post.node.title} /> :
                        ''
                      }
                    </figure>
                  </NewsItem>
                )
              })
              : <span>There are no posts to show</span>}
          </BlogGrid>
        </section>
      </Layout>
    );
  }
}

export const query = graphql`
  query PostsGridQuery($slug: String!) {
    wordpressPage(slug: { eq: $slug }) {
      title
      slug
      content
      template
    }
    allWordpressPost {
      edges {
        node {
          id
          slug
          title
          content
          featured_media {
            localFile {
              childImageSharp {
                fluid(maxWidth: 400){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
