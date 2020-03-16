import ApolloClient from 'apollo-client'
import fetch from 'isomorphic-fetch'
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory'
import introspectionQueryResultData from '../../fragmentTypes.json';
import { createHttpLink } from 'apollo-link-http'

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});

const cache = new InMemoryCache({
  fragmentMatcher
})

const link = createHttpLink({
  uri: 'http://wpsherman.localhost/graphql',
  fetch,
  credentials: 'include'
})

export const client = new ApolloClient({
  cache,
  link
})