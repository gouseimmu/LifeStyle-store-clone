import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Basket from './Basket'
import Kids from './Kids'
import AllProducts from './products/AllProducts'
import UserProducts from './products/UserProducts'
import ShoesBags from './ShoesBags'
import Single from './Single'
import SingleProduct from './SingleProductPage'
// import {Routes,Route} from "react-router-dom";

// const MainRoutes = () => {
//     return (
//       <Routes>
        
//         <Route path="/" element={<Homepage />}></Route>
//         <Route path="/product" element={<Product />}></Route>
//         <Route path="/detail" element={<Detail />}></Route>
//         <Route path="/cart" element={ <Cart /> }></Route>
//         <Route path="/payment" element={<PrivatRoute><Payment /></PrivatRoute>}></Route>
//         <Route path="/signup"  element={<Register/>}/>
//         <Route path="/login"  element={<Login/>}></Route>
//         <Route path="/admin" element={<PrivatRoute><Admin /></PrivatRoute>}>
//           {" "}
//         </Route> 

 
// const MainRoutes = () => {
//     return (
//       <Routes>
//         {/* <Route path="/" element={<Homepage />}></Route>
 

// // import {Routes,Route} from "react-router-dom"
// const MainRoutes = () => {
    // return (
      // <Routes>
        
 
        {/* <Route path="/product" element={<Product />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
        <Route path="/cart" element={ <Cart /> }></Route>
        <Route path="/payment" element={<PrivatRoute><Payment /></PrivatRoute>}></Route>
        <Route path="/signup"  element={<Register/>}/> 
        <Route path="/login"  element={<Login/>}></Route> */} 
         {/* <Route path="/admin" element={<Admin /> }></Route> */}
         {/* <Route path="/manage" element={<PrivatRoute><ManageProduct /></PrivatRoute>}></Route>
        <Route path="/edit" element={<PrivatRoute><EditProduct /></PrivatRoute>}></Route> */}
          {/* <Route path="/admin/addproduct" element={ <AddProduct /> }></Route> */}

          
          
 
         {/* <Route path="/admin/manage/:id"  element={<Edit/>}></Route> */}
          

        
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
