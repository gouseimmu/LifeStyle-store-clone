import { Box, Button, Grid, Image, Img } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import "./Kids.css";
import {arr} from "./KidsSlicker";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ShoesBags = () => {

    const [data,getData]=useState([])
    const [sort,setSort]=useState("")
    const [page,setPage]=useState(1)
    var box=[]
    box=JSON.parse(localStorage.getItem("basket"))||[]
    const navigate=useNavigate()
    const kids=(sort,page)=>{
        return axios.get(`https://test-api-9m2w.onrender.com/shoes&bags?_page=${page}&_limit=10&_sort=cost&_order=${sort}`).then((res)=>getData(res.data)).catch((err)=>console.log(err))
    }
    useEffect(()=>{
        kids(sort,page)
    },[sort,page])
    const handleBasket=(el)=>{
       box.push(el)
       localStorage.setItem("basket",JSON.stringify(box))
        
    }
    const handleSingle=(el)=>{
        sessionStorage.setItem("single",JSON.stringify(el))
        navigate('/single')
    }
  return (
    <div>
            <Box w={'full'} position={'fixed'} zIndex={'10'}>
        <Navbar />
        </Box> 
        <div >
        <Box w={'90%'} m={'auto'}>
      <Carousel
        autoPlay
        infiniteLoop
        stopOnHover
        showArrows
        showIndicators={"false"}
        showStatus={"false"}
        w={"full"}
      >
        <Image
          id={"img2"}
          src={'https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner4-desktop-Kids-14Dec2022.jpg'}
          m={"auto"}
        />
        <Image
          id={"img1"}
          src={
            "https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Uber-HP-Desktop-HeroBanner6-08Dec2022.gif"
          }
          m={"auto"}
        />

        <Image
          id={"img3"}
          src={
            "https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Uber-HP-Desktop-HeroBanner3-05Dec2022.jpg"
          }
          m={"auto"}
        />
        <Image
          id={"img4"}
          src={
            "https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Uber-HP-Desktop-HeroBanner5-05Dec2022.jpg"
          }
          m={"auto"}
        />
        <Image
          id={"img5"}
          src={
            "https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Uber-HP-Desktop-HeroBanner4-05Dec2022.jpg"
          }
          m={"auto"}
        />
      </Carousel>
      </Box>

        <div style={{margin:"20px", marginLeft:"75px"}}>
        <Button onClick={()=>setSort("asc")}>Asscending</Button>
        <Button onClick={()=>setSort("desc")}>Descending</Button>
        </div>
        <div className='kids'>
            {data.map((el,i)=>{
                return(
                    <div key={el.id} className="item">
                        <Img src={el.image1} onClick={()=>handleSingle(el)}/>
                        <p>{el.description}</p>
                        <p>{el.cost}</p>
                        <Link to="/basket"><Button bg={"orange"} onClick={()=>handleBasket(el)}>ADD TO BASKET</Button></Link>
                    </div>
                )
            })}
        </div>
        <div style={{display:"flex",justifyContent:"center",gap:"20px",marginTop:"80px",marginBottom:"30px"}}>
            <Button bg={'red'}color={"white"} onClick={()=>setPage(page-1)} disabled={page===1}>Prev</Button>
            <Button>{page}</Button>
            <Button onClick={()=>setPage(page+1)} bg={'blue'}color={"white"} disabled={page===4}>Next</Button>
        </div>
        
    </div>
    <Footer/>
    </div>
  )
}

export default ShoesBags