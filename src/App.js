import { ApolloProvider } from '@apollo/client/react';
import client from './client';
import Country from './components/Country';
import ToggleColorMode from './components/ToggleColorMode';

function App() {
  return (
    <>
    <ToggleColorMode />
      <ApolloProvider client={client}>
        <Country />
      </ApolloProvider>
    </>
  );
}

export default App;
