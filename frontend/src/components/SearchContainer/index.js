import React, { Component } from 'react'
import { Link } from 'gatsby'
import { FaChevronRight } from 'react-icons/fa'
import { BlogList, PaginationGrid } from './styles.js'
import NewsItemList from '../NewsItem/NewsItemList'
import Img from 'gatsby-image'
import ReactPaginate from 'react-paginate'
import './styles.css'

export default class SearchContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      renderPerPage: 33,
      data: [],
      pageCount: 0,
      isLoaded: false
    }
  }

  componentDidUpdate() {
    const indexOfLastRender = 1 * this.state.renderPerPage
    const indexOfFirstRender = indexOfLastRender - this.state.renderPerPage
    const currentRender = this.props.content.slice(indexOfFirstRender, indexOfLastRender)

    if (!this.state.isLoaded) {
      this.setState({
        data: currentRender,
        isLoaded: true,
        pageCount: Math.ceil(this.props.content.length / this.state.renderPerPage),
      })
    }
  }

  handlePageClick = (data) => {
    const current = data.selected + 1
    const indexOfLastRender = current * this.state.renderPerPage
    const indexOfFirstRender = indexOfLastRender - this.state.renderPerPage
    const currentRender = this.props.content.slice(indexOfFirstRender, indexOfLastRender)

    this.setState({
      data: currentRender
    })
  }

  render() {
    if (this.state.data.length === 0) {
      return null
    }
    let linkPath = this.props.title.toLowerCase()
    if (linkPath === 'pages') {
      linkPath = ''
    } else if (linkPath === 'daily reads') {
      linkPath = 'brad-dailies'
    }
    return (
      <>
        <section className="container">
          <h3>
            Search results for {this.props.title}
          </h3>

          <BlogList>
            {
              this.state.data.map((item) => {
                let customExcerpt = ''
                if (item.excerpt !== null && item.excerpt !== undefined) {
                  const itemContent = item.excerpt.toString()
                  const noHTML = itemContent.replace(/<[^>]*>/g, '')
                  customExcerpt = noHTML.slice(0, 180)
                }

                return (
                  <NewsItemList
                    key={item.slug}
                  >
                    <div>
                      <h4 dangerouslySetInnerHTML={{ __html: item.title }} />
                      {linkPath === 'posts' ?
                        <p>{customExcerpt} ...</p> : ''
                      }
                      <Link to={`/${linkPath}/${item.slug}`}>
                        Read More
                      <FaChevronRight />
                      </Link>
                    </div>
                    {this.props.withImages ?
                      item.featured_media !== null ?
                        <figure>
                          <Img fluid={item.featured_media.localFile.childImageSharp.fluid} alt={item.title} />
                        </figure> :
                        ''
                      : ''
                    }
                  </NewsItemList>
                )
              })
            }
          </BlogList>
          {
            this.state.pageCount > 1
              ? <PaginationGrid>
                <ReactPaginate
                  previousLabel={'previous'}
                  nextLabel={'next'}
                  breakLabel={'...'}
                  breakClassName={'break-me'}
                  pageCount={this.state.pageCount}
                  marginPagesDisplayed={6}
                  pageRangeDisplayed={6}
                  onPageChange={this.handlePageClick}
                  containerClassName={'pagination'}
                  subContainerClassName={'pages pagination'}
                  activeClassName={'active'}
                />
              </PaginationGrid>
              : null
          }
        </section>
      </>
    )
  }
}
