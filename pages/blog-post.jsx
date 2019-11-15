import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image } from 'react-bootstrap'
import { withRouter } from 'next/router'
import { Config } from '../config'
import axios from 'axios'
import { Helmet } from "react-helmet";

class BlogPost extends Component {
  static async getInitialProps(context) {
    const postRes = await axios({
      url: `${Config.API_URL}/wp-json/wp/v2/posts?slug=${context.query.slug}&_embed`
    })
    const post = await postRes.data[0]
    return {
      post
    }
  }

  createMarkup(content) {
    return {__html: content}
  }

  render() {
    const { post } = this.props
    const media = post._embedded['wp:featuredmedia'][0]

    return (
      <>
        <Helmet>
          <title
            dangerouslySetInnerHTML={this.createMarkup(post.title.rendered)}
          ></title>
        </Helmet>
        <Container className='my-5'>
          <Row>
            <Col xs={12}>
              <button className="btn btn-secondary" onClick={() => { window.history.back() }}>
                Return to blog
              </button>

              <h2
                className='text-center mt-3'
                dangerouslySetInnerHTML={this.createMarkup(post.title.rendered)}
              >
              </h2>

              <Image src={media.source_url} fluid className='d-block mx-auto my-3' />

              <div dangerouslySetInnerHTML={this.createMarkup(post.content.rendered)}></div>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default withRouter(BlogPost)
