import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Basket from './Basket'
import Kids from './Kids'
import ShoesBags from './ShoesBags'
import Single from './Single'
import SingleProduct from './SingleProductPage'






        
        const MainRoutes = () => {
          return (
            <div>
              <Routes>
                <Route path="/menpro/:id" element={<SingleProduct/>}/>
                <Route path="/AllProducts" element={<AllProducts/>}/>
                <Route path='/kids' element={<Kids/>}/>
                <Route path='/shoesbags' element={<ShoesBags/>}/>
                <Route path="/basket" element={<Basket/>}/>
                 <Route path="/single" element={<Single/>}/>
              </Routes>
            </div>
          )
        }
        
        export default MainRoutes
 
         
        
     
    
{/*        
        </Routes>
      );
    };
  
    export default MainRoutes; */}
