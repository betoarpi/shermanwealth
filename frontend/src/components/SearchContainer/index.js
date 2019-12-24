import React, { Component } from 'react'
import { Link } from 'gatsby'
import { FaChevronRight } from 'react-icons/fa'
import { BlogGrid, PaginationGrid } from './styles.js'
import NewsItem from '../NewsItem/index'
import Img from 'gatsby-image'
import ReactPaginate from 'react-paginate'
import './styles.css'

export default class SearchContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      renderPerPage: 6,
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
    return (
      <>
        <section className="container">
          <h3>
            {this.props.title}
          </h3>

          <BlogGrid>
            {
              this.state.data.length > 0
                ? this.state.data.map((item) => {
                  let customExcerpt = ''
                  if (item.excerpt !== null && item.excerpt !== undefined) {
                    const itemContent = item.excerpt.toString()
                    const noHTML = itemContent.replace(/<[^>]*>/g, '')
                    customExcerpt = noHTML.slice(0, 180)
                  }

                  return (
                    <NewsItem
                      key={item.id}
                    >
                      <h4 dangerouslySetInnerHTML={{ __html: item.title }} />
                      <p>{customExcerpt} ...</p>
                      <Link to={`/${item.slug}`}>
                        More
                        <FaChevronRight />
                      </Link>
                      <figure>
                        {
                          this.props.withImages
                            ?
                            item.featured_media !== null ?
                              <Img fluid={item.featured_media.localFile.childImageSharp.fluid} alt={item.title} /> :
                              ''
                            : ''
                        }
                      </figure>
                    </NewsItem>
                  )
                })
                : <span>There is no content to show</span>
            }
          </BlogGrid>
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
