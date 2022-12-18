import { Box } from '@chakra-ui/layout';
import React from 'react'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
 
 
 
import MainRoutes from './Routes/MainRoutes';
 
function App() {
  return (
    <div className="App">
      <Box w={'full'} position={'fixed'} zIndex={'10'}>
        <Navbar />
        </Box>
     <MainRoutes/>
     <Footer/>
    
    
   
    </div>
  );
 
  }
export default App;
 

 



 
 
