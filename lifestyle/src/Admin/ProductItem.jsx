import { Button, Container, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { deleteProducts } from '../Redux/AppReducer/action'
import "./admin.css"
 

const ProductItem = ({id,title,image,category,price}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleDelete = ()=>{
        dispatch(deleteProducts(id));
    }
  return (
    
   <div  >
        
        <div >
          <img id='ad_img' src={image} alt="kl" />
        <h1 id='title'>{title}</h1>
        <p  id="price">
            ₹ {price}
        </p>
        <h3 id='cat'>{category}</h3>
        <div id="butt">
        <button id='hov' onClick={()=>navigate(`/admin/manage/${id}`)}>Edit</button>
        <button id='hov' onClick={handleDelete}>Delete</button>
        </div>
        
          </div>
          
          </div>
  )
}

export default ProductItem



 {/* <Container maxW={"container"} padding="5">
      <Heading textAlign={"center"}>Manage Products</Heading>
        <Flex gap="10" alignContent={"center"} justify="center">
          
         
          
        </Flex>
      </Container>
      <div id="admin">
        {Products.map((data, index) => (
          <div key={index}>
            <div>
              <img id="ad_img" src={data.image} alt="id" />
              <h2 id="title">{data.title}</h2>
              <p id="price"> ₹ {data.price}</p>
              <h3 id="cat">{data.category}</h3>
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
      </div> */}
