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

const Admin = () => {
  const [Products, setProducts] = useState([]);
   const navigate = useNavigate()
  const getData = () => {
    axios
      .get(`https://political-wise-diver.glitch.me/products`)
      .then((r) => {
        setProducts(r.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
 
 useEffect(()=>{
  getData()
 },[])

  const deleteUser = (id) => {
    axios
      .delete(`https://political-wise-diver.glitch.me/products/${id}`)
      .then(navigate("/admin")).then(window.location.reload())
  };

  return (
    <div>
      <Container maxW={"container"} padding="5">
      <Heading textAlign={"center"}>Manage Products</Heading>
        <Flex gap="10" alignContent={"center"} justify="center">
          
          <Button ml={"68rem"}>
            <Link to="/admin/addproduct">Add Product</Link>
          </Button>
          
        </Flex>
      </Container>
      <div id="admin">
        {Products.map((data, index) => (
          <div key={index}>
            <div>
              <img id="ad_img" src={data.image} alt="id" />
              <h2 id="title">{data.title}</h2>
              <p> ₹ {data.price}</p>
              <h3>{data.category}</h3>
            </div>
            <div id="butt">
              <Button onClick={() => deleteUser(data.id)}>
                <Link to={"#"}>
                  <Text>DELETE</Text>
                </Link>
              </Button>
              <Button >
                <Link to={`/admin/manage/${data.id}`}>
                  <Text>EDIT</Text>
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
