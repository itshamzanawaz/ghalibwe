import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api-ap-south-1.hygraph.com/v2/clx09cqqr03vb06uvy4gk9tlg/master',
  cache: new InMemoryCache(),
});

export default client;