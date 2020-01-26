import { ApolloClient } from 'apollo-boost'
import { ApolloLink } from 'apollo-link'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import fetch from 'isomorphic-fetch'

const cache = new InMemoryCache()
const siteURL = `https://${process.env.API_URL}`

export const client = new ApolloClient({
  cache,
  fetch,
  link: ApolloLink.from([
    setContext((_, { headers }) => {
      // get the authentication token from local storage if it exists
      const token = localStorage.getItem('token');
      // return the headers to the context so httpLink can read them
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : "",
        }
      }
    }),
    new HttpLink({
      uri: `https://${siteURL}/graphql`,
      credentials: 'include'
    })
  ])
})