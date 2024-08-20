import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';


const TheRestOfYourApplication = () => (
  <Box>
    {}
  </Box>
);

function App() {
  return (
    <ChakraProvider>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a la tienda" />
      <TheRestOfYourApplication />
    </ChakraProvider>
  );
}

export default App;
