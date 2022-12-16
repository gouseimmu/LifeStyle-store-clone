import {
    Container,
    Flex,
   
    Heading,
    
    
  } from "@chakra-ui/react";
  import React from "react";
import { useState } from "react";
  
   import axios from "axios"
  import { Link } from "react-router-dom";
import { useEffect } from "react";
 
 
 
  
  const Admin = () => {
    const [Products,setProducts] = useState([])

    const getData = ()=>{
        axios.get(`https://twisty-careful-composer.glitch.me/products`).then((r)=>{
            setProducts(r.data)
        }).catch((e)=>{
            console.log(e)
        })

    }
    useEffect(()=>{
        getData()
    },[])

    const deleteUser = (id)=>{
        axios.delete(`https://twisty-careful-composer.glitch.me/products/${id}`).then(getData())
    }
  
    return (
      <Container maxW={"container"} padding="5" bg={"gray.500"}>
        <Flex gap="10" alignContent={"center"} justify="center">
          <Heading>
            <Link to="/admin/addproduct">Add Product</Link>
          </Heading>
          <Heading>
            <Link to="/admin/manage">Manage Product</Link>
          </Heading>
        </Flex>
        <Container>
        <div className="w-[100vw] h-full justify-center items-center flex flex-col px-10 py-8 mt-8">
        
        <div className="flex flex-col">
          <div className="overflow-x-auto mt-8 sm:-mx-6 items-center lg:-mx-8">
            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center">
                  <thead className="border-b bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4"
                      >
                        No
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                       title
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        price
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Image
                      </th>
                      
                    </tr>
                  </thead>
                  <tbody className="border-black border-b-2">
                    {Products.map((data, index) => (
                      <tr
                        key={index}
                        className="bg-white border-b-2 border-black"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
                          {index + 1}
                        </td>
                        <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                          {data.title}
                        </td>
                        <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                          {data.price}
                        </td>
                        <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                           <img src={data.image} alt="id" />
                        </td>
                        <td className="text-sm flex justify-between  items-center text-gray-900 font-bold px-6 py-4 space-x-4 whitespace-nowrap">
                          <Link
                            to={`/users/${data.id}`}
                            className="bg-teal-600 text-white px-6 py-2 rounded-lg"
                          >
                            VIew
                          </Link>
                          <Link
                            to={`/admin/manage/${data.id}`}
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg"
                          >
                            Edit
                          </Link>
                          <Link
                            onClick={()=>deleteUser(data.id)}
                            to={"#"}
                            className="bg-red-600 text-white px-6 py-2 rounded-lg"
                          >
                            Delete
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    
        </Container>
      </Container>
    );
  };
  
  export default Admin;
  