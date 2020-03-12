import ApolloClient from 'apollo-boost'
import { ApolloLink } from 'apollo-link'
import { setContext } from 'apollo-link-context'
import { InMemoryCache, IntrospectionFragmentMatcher  } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import fetch from 'isomorphic-fetch'
import introspectionQueryResultData from '../../fragmentTypes.json';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});

const cache = new InMemoryCache({
  fragmentMatcher
})

export const client = new ApolloClient({
  cache,
  fetch,
  link: ApolloLink.from([
    setContext((req, prev) => {
      return ({
        headers: {
          ...prev.headers,
          "X-WP-Nonce": req.variables.nonce ? req.variables.nonce : '',
        },
      })
    }
    ),
    new HttpLink({
      uri: 'https://wpsherman.localhost/graphql',
      credentials: 'include',
    })
  ])
})