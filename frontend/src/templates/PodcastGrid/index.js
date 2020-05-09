import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import { MiniHero } from '../../components/Heros/index'
import BlogNav from '../../components/BlogNav/index'
import NewsItem from '../../components/NewsItem/index'
import SEO from '../../components/seo'
import { BlogGrid, PaginationGrid, Title } from './styles'

import { FaChevronRight, FaChevronLeft, FaPlayCircle } from 'react-icons/fa'
import NewsIcon from '../../images/icons8-news-100.png'

export default class LaunchFinancialPodcast extends Component {
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
      posts: this.props.data.allPodcasts.edges
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
                return (
                  <NewsItem
                    key={post.node.id}
                    itemClass='daily-reads'
                  >
                    <Title dangerouslySetInnerHTML={{ __html: post.node.title }} />
                    <Link to={`podcast/${post.node.slug}`}>
                      Listen to Podcast
                      <FaPlayCircle />
                    </Link>
                  </NewsItem>
                )
              })
              : <span>There are no pocasts to show</span>}
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
  query PodcastGridQuery($slug: String!, $skip: Int!, $limit: Int!) {
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

    allPodcasts: allWordpressWpPodcasts(
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
