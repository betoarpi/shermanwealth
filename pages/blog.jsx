import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Pagination } from 'react-bootstrap'
import axios from 'axios'
import { Config } from '../config'
import { BlogLink } from '../components/BlogLink'
import { Helmet } from "react-helmet";

export default class Blog extends Component {
  static async getInitialProps (context) {
    const response = await axios({
      url: `${Config.API_URL}//wp-json/wp/v2/posts?page=${context.query.page}&_embed`
    })
    const posts = response.data
    const headers = response.headers
    return {
      posts,
      headers,
      actualPage: context.query.page
    }
  }

  render() {
    const { posts, headers, actualPage } = this.props
    const totalPages = parseInt(headers['x-wp-totalpages'])

    let items = []

    for (let index = 1; index <= totalPages; index++) {
      items.push(
        <Pagination.Item key={index} active={index === parseInt(actualPage)} href={`/blog?page=${index}`}>
          {index}
        </Pagination.Item>
      )
    }

    return (
      <>
        <Helmet>
          <title>Sherman Wealth - Blog</title>
        </Helmet>
        <Container className='my-4'>
          <Row>
            <Col xs={12}>
              <h1>
                Financial Planning Information
              </h1>

              <p>
                Sherman Wealth Management provides you with relevant financial planning information to give you the resources you need to make informed choices. Read through our posts below and contact us to set up a free call for more information on creating a custom financial plan.
              </p>

              {
                posts.map(post => (
                  <BlogLink
                    title={post.title.rendered}
                    slug={post.slug}
                    excerpt={post.excerpt.rendered}
                    media={post._embedded['wp:featuredmedia'][0]}
                    key={post.id}
                  />
                ))
              }

              <Pagination>{items}</Pagination>

            </Col>
          </Row>
        </Container>
      </>
    )
  }
}
