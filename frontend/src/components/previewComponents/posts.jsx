import React from 'react'
import { Query } from 'react-apollo'
import queryString from 'query-string'

const PostsWithPreview = (args = { preview: false }) => Component => {
  const preview = (props) => {
    const parsed = queryString.parse(props.location.search)
    const {
      nonce,
      preview,
      post,
    } = parsed

    // Id needs to be an int for preview query.
    const id = parseInt(post, 10)

    /**
     * If no preview param, return the component with the preview props as false.
     */
    if (!preview) {
      return (
        <Component
          preview={false}
          {...props}
        />
      )
    }

    /**
     * Otherwise, run our Apollo query.
     */
    return (
      <Query
        query={args.preview}
        variables={{
          id,
          nonce,
        }}
      >
        {({ data, loading, error }) => {
          if (loading) return <p>Loading preview...</p>
          if (error) return <p>Error: ${error.message} ${error.graphQLErrors.map(({ message }, i) => (
            <span key={i}>{message}</span>
          ))}</p>

          return (
            <Component
              preview={data}
              {...props}
            />
          )
        }}
      </Query>
    )
  }

  return preview
}

export default PostsWithPreview