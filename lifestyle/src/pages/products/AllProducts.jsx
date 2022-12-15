import React from 'react';
import styled from "styled-components"
import FilterSort from './FilterSort';
import UserProducts from './UserProducts';



const AllProducts = () => {
  return (
      <div>
         {/* <WrapperCustomer id='customer'>
            <h1>CLOTHING FOR CUSTOMER</h1>
        </WrapperCustomer> */}
     
    <Wrapper color="green">
      {/* <WrapperFilterSort>
        <FilterSort/>
      </WrapperFilterSort> */}
<FilterSort/>
<UserProducts/>


        {/* <WrapperUserProduct>
        </WrapperUserProduct> */}
        
    </Wrapper>
    </div>
  )
}

// const WrapperCustomer = styled.h1`
// // font-size:40px;
// width:100%,
// padding :30px;
// text-align:center;
// margin-top:100px;
// border:3px solid black;
// background-color:teal;
// color:white;

// `

const Wrapper = styled.div`
 
   min-height:100vh;
   padding:50px;
   background-color: floralwhite;
   margin-top:80px;
  
`;
const WrapperFilterSort = styled.div`
 width:100px;
  position:fixed;
  padding:50px;
  border:2px solid teal;
`;
// const WrapperUserProduct = styled.div`
// width:100%;
// padding:20px;
// margin:auto;
// box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;  
// display:grid;
// grid-template-columns:repeat(4,1fr);
// justify-content:center;
// grid-gap:30px;
// `




export default AllProducts;