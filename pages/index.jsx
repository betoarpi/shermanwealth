import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'

export default class Index extends Component {
  render() {
    return (
      <>
        <Container className='my-5'>
          <Row>
            <Col xs={12}>
              <h1>
                Hello to Sherman
              </h1>

              <Link href='/blog?page=1'>
                <a>
                  Go to blog
                </a>
              </Link>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}
