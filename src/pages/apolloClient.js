import { ApolloClient, InMemoryCache } from '@apollo/client';

// Настройка Apollo Client
const client = new ApolloClient({
    uri: 'http://localhost:4000/', // Замените URL на адрес вашего Mock API
    cache: new InMemoryCache(),
});

export default client;
