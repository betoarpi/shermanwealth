import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'
import { InMemoryCache, IntrospectionFragmentMatcher  } from 'apollo-cache-inmemory'
import introspectionQueryResultData from '../../fragmentTypes.json';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});

const cache = new InMemoryCache({
  fragmentMatcher
})

export const client = new ApolloClient({
  uri: 'http://wpsherman.localhost/graphql',
  cache,
  fetch
})