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
import axios from "axios";
 
const AddProduct = () => {
 const [title,setTitle] = useState("")
 const [price,setPrice] = useState(0)
 const [image,setImage] = useState("")
 const [category,setCategoty] = useState("")

 const data = {
    title:title,
    price:price,
    image:image,
    category:category,
 }
 const navigate = useNavigate()

 const handleSubmit = (e)=>{
    e.preventDefault()
    axios.post(`https://solar-juvenile-camel.glitch.me/menpro`,data).then(navigate("/admin")).then(window.location.reload())
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
                    onChange={(e)=>setTitle(e.target.value)}
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
                    onChange={(e)=>setPrice(e.target.value)}
                  ></Input>
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel> Image url:</FormLabel>
                  <Input
                    placeholder="Enter url"
                    name="img"
                  
                    variant="outline"
                    colorScheme={"red"}
                    value={image}
                    onChange={(e)=>setImage(e.target.value)}
                  ></Input>
                </FormControl>
              </GridItem>
               
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel> Category:</FormLabel>
                  <Select
                    name="category"
                    value={category}
                    onChange={(e)=>setCategoty(e.target.value)}
                  >
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