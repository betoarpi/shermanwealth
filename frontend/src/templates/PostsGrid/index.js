import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../../components/layout'
import { MiniHero } from '../../components/Heros/index'
import BlogNav from '../../components/BlogNav/index'
import NewsItem from '../../components/NewsItem/index'
import { BlogGrid, PaginationGrid } from './styles'

import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import NewsIcon from '../../images/icons8-news-100.png'

export default class PostsGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: {
        title: ""
      },
      posts: []
    }
  }

  renderButtons({ numberOfPages, slug, humanPageNumber }) {
    const buttons = []
    for (let index = 1; index <= numberOfPages; index++) {
      if (index === 1) {
        buttons.push(
          <Link to={`/${slug}/`} key={index} className={humanPageNumber === index ? 'active' : ''}>
            {index}
          </Link>
        )
      } else {
        buttons.push(
          <Link to={`/${slug}/${index}`} key={index} className={humanPageNumber === index ? 'active' : ''}>
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

  handleFilterTitle = (e) => {
    e.preventDefault()
    this.setState({
      filter: {
        title: e.target.value
      }
    })
  }

  componentDidMount = () => {
    this.setState({
      filter: {
        title: ""
      },
      posts: this.props.data.allWordpressPost.edges
    })
  }

  handleReset = () => {
    this.setState({
      filter: {
        title: ""
      },
      posts: this.props.data.allWordpressPost.edges
    })
  }

  handleSearch = () => {
    if (this.state.filter.title === "") {
      this.setState({
        filter: {
          title: ""
        },
        posts: this.props.data.allWordpressPost.edges
      })
    } else {
      const newArray = []

      this.props.data.allPosts.edges.map((post) => {
        if (post.node.title.toLowerCase().includes(this.state.filter.title.toLowerCase())) {
          newArray.push(post)
        }

        return null
      })

      this.setState((state) => {
        return {
          filter: {
            title: state.filter.title
          },
          posts: newArray
        }
      })
    }
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

          <input onChange={this.handleFilterTitle} value={this.state.filter.title} />
          <button onClick={() => this.handleReset()}>
            Reset
          </button>
          <button onClick={() => this.handleSearch()}>
            Search
          </button>
          <br />

          <BlogGrid>
            {this.state.posts.length > 0 ?
              this.state.posts.map(post => {
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
              <FaChevronLeft />
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
              <FaChevronRight />
            </Link>
          </PaginationGrid>
        </section>
      </Layout>
    );
  }
}

export const query = graphql`
  query PostsGridQuery($slug: String!, $skip: Int!, $limit: Int!, $filter: String) {
    wordpressPage(slug: { eq: $slug }) {
      title
      slug
      content
      template
    }
    allWordpressPost(
      limit: $limit,
      skip: $skip,
      filter: {
        title: {
          glob: $filter
        }
      }
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

    allPosts: allWordpressPost {
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
