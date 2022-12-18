import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Box,
  Button,
  Container,
  Flex,
  VStack,
  Heading,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
 
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProducts, getMenProductList } from "../Redux/AppReducer/action";
 
 
const ini = {
  title:"",
  price:0,
  image:"",
  category:"",
}
const AddProduct = () => {
  
 const [data ,setData] = useState(ini)

 const { title, price, image, category } = data;
 const navigate = useNavigate()
 const dispatch = useDispatch()



 const handleChange = (e) => {
  const { name, value } = e.target;
  setData({ ...data, [name]: value });
};
 const handleSubmit = (e)=>{
  e.preventDefault()
   
    if(data){
      dispatch(addProducts(data)).then(navigate("/admin"))
    }
    
 }

  return (
    <Box>
      <Container maxW={"container"} padding="5" bg={"gray.500"}>
        <Flex gap="10" alignContent={"center"} justify="center">
          <Heading>
            <Link to="/admin/addproduct">Add Product</Link>
          </Heading>
          <Heading>
            <Link to="/admin">Manage Product</Link>
          </Heading>
        </Flex>
      </Container>
      <Container
        maxW="container.lg"
        padding="10"
        align={"center"}
        justify="center"
        
      >
        <Flex h="80vh" bg={"#edf2f8"}>
          <VStack
            w="full"
            h="full"
            p={10}
            spacing={10}
            
            justify={"center"}
            align={"center"}
          >
            <Heading>Add Product Details.</Heading>
            <SimpleGrid columns={2} columnGap={3} rowGap={4}>
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel> Title:</FormLabel>
                  <Input
                    placeholder="Enter title"
                    name="title"
                    value={title}
                    onChange={handleChange}
                  ></Input>
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel> Price:</FormLabel>
                  <Input
                    placeholder="Enter Price"
                    name="price"
                    value={price}
                    onChange={handleChange}
                  ></Input>
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl  >
                  <FormLabel> Image url:</FormLabel>
                  <Input
                    placeholder="Enter url"
                    name="image"
                  
                    variant="outline"
                    colorScheme={"red"}
                    value={image}
                    onChange={handleChange}
                  ></Input>
                </FormControl>
              </GridItem>
               
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel> Category:</FormLabel>
                  <Select
                    name="category"
                    value={category}
                    onChange={handleChange}
                  >
                     <option value={"Casual Shirts"}>Casual Shirts</option>
                    <option value={"Dresses"}>Dresses and JumpSuits</option>
                    <option value={"Kurtas"}>Kurtas</option>
                    <option value={"womens"}>Womens</option>
                  </Select>
                </FormControl>
              </GridItem>
               
              <GridItem colSpan={2}>
                <Button
                  width={"full"}
                  size="lg"
                  bg={"green.400"}
                 
                 onClick={handleSubmit}
                >
                  Add Product
                </Button>
              </GridItem>
            </SimpleGrid>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default AddProduct;