import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../../components/layout'
import { MiniHero } from '../../components/Heros/index'
import BlogNav from '../../components/BlogNav/index'
import NewsItem from '../../components/NewsItem/index'
import { BlogGrid, PaginationGrid } from './styles'

import { FaChevronRight } from 'react-icons/fa'
import NewsIcon from '../../images/icons8-news-100.png'

export default class PostsGrid extends Component {
  renderButtons ({ numberOfPages, slug }) {
    const buttons = []
    for (let index = 1; index <= numberOfPages; index++) {
      if (index === 1) {
        buttons.push(
          <Link to={`/${slug}/`}>
            {index}
          </Link>
        )
      } else {
        buttons.push(
          <Link to={`/${slug}/${index}`}>
            {index}
          </Link>
        )
      }
    }

    return (
      <>
        {buttons}
      </>
    )
  }

  render() {
    const { data, pageContext } = this.props;

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

          <PaginationGrid>
            <Link
              to={pageContext.previousPagePath}
              style={
                {
                  display: pageContext.humanPageNumber === 1 ? 'none' : 'inline'
                }
              }
            >
              Previous
            </Link>
            {
              this.renderButtons(pageContext)
            }
            <Link
              to={pageContext.nextPagePath}
              style={
                {
                  display: pageContext.humanPageNumber === pageContext.numberOfPages ? 'none' : 'inline'
                }
              }
            >
              Next
            </Link>
          </PaginationGrid>
        </section>
      </Layout>
    );
  }
}

export const query = graphql`
  query PostsGridQuery($slug: String!, $skip: Int!, $limit: Int!) {
    wordpressPage(slug: { eq: $slug }) {
      title
      slug
      content
      template
    }
    allWordpressPost(
      limit: $limit,
      skip: $skip
    ) {
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
