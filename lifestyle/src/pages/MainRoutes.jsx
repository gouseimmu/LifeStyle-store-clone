
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
 

 import {Routes,Route} from "react-router-dom";
 import AllMenProducts from "./products/AllMenProducts";

const MainRoutes = () => {
    return (
      <Routes>
        
 
         {/* <Route path="/product" element={<Product />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
        <Route path="/cart" element={ <Cart /> }></Route>
        <Route path="/payment" element={<PrivatRoute><Payment /></PrivatRoute>}></Route>
        <Route path="/signup"  element={<Register/>}/> 
        <Route path="/login"  element={<Login/>}></Route>
         <Route path="/admin" element={<Admin /> }></Route>
         <Route path="/manage" element={<PrivatRoute><ManageProduct /></PrivatRoute>}></Route>
        <Route path="/edit" element={<PrivatRoute><EditProduct /></PrivatRoute>}></Route>
          <Route path="/admin/addproduct" element={ <AddProduct /> }></Route>

          
          
 
         <Route path="/admin/manage/:id"  element={<Edit/>}></Route> */}
          <Route path="/menProducts" element={<AllMenProducts />}></Route>
           
 
         
        
     
    
       
        </Routes>
      );
    };
  
    export default MainRoutes;
