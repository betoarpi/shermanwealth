import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import { MiniHero } from '../../components/Heros/index'
import BlogNav from '../../components/BlogNav/index'
import NewsItem from '../../components/NewsItem/index'
import SEO from '../../components/seo'
import { BlogGrid, PaginationGrid } from './styles'

import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import NewsIcon from '../../images/icons8-news-100.png'

export default class BradDailyReads extends Component {
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
  componentDidMount = () => {
    this.setState({
      filter: {
        title: ""
      },
      posts: this.props.data.allBradDailies.edges
    })
  }

  render() {
    const { data, pageContext } = this.props;
    return (
      <Layout>
        <SEO title={data.wordpressPage.yoast_title} yoastMeta={data.wordpressPage.yoast_meta} ></SEO>
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
            {this.state.posts.length > 0 ?
              this.state.posts.map(post => {
                const postContent = post.node.content.toString()
                const noHTML = postContent.replace(/<[^>]*>/g, '')
                const customExcerpt = noHTML.slice(0, 180)
                return (
                  <NewsItem
                    key={post.node.id}
                    itemClass='daily-reads'
                  >
                    <h4 dangerouslySetInnerHTML={{ __html: post.node.title }} />
                    <p>{customExcerpt} ...</p>
                    <Link to={`brad-dailies/${post.node.slug}`}>
                      Read More
                      <FaChevronRight />
                    </Link>
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
  query BradGridQuery($slug: String!, $skip: Int!, $limit: Int!) {
    wordpressPage(slug: { eq: $slug }) {
      title
      slug
      content
      template
      yoast_meta {
        name
        property
        content
      }
      yoast_title
    }

    allBradDailies: allWordpressWpDailyReads(
      limit: $limit,
      skip: $skip,
      sort: {fields: [date], order: DESC}
    ) {
      edges {
        node {
          id
          slug
          title
          content
        }
      }
    }
  }
`
