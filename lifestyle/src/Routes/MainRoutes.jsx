import React from "react";
import { Route, Routes } from "react-router-dom";
import Basket from "../pages/Basket";
import Kids from "../pages/Kids";
import ShoesBags from "../pages/ShoesBags";
import Single from "../pages/Single";
import SingleProduct from "../pages/SingleProductPage";
import AllProducts from "../pages/products/AllProducts";
import Women from "../pages/products/Women";
import Men from "../pages/products/Men";
import AllMenProducts from "../pages/products/AllMenProducts";
import Home from "../pages/Home/Home";
import Admin from "../Admin/Admin";
import Edit from "../Admin/Edit";
import AddProduct from "../Admin/AddProduct";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Checkout from "../pages/checkout/Checkout";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/women" element={<Women />}></Route>
        <Route path="/men" element={<Men />}></Route>
        <Route path="/allmenproducts" element={<AllMenProducts />}></Route>
        <Route path="/allwomenProducts" element={<AllProducts />} />

        <Route path="/kids" element={<Kids />} />
        <Route path="/shoesbags" element={<ShoesBags />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/single" element={<Single />} />

        <Route path="/Signin" element={<Signin />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>

        <Route path="/menpro/:id" element={<SingleProduct />} />

        <Route path="/checkout" element={<Checkout/>}></Route>

        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
        <Route path="/admin/addProduct" element={<AddProduct />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;

{
  /*        
        </Routes>
      );
    };
  
    export default MainRoutes; */
}
