import React, { Component } from 'react'
import queryString from 'query-string'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import { MiniHero } from '../components/Heros/index'
import SEO from '../components/seo'
import NewsIcon from '../images/icons8-news-100.png'
import { BlogGrid } from '../templates/PostsGrid/styles'
import NewsItem from '../components/NewsItem/index'
import { FaChevronRight } from 'react-icons/fa'
import Img from 'gatsby-image'

export default class SearchPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pages: [],
      posts: []
    }
  }

  componentDidMount() {
    const query = queryString.parse(this.props.location.search)

    const newPages = []
    const newPosts = []

    this.props.data.allPages.edges.map(({ node }) => {

      if (node.acf === null) {
        if (
          node.title.toLowerCase().includes(query.search.toLowerCase())
        ) {
          newPages.push(node)
        }
      } else if (node.acf.content_blocks_page === null) {
        if (
          node.title.toLowerCase().includes(query.search.toLowerCase())
        ) {
          newPages.push(node)
        }
      } else {
        if (
          node.title.toLowerCase().includes(query.search.toLowerCase()) ||
          this.checkACF(node.acf.content_blocks_page, query.search.toLowerCase())
        ) {
          newPages.push(node)
        }
      }

      return null
    })

    this.props.data.allPosts.edges.map(({ node }) => {
      if (
        node.title.toLowerCase().includes(query.search.toLowerCase()) ||
        node.excerpt.toLowerCase().includes(query.search.toLowerCase())
      ) {
        newPosts.push(node)
      }

      return null
    })
    this.setState({
      pages: newPages,
      posts: newPosts
    })
  }

  checkACF(content_blocks, query) {
    let withACF = false

    content_blocks.map((block) => {
      const array = Object.values(block)

      if (typeof array[1] === 'string') {
        if (array[1].toLowerCase().includes(query)) {
          withACF = true
        }
      } else if (typeof array[1] === 'object') {
        const columns = Object.values(array[1])
          columns.map((column) => {
            if (typeof column === 'string') {
              if (column.toLowerCase().includes(query)){
                withACF = true
              }
            }
            if (typeof array[1] === 'object') {
              const contents = Object.values(column)

              contents.map((content) => {
                if (content.toLowerCase().includes(query)) {
                  withACF = true
                }
                return null
              })
            }

            return null
          })
      }

      return null
    })

    return withACF
  }

  render() {
    return (
      <Layout>
        <SEO title="Search" />
        <MiniHero>
          <h1>
            Search
          </h1>
          <img src={NewsIcon} alt='Search icon' />
        </MiniHero>

        <section className="container">
          <h3>
            Pages
          </h3>
          <BlogGrid>
            {
              this.state.pages.length > 0
                ? this.state.pages.map((page) => {
                  let customExcerpt = ''
                  if (page.excerpt !== null && page.excerpt !== undefined) {
                    const postContent = page.excerpt.toString()
                    const noHTML = postContent.replace(/<[^>]*>/g, '')
                    customExcerpt = noHTML.slice(0, 180)
                  }

                  return (
                    <NewsItem
                      key={page.id}
                    >
                      <h4 dangerouslySetInnerHTML={{ __html: page.title }} />
                      <p>{customExcerpt} ...</p>
                      <Link to={`/${page.slug}`}>
                        Read More
                        <FaChevronRight />
                      </Link>
                      <figure>
                      {
                        ''
                      }
                    </figure>
                    </NewsItem>
                  )
                })
                : <span>There are no pages to show</span>
            }
          </BlogGrid>
        </section>

        <section className="container">
          <h3>
            Posts
          </h3>
          <BlogGrid>
            {
              this.state.posts.length > 0
                ? this.state.posts.map(post => {
                  const postContent = post.content.toString()
                  const noHTML = postContent.replace(/<[^>]*>/g, '')
                  const customExcerpt = noHTML.slice(0, 180)
                  return (
                    <NewsItem
                      key={post.id}
                    >
                      {
                        post.categories !== null
                          ? (
                            <small>
                              {post.categories[0].name}
                            </small>
                          )
                          : null
                      }
                      <h4 dangerouslySetInnerHTML={{ __html: post.title }} />
                      <p>{customExcerpt} ...</p>
                      <Link to={`posts/${post.slug}`}>
                        Read More
                        <FaChevronRight />
                      </Link>
                      <figure>
                        {post.featured_media !== null ?
                          <Img fluid={post.featured_media.localFile.childImageSharp.fluid} alt={post.title} /> :
                          ''
                        }
                      </figure>
                    </NewsItem>
                  )
                })
                : <span>There are no posts to show</span>
            }
          </BlogGrid>
        </section>
      </Layout>
    )
  }
}


export const query = graphql`
  query allPageData {
    allPosts: allWordpressPost {
      edges {
        node {
          id
          slug
          title
          content
          excerpt
          categories {
            name
          }
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
    allPages: allWordpressPage {
      edges {
        node {
          id
          slug
          title
          template
          acf {
            content_blocks_page {
              __typename
              ... on WordPressAcf_intro_section {
                intro_text
              }
              __typename
              ... on WordPressAcf_regular_content {
                content_text
              }
              __typename
              ... on WordPressAcf_two_columns {
                two_columns {
                  column_left
                  column_right
                }
              }
              __typename
              ... on WordPressAcf_three_columns {
                three_columns_block {
                  column_left
                  column_middle
                  column_right
                }
              }
              __typename
              ... on WordPressAcf_four_columns {
                four_columns_block {
                  column_left
                  column_middle_left
                  column_middle_right
                  column_right
                }
              }
              __typename
              ... on WordPressAcf_featured_content {
                featured_content_block {
                  content
                }
              }
            }
          }
        }
      }
    }
  }
`
