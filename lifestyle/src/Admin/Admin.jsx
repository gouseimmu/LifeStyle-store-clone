import {
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import "./admin.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
 
import { getMenProductList } from "../Redux/AppReducer/action";
import ProductItem from "./ProductItem";
import "./admin.css"
import Footer from "../components/Footer";

const Admin = () => {
//   const [Products, setProducts] = useState([]);
//    const navigate = useNavigate()
//   const getData = () => {
//     axios
//       .get(`https://solar-juvenile-camel.glitch.me/menpro`)
//       .then((r) => {
//         setProducts(r.data);
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   };
 
//  useEffect(()=>{
//   getData()
//  },[])

//   const deleteUser = (id) => {
//     axios
//       .delete(`https://solar-juvenile-camel.glitch.me/menpro/${id}`)
//       .then(navigate("/admin")).then(window.location.reload())
//   };
const product = useSelector((store)=> store.AppReducer.product)
const isLoad = useSelector((store)=> store.AppReducer.isLoading)
console.log(isLoad)
const dispatch = useDispatch()
useEffect(()=>{
   
    dispatch(getMenProductList())
  
},[product.length,dispatch])

  return (
    <div>
      <Navbar/>
     
      <Button mt={"2rem"} ml={"75rem"}>
            <Link to="/admin/addproduct">Add Product</Link>
          </Button>
          <h1 id="man">Manage Products</h1>
          {
            isLoad ? <Text>isLoading...</Text>:  <div id="admin">
        
            {
              product?.length && product.map((item)=>{
                return <ProductItem key={item.id} {...item} data={item}/>
              })
            }
          </div>
          }
    <Footer/>
    </div>
    
  
  );
};

export default Admin;
