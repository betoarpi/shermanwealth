import React, { Component } from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import styled from 'styled-components'
import Layout from '../components/layout'
import SocialShare from '../components/SocialShare/index'

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
      }
    }
    .wp-video {
      margin: 0 auto;
    }
  }
`;

class Podcast extends Component {
  render() {
    const { data, path } = this.props;
    return (
      <Layout>
        <SEO title={data.wordpressWpPodcasts.yoast_title} yoastMeta={null} />
        <SinglePostElement>
          <article className='container'>
            <h1 dangerouslySetInnerHTML={{ __html: data.wordpressWpPodcasts.title }} />
            <div dangerouslySetInnerHTML={{
              __html: data.wordpressWpPodcasts.content,
            }} />
          </article>
        </SinglePostElement>
        <SocialShare path={path} title={data.wordpressWpPodcasts.title} weblink='/launch-financial-podcast' />
      </Layout>
    );
  }
}

export const query = graphql`
  query PodcastQuery($slug: String!) {
    wordpressWpPodcasts(slug: { eq: $slug }) {
      title
      content
      wordpress_id
    }
  }
`

export default Podcast