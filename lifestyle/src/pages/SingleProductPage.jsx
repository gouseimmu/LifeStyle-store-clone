import {
  Grid,
  GridItem,
  HStack,
  Img,
  Input,
  PinInput,
  PinInputField,
  VStack,
  Heading,
  Button,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "./SingleProduct.css";
import Slider from "react-slick";
import {
  FaUnderline,
  FaShareAltSquare,
  FaVine,
  FaZhihu,
  FaEdit,
} from "react-icons/fa";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "../Redux/AppReducer/action";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const detailArr = useSelector((store) => store.AppReducer.product);
     
  console.log(detailArr)
   const [data, setData] = useState([]);
  const { id } = useParams();
  
  const [currentProduct, setCurrentProduct] = useState({});
  console.log(id)
  const dispatch = useDispatch();
  useEffect(() => {
    if (detailArr.length === 0) {
      dispatch(getProductList());
    }
  }, [dispatch, detailArr.length]);


  // const getData = () => {
  //   return axios
  //     .get(`https://koti-api.onrender.com/womenproducts`)
  //     .then((res) => setData(res.data));
  // };
  // console.log(data)

  // useEffect(() => {
  //   getData();
  // }, []);

  useEffect(() => {
    if (id) {
      console.log(detailArr)
      const  pro = detailArr.find((item)=>
           item.Number(id) === Number(id)
      )
      
     pro && setCurrentProduct(pro)
       console.log(pro);
    }
  }, [id]);
import { useSelector } from "react-redux";
// import {useSelector} from 'react-redux'

const SingleProduct = () => {
  // const detailArr = useSelector((store)=>store.details)
  const [data, setData] = useState([]);
  const {singleProduct} = useSelector((store)=>store.AppReducer)

// map the object using singleProduct 

  const getData = () => {
    return axios
      .get(`https://koti-api.onrender.com/womenproducts`)
      .then((res) => setData(res.data));
  };
  console.log(data);

  useEffect(() => {
    getData();
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
    autoplaySpeed: 1000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <div className="title">
        <p>{currentProduct.title}</p>
        <p>CODE Women Textured Longline Shrug</p>
      </div>
      <div className="container">
        <Grid
          templateRows="repeat(5, 0.1fr)"
          templateColumns="repeat(2, 0.48fr)"
          gap={1}
        >
          <Img src={currentProduct.image} alt="siva" />
          <Img src={currentProduct.image} alt="siva" />
          <Img src={currentProduct.image} alt="siva" />
          <Img src={currentProduct.image} alt="siva" />
          <Img src={currentProduct.image} alt="siva" />
          <Img src={currentProduct.image} alt="siva" />
          <Img src={currentProduct.image} alt="siva" />

          <Img
            src="https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="siva"
          />
          <Img
            src="https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="siva"
          />
          <Img
            src="https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="siva"
          />
          <Img
            src="https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="siva"
          />
          <Img
            src="https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="siva"
          />
          <Img
            src="https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="siva"
          />
          <Img
            src="https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="siva"
          />
        </Grid>

        <GridItem>
          <h1 style={{ color: "red" }}>
             {currentProduct.price}
            ₹1439{" "}
            <span style={{ color: "gray", fontSize: "10px" }}>
              inclusive of all taxes
            </span>
          </h1>
          <discount>₹1599| Save ₹160 (10.01%)</discount>
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
            borderRadius={5}
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHkAUAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAgYHCAEDBQT/xAA5EAACAQMCAwYEAggHAAAAAAABAgMABBEFBhIhMQdBUWFxgRMiMpGhwQgUIzNDYrHhQoKDkqKy8P/EABcBAQEBAQAAAAAAAAAAAAAAAAACAwH/xAAcEQEBAQEBAQADAAAAAAAAAAAAAQIRMRIhQVH/2gAMAwEAAhEDEQA/AJxooooCuBvrXjtva19qiBTNGoWFW6GRiFXPlk5PkK79Rb2/3fDt7TbEPgz3fG2O9UU/mw+1crsnaY22rXc+4jJq51+4gnU8ccj3DcROevDnAXl0xjBPLFTjs7V5Nb29a3lwqLc/NFcKh+USoxVseRIJHkRUWbTltptOthbQfEuYh8N1VhkADhIIzjuA5f3p4dll/bXJ121smU28F6GjVTnGVAOPLiQms867rjXeJMyw/aKKK1YiiiigKKKKDDEKCScAdTVdO3PcNtrW4ba20y6iube0t8GWFwy8bE8QyPABamDtV1JtK2BrFxG5WR4RAhBwcyEJy9AxPtVWFweQ7qB72e8tLttuPbDSWOpiIxI5wY+Y5tnOfHlj3rz9mu8G2drTXM8ck9jLH8OaKLHF5EZwOXt1NNMpSgMLmpmZPFXVvq3+h6vZ67pVvqenSfEtrheJGIwRg4II7iCCD6V76iL9HrVzNpepaO5z+rSLcRnwV8gj7rn/ADVLtUkUUUUGtZ4ncokqM46qGBIrZTMn29q+nX5utNljuImYt8P6JE5nGCTg8jjnXrOuapBkXdr8HHfLCcf7gcVH1z2NPjvlM/8ASInZNt6ZAHULJfcTJnm2EbHLw5/0qAVOGNSd22S3F/f6bfyXkc0bK0CW8a4+G3XI6k5/IUx9Wjn0yJNHmyjxsLi5jI5rKy8lPmqkAjxLVUvZ1Fll5XgVsilqjyusUSF5HIVEUZLE8gB55rUO6tsMjwzRzQuUkjYMjr1Vgcgj3rrh8dimv2ehbokOoXCQW13bGIOwJ/aca8A5eOTVk81VOXbGp6xpp3BoVm93AxIu4bcZe3nHNvkHPhOQwxnAbHLFTdtyDcemaJYWgt70NFAoZnZHy2OZ5knrnl3Vy3iszp/1jNNKQ7lugYZIpVjPVgUUkeHI5roba0e40+S4nu5izynCoCMKvdnHfXJrv6dueT13qKKKpDj7pvbHSNEutXv4IpFsUM8YdQT8QD5eHPRiTgetVIu7ma8nnvLpuOeeRpZG8WYkk/c1MH6Q+uI82naDEcmPN3MfAnKoP+x+1QyM8AyeuKDZ0kA8qznl6N+dJ/jD0rHVZKCRuxndEegbkazvphHY6kojZmOFjlH0EnuByV918KsYMHpVMTgjxBqzvZPuFtw7PtnuJC95aH9WuCTzZlAw3upU+uaB5UUUUBSZHWNGeRgqKMszHAA8aVTS7V9RfTOz7Wpo/rkhEA/1GCH8GJ9qCue+dWGubs1fUkYNFPcERMO9Fwin3VRXE7wP5h/SsNz4R+FKAywP835UAP3woTrIKwvOalR9W8zQKU/ID5U/uyLecG1tZmg1JiunXwVXk7oXB+Vz5YJBPp4VH6/u8eFKGO/pQXPUhgCDkHoRWaZ3ZHqz6tsLTZJ345rcNbOc5PyHC58+HhPvTxoCo17c9M1vV9AsrbRrKe7hS4MtysOC2AuF+XOW5k9AelSVRQUvura4s51S8glt3z9M0ZQ/iK1x88Y6cX5VdGSNJF4ZEVx4MMiuBquxtr6tM02oaJZyTOwZpQnAzEDHMrgmgqcg/bVsSMsrkEcjUva1sPRpt26jbxQJDHGwZI4P2YUMobGB4Zp8bR2HtmLSYzcaLYXM3G+ZLiBZDjJx9We7FTNS3irmydVpEZVyrEAM2F8z/wCI+9OPRtibk1l1Wy0q64T/ABZozFGB48TYz7ZNWc03RNL0uIRadp9tbRq7OqxRBQrHGSPDOB9q6FUky+y/Z97s7Sbm2v76K4e4lEvw4lPDEeHBwx5tnA7h0p6UUUBRRRQFYNZrm7jvZtO0S9vLZA80MRZAegPifIdfagjC/uZo9/X1yqM0MsjK+B9IT5cny5VI+2ZM280WeavxexH9jXD2VawXNxqElyFlkMKo/EOZD8RfPqR+FatF1GXR9TksZlaRVultGbOTws2I2/5DPqaynsrfX5lz/D7ooFFasBRRRQAooooCvBr0E11ot/b2qK88tvIkascAsVOM+9e49KyOlBHnZrBuVL+6k13SRYQ/BC5JGZGyMYAY8gM/em/o+vyXm/ZbBdNvGkk1NmdymFiVJDzOM8sL6edTEelJ/wAZ9K58xX1ShWaKK6lg9cVmkN9a+9KHU0H/2Q=="
          />
          <p style={{ color: "gray" }}>
            Color:{" "}
            <sapn style={{ fontSize: "15px", color: "black" }}>Blue</sapn>
          </p>
          <Button style={{ backgroundColor: "orange", marginTop: "30px" }}>
            ADD TO BASKET
          </Button>
          <HStack fontSize={10} marginTop={5} gap={10}>
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
          <VStack>
            <p>
              <FaZhihu />
              Click & Collect
            </p>
          </VStack>
        </GridItem>
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
                <Button bg={"orange"}>ADD TO BASKET</Button>
              </div>
            );
          })}
        </Slider>
      </GridItem>
      <GridItem className="slicker">
        <h1 className="h1">Customer Also Viewed</h1>
        <Slider {...settings}>
          {data.map((el) => {
            return (
              <div key={el.id}>
                <Img src={el.image1} />
                <h1>${el.cost}</h1>
                <p>{el.description}</p>
                <Button bg={"orange"}>ADD TO BASKET</Button>
              </div>
            );
          })}
        </Slider>
      </GridItem>
    </div>
  );
};

export default SingleProduct;
