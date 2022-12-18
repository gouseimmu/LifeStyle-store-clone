import { Button, Img } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
        <div style={{display:"flex",gap:'20px',justifyContent:"center",margin:"20px"}}>
            <Link to="/kids" ><Button bg={'blue'} >Go Back</Button></Link>
            <Button onClick={"chekout"}  bg={"red"} color={"white"}>Checkout</Button>
        </div>
    <div style={{display:'grid',gridTemplateRows:"repeat(1,1fr)",gridTemplateColumns:"repeat(4,1fr)", gap:'20px'}}>
         {
            obj.map((el,i)=>{
                return(
                    <div key={i} style={{Width:"50px"}}>
                        <Img src={el.image1} w={'100%'}/>
                        <p>${el.cost*count}</p>
                        <p>{el.description}</p>
                        <Button onClick={()=>setCount(count-1)}>-</Button>
                        <Button>{count}</Button>
                        <Button onClick={()=>setCount(count+1)}>+</Button>
                        <Button bg={"red.500"} color={"white"} onClick={()=>Remove(i)}>Remove Item</Button>
                    </div>
                )
            })
         }
    
    </div>

    </div>
  )
}

export default Basket