import { Box, Button, Flex, GridItem, Heading, HStack, Img, Input, VStack } from '@chakra-ui/react';
import { FaShareAltSquare, FaVine, FaZhihu } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Kids.css';
import React, { useEffect, useState } from "react";
import "./SingleProduct.css";
import Slider from "react-slick";
import axios from "axios";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


const Single = () => {
  const navigate = useNavigate();
  var box = [];
  box = JSON.parse(localStorage.getItem("basket")) || [];
  const [data, setData] = useState([]);
  const [, setShoe] = useState([]);

  var obj = JSON.parse(sessionStorage.getItem("single")) || {};

  const handleBasket = () => {
    navigate("/basket");
    // box.push(obj)
    // localStorage.setItem("basket",JSON.stringify(box))
    if (box.length >= 1) {
      box.map((dup, i) => {
        if (dup.id !== obj.id) {
          box.push(obj);
          localStorage.setItem("basket", JSON.stringify(box));
        }
      });
    } else {
      box.push(obj);
      localStorage.setItem("basket", JSON.stringify(box));
    }
  };
  const getData = () => {
    return axios
      .get(`https://ravishiva-1pi.onrender.com/kidsware`)
      .then((res) => setData(res.data));
  };
  //   console.log(data)
  const shoeData = () => {
    return axios
      .get(`https://test-api-9m2w.onrender.com/shoes&bags`)
      .then((res) => setShoe(res.data));
  };

  useEffect(() => {
    getData();
    shoeData();
  }, []);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const handleSlick1 = (el) => {
    // box.push(el)
    // localStorage.setItem("basket",JSON.stringify(box))
    navigate("/basket");
    if (box.length >= 1) {
      box.map((dup, i) => {
        if (dup.id !== el.id) {
          box.push(el);
          localStorage.setItem("basket", JSON.stringify(box));
        }
      });
    } else {
      box.push(el);
      localStorage.setItem("basket", JSON.stringify(box));
    }
  };
  const handleSlick2 = (el) => {
    // box.push(el)
    // localStorage.setItem("basket",JSON.stringify(box))
    navigate("/basket");
    if (box.length >= 1) {
      box.map((dup, i) => {
        if (dup.id !== el.id) {
          box.push(el);
          localStorage.setItem("basket", JSON.stringify(box));
        }
      });
    } else {
      box.push(el);
      localStorage.setItem("basket", JSON.stringify(box));
    }
  };
 
  return (
    <div>
         <Box w={'full'} position={'fixed'} zIndex={'10'}>
        <Navbar />
        </Box> 
    <div style={{display:"flex",gap:"30px" }}>

         <div className='single'>
            <Img src={obj.image1}/>
            <Img src={obj.image2}/>
            <Img src={obj.image3}/>
            <Img src={obj.image4}/>
         </div>
         <div style={{width:'40%',flexDirection:"column",justifyContent:"center"  }}>
         <GridItem textAlign={'center'}>
          <h1 style={{ color: "red" }}>
          ₹{obj.cost}
            <span style={{ color: "gray", fontSize: "10px" }}>
              inclusive of all taxes
            </span>
          </h1>
          <h1>₹100| Save ₹160 (10.01%)</h1>
          <p
            style={{
              color: "pink",
              fontSize: "12px",
              textDecoration: "underline",
              marginTop: "10px",
            }}
          >
            Free Shipping on all Orders
          </p>
          <Img
            h={50}
            border="1px solid red" 
            margin={10} 
            padding={1}
            borderRadius={5} src={obj.image1}/>

            <p style={{ color: "gray" }}>
              Color:{" "}
              <sapn style={{ fontSize: "15px", color: "black" }}>Blue</sapn>
            </p>
            <Button
              style={{ backgroundColor: "orange", marginTop: "30px" }}
              onClick={() => handleBasket()}
            >
              ADD TO BASKET
            </Button>
            <HStack
              fontSize={10}
              marginTop={5}
              justifyContent={"center"}
              gap={10}
            >
              <p>
                <FaVine />
                Add to favourites
              </p>
              <p>
                <FaShareAltSquare />
                Share
              </p>
            </HStack>
            <VStack style={{ fontSize: "10px", marginTop: "20px" }}>
              <p>PROMOTION OFFER</p>
              <p>
                Buy 2 Get 20 Percent Off{" "}
                <span style={{ textDecoration: "underline" }}>
                  Browse promotions
                </span>
              </p>
            </VStack>
            <VStack marginTop={"30"}>
              <Button>Click & Collect</Button>
              <p>
                Order this product now and collect it from a store of your
                choice. Learn more
              </p>
              <h4>Pay in installments</h4>
              <p>
                Pay in easy installments on orders of ₹ 3,000 or more. Available
                for select banks. Learn more
              </p>
            </VStack>
          </GridItem>
          <Flex gap={10} margin={"40px"}>
            <Input placeholder="enter Your Pincode" />
            <Button bg={"orange"}>Check</Button>
          </Flex>
          <Heading>Overview</Heading>
          <h1>
            Stay in vogue and redefine your trends with this t-shirt. Speaking
            volumes of its style quotient, this t-shirt highlights a henley
            neck, short sleeves, and a straight hemline to lend a perfect
            silhouette.
          </h1>
        </div>
      </div>

      <GridItem className="slicker">
        <h1 className="h1">You may also like</h1>
        <Slider {...settings}>
          {data.map((el) => {
            return (
              <div key={el.id}>
                <Img src={el.image1} />
                <h1>${el.cost}</h1>
                <p>{el.description}</p>
                <Button
                  style={{ backgroundColor: "orange", marginTop: "30px" }}
                  onClick={() => handleSlick1(el)}
                >
                  ADD TO BASKET
                </Button>
              </div>
            );
          })}
        </Slider>
      </GridItem>
      <GridItem className="slicker">
        <h1 className="h1">You may also like</h1>
        <Slider {...settings}>
          {data.map((el) => {
            return (
              <div key={el.id}>
                <Img src={el.image2} />
                <h1>${el.cost}</h1>
                <p>{el.description}</p>
                <Button
                  style={{ backgroundColor: "orange", marginTop: "30px" }}
                  onClick={() => handleSlick2(el)}
                >
                  ADD TO BASKET
                </Button>
              </div>
            );
          })}
        </Slider>
      </GridItem>
      <GridItem className="slicker">
        <h1 className="h1">You may also like</h1>
        <Slider {...settings}>
          {data.map((el) => {
            return (
              <div key={el.id}>
                <Img src={el.image1} />
                <h1>${el.cost}</h1>
                <p>{el.description}</p>
                <Button
                  style={{ backgroundColor: "orange", marginTop: "30px" }}
                  onClick={() => handleSlick1(el)}
                >
                  ADD TO BASKET
                </Button>
              </div>
            );
          })}
        </Slider>
      </GridItem>
      <GridItem className="slicker">
        <h1 className="h1">You may also like</h1>
        <Slider {...settings}>
          {data.map((el) => {
            return (
              <div key={el.id}>
                <Img src={el.image2} />
                <h1>${el.cost}</h1>
                <p>{el.description}</p>
                <Button
                  style={{ backgroundColor: "orange", marginTop: "30px" }}
                  onClick={() => handleSlick2(el)}
                >
                  ADD TO BASKET
                </Button>
              </div>
            );
          })}
        </Slider>
      </GridItem>
      <Footer/>
    </div>
  );
};

export default Single;
