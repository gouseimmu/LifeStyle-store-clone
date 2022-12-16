import React from 'react';
import styled from "styled-components"
import FilterSort from './FilterSort';
import UserProducts from './UserProducts';



const AllProducts = () => {
  return (
      <div>
        <FilterSort/>
         {/* <WrapperCustomer id='customer'>
            <h1>CLOTHING FOR CUSTOMER</h1>
        </WrapperCustomer> */}
     
    {/* <Wrapper color="green"> */}
      {/* <WrapperFilterSort>
        <FilterSort/>
      </WrapperFilterSort> */}
{/* <FilterSort/>
<UserProducts/> */}


        <WrapperUserProduct>
          <UserProducts/>
        </WrapperUserProduct>
        
    {/* </Wrapper> */}
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
// `;

 const WrapperUserProduct = styled.div`

 @media (min-width: 0px) {
  width:90%;
   padding:20px;
   display:grid;
   justify-content:center;
   box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
   grid-template-columns:repeat(1,1fr);
   margin:auto;
   gap:30px;
 }
  

      @media (min-width: 500px) {
       width:90%;
        padding:20px;
        display:grid;
        justify-content:center;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        grid-template-columns:repeat(2,1fr);
        margin:auto;
        gap:30px;
      }

      @media (min-width: 768px) {
        width:90%;
        padding:20px;
        display:grid;
        justify-content:center;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        display:grid;
        grid-template-columns:repeat(3,1fr);
        gap:30px;
        margin:auto;
      }

      @media (min-width: 1024px) {
        width:90%;
        padding:20px;
        display:grid;
        justify-content:center;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        display:grid;
        grid-template-columns:repeat(4,1fr);
        gap:30px;
        margin:auto;
      }
    
`;





export default AllProducts;