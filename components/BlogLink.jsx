import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Link from 'next/link'

export const BlogLink = ({ title, excerpt, media, slug }) => {
  const createMarkup = (content) => {
    return {__html: content};
  }
  return (
    <Row>
      <Col className='mb-3' xs={12}>
        <div className='d-block mb-5 w-100'>
          <div className="float-left mr-3">
            <Link href={`/blog/${slug}`}>
              <a href={`/blog/${slug}`}>
                <img
                  src={media.media_details.sizes.thumbnail.source_url}
                  alt="" className="img-fluid"/>
              </a>
            </Link>
          </div>

          <h4>
            {title}
          </h4>

          <div dangerouslySetInnerHTML={createMarkup(excerpt)}></div>

          <Link href={`/blog/${slug}`}>
            <a>
              Read more ...
            </a>
          </Link>
        </div>
      </Col>
    </Row>
  )
}
