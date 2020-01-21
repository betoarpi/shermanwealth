import React, { Component } from 'react'
import queryString from 'query-string'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { MiniHero } from '../components/Heros/index'
import SEO from '../components/seo'
import NewsIcon from '../images/icons8-news-100.png'
import SearchContainer from '../components/SearchContainer/index'

export default class SearchPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pages: [],
      posts: [],
      events: [],
      dailyReads: [],
      isEmpty: false
    }
  }

  componentDidMount() {
    const query = queryString.parse(this.props.location.search)

    const filteredPages = []
    const filteredPosts = []
    const filteredEvents = []
    const filteresDailyReads = []

    this.props.data.allPages.edges.map(({ node }) => {

      if (!node.acf || !node.acf.content_blocks_page) {
        if (
          node.title.toLowerCase().includes(query.search.toLowerCase())
        ) {
          filteredPages.push(node)
        }
      } else {
        if (
          node.title.toLowerCase().includes(query.search.toLowerCase()) ||
          this.checkAcfPages(node.acf.content_blocks_page, query.search.toLowerCase())
        ) {
          filteredPages.push(node)
        }
      }

      return null
    })

    this.props.data.allPosts.edges.map(({ node }) => {
      if (
        node.title.toLowerCase().includes(query.search.toLowerCase()) ||
        node.excerpt.toLowerCase().includes(query.search.toLowerCase())
      ) {
        filteredPosts.push(node)
      }

      return null
    })

    this.props.data.allEvents.edges.map(({ node }) => {
      if (
        node.title.toLowerCase().includes(query.search.toLowerCase()) ||
        this.checkAcfEvent(node.acf, query.search.toLowerCase())
      ) {
        filteredEvents.push(node)
      }
      return null
    })

    this.props.data.allDailyReads.edges.map(({ node }) => {
      if (
        node.title.toLowerCase().includes(query.search.toLowerCase()) ||
        node.content.toLowerCase().includes(query.search.toLowerCase())
      ) {
        filteresDailyReads.push(node)
      }

      return null
    })

    this.setState({
      pages: filteredPages,
      posts: filteredPosts,
      events: filteredEvents,
      dailyReads: filteresDailyReads,
      isEmpty: filteredPages.length === 0 && filteredPosts.length === 0 && filteredEvents.length === 0 && filteresDailyReads.length === 0
    })
  }

  checkAcfPages(content_blocks, query) {
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

  checkAcfEvent(EventInfo, query) {
    let flag = false
    const array = Object.values(EventInfo)

    array.map((EventString) => {
      if (EventString.toLowerCase().includes(query)) {
        flag = true
      }

      return null
    })

    return flag
  }

  render() {
    return (
      <Layout>
        <SEO title="Search" yoastMeta={null} />
        <MiniHero>
          <h1>
            Search
          </h1>
          <img src={NewsIcon} alt='Search icon' />
        </MiniHero>

        <SearchContainer title="Pages" content={this.state.pages} withImages={false} />

        <SearchContainer title="Posts" content={this.state.posts} withImages={true} />

        <SearchContainer title="Events" content={this.state.events} withImages={true} />

        <SearchContainer title="Daily Reads" content={this.state.dailyReads} withImages={false} />

        {
          this.state.isEmpty
          ? <section className="container">
            <h3>
              No results found with your search criteria
            </h3>
          </section>
          : null
        }
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
    allEvents: allWordpressWpEvents {
      edges {
        node{
          id
          title
          slug
          acf {
            event_address
            event_description
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
    allDailyReads: allWordpressWpDailyReads {
      edges {
        node {
          slug
          title
          content
        }
      }
    }
  }
`
