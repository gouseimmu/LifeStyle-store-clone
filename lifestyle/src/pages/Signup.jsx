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
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUpRequest } from "../Redux/AuthReducer/action";

const initState = {
    name: "",
    email: '',
    password: '',
    mobile: "",
}
const Signup = () => {
  const dispatch = useDispatch();
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
//   navigate("/login")
}
  return (
    <div className="box">
      <div className="outerDiv">
        <div className="innerDiv">
          <form onSubmit={handleSubmit}>
            <h3>Create Your Account</h3>
            <div className="formInputgroup">
              <input
                type="text"
                className="formInput"
                placeholder="Nick Name"
                onChange={handleChange}
                name="name"
                value={name}
              />
            </div>
            <div className="formInputgroup">
              <input
                type="email"
                className="formInput"
                placeholder="Email address"
                onChange={handleChange}
                name="email"
                value={email}
              />
            </div>
            <div className="formInputgroup">
              <input
                type="password"
                className="formInput"
                placeholder=" Password"
                onChange={handleChange}
                name="password"
                value={password}
              />
            </div>
            <div className="formInputgroup">
              <input
                type="number"
                className="formInput"
                placeholder="Enter mobile number"
                onChange={handleChange}
                name="mobile"
                value={mobile}
              />
            </div>
            <button type="submit" className="s">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;