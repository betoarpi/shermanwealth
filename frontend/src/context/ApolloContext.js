import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch';

export const client = new ApolloClient({
  uri: process.env.WP_GRAPHQL_URL,
  fetch
})