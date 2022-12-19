import React from 'react';
import styled from "styled-components"
import FilterMenSort from './FilterMenSort';
import UserMenProducts from './UserMenProducts';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Section from "./Section"

const AllMenProducts = () => {
  return (
      <div>
        <Navbar/>

        <Section/>
        <FilterMenSort/>

        <WrapperUserProduct>
          <UserMenProducts/>
        </WrapperUserProduct>

      <Footer/>
    </div>
  )
}



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





export default AllMenProducts;