import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
import RegistrationForm from './pages/RegistrationForm';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:4000/', // Замените на ваш сервер GraphQL
  }),
  cache: new InMemoryCache(),
});

const App = () => (
    <ApolloProvider client={client}>
      <RegistrationForm />
    </ApolloProvider>
);

export default App;
