import { Button, Grid, Img } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import "./Kids.css";
import {arr} from "./KidsSlicker";


const Kids = () => {
    const [data,getData]=useState([])
    const [sort,setSort]=useState("")
    const [page,setPage]=useState(1)
    var box=[]
    box=JSON.parse(localStorage.getItem("basket"))||[]
    const navigate=useNavigate()
    const kids=(sort,page)=>{
        return axios.get(`https://ravishiva-1pi.onrender.com/kidsware?_page=${page}&_limit=10&_sort=cost&_order=${sort}`).then((res)=>getData(res.data)).catch((err)=>console.log(err))
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
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "gray" }}
            onClick={onClick}
          />
        );
      }
    
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "gray" }}
            onClick={onClick}
          />
        );
      }
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
      };

  return (
    <div >
      <Navbar/>
        <div style={{width:"90%",margin:"auto",marginTop:"30px"}}>
        <Slider {...settings}>
        
            {arr.map((el)=>{
                return(
                    <div>
                        <Img h={500} w={1000} src={el.img}/>
                    </div>
                )
            })}
        
        </Slider>
        </div>

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
        <Footer/>
    </div>
  )
}

export default Kids