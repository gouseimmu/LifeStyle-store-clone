import {Routes,Route} from "react-router-dom"
import Women from "./products/Women";

// import Women from "./products/Women";


const MainRoutes = () => {
    return (
      <Routes>
        {/* <Route path="/" element={<Homepage />}></Route> */}
        {/* <Route path="/product" element={<Product />}></Route> */}
        <Route path="/women" element={<Women/>} />


        {/* <Route path="/detail" element={<Detail />}></Route> */}
        {/* <Route path="/cart" element={ <Cart /> }></Route> */}
        {/* <Route path="/payment" element={<PrivatRoute><Payment /></PrivatRoute>}></Route> */}
        {/* <Route path="/signup"  element={<Register/>}/> */}
        {/* <Route path="/login"  element={<Login/>}></Route> */}
        {/* <Route path="/admin" element={<PrivatRoute><Admin /></PrivatRoute>}>
          {" "}
        </Route>  */}
        
     
    
      <Route path="*" element={<h1> 404 Page Not Found</h1>}></Route>
      </Routes>
    );
  };
  
  export default MainRoutes;