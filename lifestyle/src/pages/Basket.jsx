import { Button, Img } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import "./Kids.css";

const Basket = () => {
    const obj=JSON.parse(localStorage.getItem('basket'))||[]
    const [count,setCount]=useState(1);
    const Remove=(i)=>{
         obj.splice(i,1)
         localStorage.setItem("basket",JSON.stringify(obj))
         window.location.reload()
    }
  return (
    <div>
        <Navbar/>
        <div style={{display:"flex",gap:'20px',justifyContent:"center",margin:"20px"}}>
            <Link to="/kids" ><Button bg={'teal'} color={"white"}>Go Back</Button></Link>
           <Link to="/checkout"> <Button    bg={"red"} color={"white"}>Checkout</Button></Link>
        </div>
    <div style={{display:'grid',gridTemplateRows:"repeat(1,1fr)",margin:"auto", width:"80%", gridTemplateColumns:"repeat(4,1fr)", gap:'20px'}}>
         {
            obj.map((el,i)=>{
                return(
                    <div key={i} style={{Width:"50px"}}>
                        <Img src={el.image1} w={'100%'}/>
                        <p>${el.cost*count}</p>
                        <p>{el.description}</p>
                        <div style={{display:"flex",gap:"15px" ,marginTop:"1em" ,justifyContent:"start" , marginBottom:"1em"}}>
                        <Button onClick={()=>setCount(count-1)}>-</Button>
                        <Button>{count}</Button>
                        <Button onClick={()=>setCount(count+1)}>+</Button>
                        </div>
                       
                        <Button bg={"red.500"} color={"white"} onClick={()=>Remove(i)}>Remove Item</Button>
                    </div>
                )
            })
         }
    
    </div>
         <Footer/>
    </div>
  )
}

export default Basket