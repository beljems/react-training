import { ApolloClient, InMemoryCache } from '@apollo/client';

const link = 'http://localhost:4000';
const cache = new InMemoryCache();

export const client = new ApolloClient({
    uri: link,
    cache: cache
})
