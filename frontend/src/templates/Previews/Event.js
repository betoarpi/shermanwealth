import React from 'react'
import gql from 'graphql-tag'
import styled from 'styled-components'
import PagesWithPreview from '../../components/previewComponents/pages'
import SocialShare from '../../components/SocialShare/index'
import Layout from '../../components/layout'

const SinglePostElement = styled.section`
  background: white;
  border-top:1px solid var(--color-highlight_l2);
  article {
    > h1 {
      margin-bottom: 2rem;
    }
    > figure {
      img {
        box-shadow: none;
        object-fit: cover;
        object-position: 50% 50%;
      }
    }
  }
`;

const Event = (props) => {
  const { eventBy, path } = props.preview

  console.log(eventBy, path)

  return (
    <Layout>
        <SinglePostElement>
          <article className='container'>
            <h1 dangerouslySetInnerHTML={{
              __html: eventBy.title
            }} />
            <figure>
              <img
                src={eventBy.featuredImage.mediaItemUrl}
                alt='Post Title' />
            </figure>
            <p>
              <strong>Date:</strong> <span>{eventBy.acf_event_options.eventDate}</span><br />
              <strong>Time:</strong> <time datetime={eventBy.acf_event_options.eventTime}>{eventBy.acf_event_options.eventTime}</time>
            </p>
            <div dangerouslySetInnerHTML={{
              __html: eventBy.acf_event_options.eventDescription,
            }} />
          </article>
        </SinglePostElement>
        <SocialShare path={path} title={eventBy.title} />
    </Layout>
  )
}

const PREVIEW_QUERY = gql`
query PreviewEventQuery($id: Int!) {
  eventBy(eventId: $id) {
    title
    slug
    featuredImage {
      mediaItemUrl
    }
    acf_event_options {
      eventAddress
      eventDate
      eventDescription
      eventTime
    }
  }
}
`

export default PagesWithPreview({ preview: PREVIEW_QUERY })(Event);