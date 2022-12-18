// import React, { useState } from 'react'
// import { Button,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody,ModalFooter, useDisclosure, Input, FormControl } from '@chakra-ui/react'
// import {useDispatch} from 'react-redux'
// import {useNavigate} from 'react-router-dom'
// import { signUpRequest } from '../Redux/AuthReducer/action'


// const initState = {
//     name: "",
//     email: '',
//     password: '',
//     mobile: "",
// }
// const Signup = () => {
//     const { isOpen, onOpen, onClose } = useDisclosure()


//     const [data,setData]=useState(initState)
//     const dispatch = useDispatch();
//   const navigate = useNavigate()
//     const { name, mobile, email, password } = data
//    const handleChange = (e)=>{
//     const { name, value } = e.target;
//     setData({...data, [name]: value})   
// }
// // console.log(...data)


// const handleSubmit = (e)=>{
//     e.preventDefault()
//   setData(initState)
//     dispatch(signUpRequest(data))
//     console.log("Signup success")
// //   navigate("/login")
// }
 
//   return (
//     <div>
//         <Button onClick={onOpen}>User</Button>
//          <Modal onClose={onClose} isOpen={isOpen} isCentered>
//            <ModalOverlay />
//            <ModalContent>
//              <ModalHeader>Signup</ModalHeader>
//              <ModalCloseButton />
//              <ModalBody>
//              <h1 count={2} />
//                <form onSubmit={handleSubmit}>
//                <label>Name :</label><br></br>
//                 <input  placeholder='enter name here' type='text' value={name} onChange={handleChange}/>
//                 <label>Mobile :</label><br></br>
//                 <input  placeholder='enter mobile here' type="number" value={mobile}  onChange={handleChange}/>
//                 <label>Email :</label><br></br>
//                 <input  placeholder='enter email here' type='email' value={email} onChange={handleChange}/>
//                 <label>Password :</label><br></br>
//                 <input  placeholder='enter Password here' type='password' value={password}  onChange={handleChange}/>  
//                 <button type='submit'>Submit</button>
//                </form>
//              </ModalBody>
//              <ModalFooter>
//                <Button onClick={onClose}>Close</Button>
               
//              </ModalFooter>
//            </ModalContent>
//          </Modal>
//     </div>
//   )
// }

// export default Signup
import { Button, Heading, Input, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { signUpRequest } from "../Redux/AuthReducer/action";

const initState = {
    name: "",
    email: '',
    password: '',
    mobile: "",
}
const Signup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch();
  const isAuth = useSelector((s)=>s.AuthReducer.isAuth)
  const navigate = useNavigate()
    const [ data, setData   ] = useState(initState);
    const { name, email, password, mobile } = data
const handleChange = (e)=>{
    const { name, value } = e.target;
    console.log(name ,value)
    setData({...data, [name]: value})   
}
console.log({...data})
const handleSubmit = (e)=>{
    e.preventDefault()
  setData(initState)
    dispatch(signUpRequest(data))
   navigate("/Signin")
}

 if(isAuth){
  navigate("/allwomenProducts")
 }
  return (
    <div className="box">
      <Navbar/>
      <Button ml={"40em"} mt={"2em"}  onClick={onOpen}>Do you Want to Continue ? Please Signup</Button>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
       <ModalOverlay />
        <ModalContent>
      <div className="outerDiv">
      <ModalHeader  >Signup</ModalHeader>
      <ModalBody>
        <div className="innerDiv">
          <form onSubmit={handleSubmit} style={{margin:'10px'}}>
            <Heading>Create Your Account</Heading>
            <div className="formInputgroup">
              <Input
                type="text" style={{border:"1px solid orange",margin:"10px"}}
                className="formInput"
                placeholder="Nick Name"
                onChange={handleChange}
                name="name"
                value={name}
              />
            </div>
            <div className="formInputgroup">
              <Input
                type="email" style={{border:"1px solid orange",margin:"10px"}}
                className="formInput"
                placeholder="Email address"
                onChange={handleChange}
                name="email"
                value={email}
              />
            </div>
            <div className="formInputgroup">
              <Input
                type="password"
                className="formInput" style={{border:"1px solid orange",margin:"10px"}} 
                placeholder=" Password" 
                onChange={handleChange}
                name="password"
                value={password}
              />
            </div>
            <div className="formInputgroup">
              <Input
                type="number" style={{border:"1px solid orange",margin:"10px"}} 
                className="formInput"
                placeholder="Enter mobile number"
                onChange={handleChange}
                name="mobile"
                value={mobile}
              />
            </div>
            <Button type="submit" bg={"blue.600"} color={"white"}>
              Create Account
            </Button>
            <Button margin={10}  bg={"red"} onClick={onClose}>Close</Button>
          </form>
        </div>
        </ModalBody>
      </div>
        </ModalContent>
      </Modal>
      <Footer/>
    </div>
  );
};

export default Signup;