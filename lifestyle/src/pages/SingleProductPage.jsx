import { Grid, GridItem, HStack, Img, Input, PinInput, PinInputField, VStack } from '@chakra-ui/react';
import React from 'react';
import './SingleProduct.css';
import Slider from "react-slick";
import {useSelector} from 'react-redux'

const SingleProduct = () => {
  const detailArr = useSelector((store)=>store.details)


    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div>
        <div className='container'>
                <Grid 
  templateRows='repeat(5, 0.1fr)'
  templateColumns='repeat(2, 0.48fr)'
  gap={1} >
   
                <Img  src={detailArr.image} alt='siva'/>
                <Img  src={detailArr.image}alt='siva'/>
                <Img  src={detailArr.image}alt='siva'/>
                <Img  src={detailArr.image}alt='siva'/>
                <Img  src={detailArr.image}alt='siva'/>
                <Img  src={detailArr.image}alt='siva'/>
                <Img  src={detailArr.image}alt='siva'/>

                </Grid>
              <GridItem>
                <h1></h1>
                <Img h={50}  border="1px solid red" margin={10} padding={1} borderRadius={5}  src='data:image/jpeg;base64,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'/>
                <HStack>
                  <div></div>
                </HStack>
                
              </GridItem>        
        </div>
        <GridItem >
         <Slider {...settings}>
            
                <Img  src='https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&w=1000&q=80' alt='siva'/>
                <Img  src='https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&w=1000&q=80'alt='siva'/>
                <Img  src='https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&w=1000&q=80'alt='siva'/>
                <Img  src='https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&w=1000&q=80'alt='siva'/>
                <Img  src='https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&w=1000&q=80'alt='siva'/>
                <Img  src='https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&w=1000&q=80'alt='siva'/>
                <Img  src='https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&w=1000&q=80'alt='siva'/>
                <Img  src='https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&w=1000&q=80' alt='siva'/>
                <Img  src='https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&w=1000&q=80'alt='siva'/>
                <Img  src='https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&w=1000&q=80'alt='siva'/>
                <Img  src='https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&w=1000&q=80'alt='siva'/>
                <Img  src='https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&w=1000&q=80'alt='siva'/>
                <Img  src='https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&w=1000&q=80'alt='siva'/>
                <Img  src='https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&w=1000&q=80'alt='siva'/>
            
         </Slider>
        </GridItem>
        <GridItem >
         <Slider {...settings}>
            
                <Img  src='https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&w=1000&q=80' alt='siva'/>
                <Img  src='https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&w=1000&q=80'alt='siva'/>
                <Img  src='https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&w=1000&q=80'alt='siva'/>
                <Img  src='https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&w=1000&q=80'alt='siva'/>
                <Img  src='https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&w=1000&q=80'alt='siva'/>
                <Img  src='https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&w=1000&q=80'alt='siva'/>
                <Img  src='https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&w=1000&q=80'alt='siva'/>
                <Img  src='https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&w=1000&q=80' alt='siva'/>
                <Img  src='https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&w=1000&q=80'alt='siva'/>
                <Img  src='https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&w=1000&q=80'alt='siva'/>
                <Img  src='https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&w=1000&q=80'alt='siva'/>
                <Img  src='https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&w=1000&q=80'alt='siva'/>
                <Img  src='https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&w=1000&q=80'alt='siva'/>
                <Img  src='https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&w=1000&q=80'alt='siva'/>
            
         </Slider>
        </GridItem>
    </div>    
  )
}

export default SingleProduct