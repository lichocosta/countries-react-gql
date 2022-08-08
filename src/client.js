import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  // uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  uri: 'https://countries.trevorblades.com/',
  cache: new InMemoryCache(),
});

export default client;