// import React, { useState } from 'react'
// import { Button,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody,ModalFooter, useDisclosure, Input, FormControl } from '@chakra-ui/react'
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { adminLoginRequest, loginRequest } from '../Redux/AuthReducer/action';


// const Signin = () => {
//     const { isOpen, onOpen, onClose } = useDisclosure()
    
//   const navigate = useNavigate();
//   const [emaillogIn, setEmaillogIn] = useState("");
//   const [passwordlogIn, setPasswordlogIn] = useState("");
//   const dispatch = useDispatch();
//   const store = useSelector((store) => store.isAuth);
//   console.log(store)

//   function handleLogin(e) {
//     e.preventDefault();
//     let data = { email: emaillogIn, password: passwordlogIn };
//     // console.log(data)

//     if (emaillogIn === "admin@admin.com" && passwordlogIn === "admin") {
//       dispatch(adminLoginRequest(data));
//       console.log("Admin Successful")
//        navigate("/admin")
//     } else {
//       dispatch(loginRequest(data))
//       console.log("user Login Successful")
//     }
//   }
//   return (
//     <div>
//           <div>
//         <Button onClick={onOpen}>User</Button>

//          <Modal onClose={onClose} isOpen={isOpen} isCentered>
//            <ModalOverlay />
//            <ModalContent>
//              <ModalHeader>Login</ModalHeader>
//              <ModalCloseButton />
//              <ModalBody>
//                <h1 count={2} />
//                <FormControl onSubmit={handleLogin}>
//                 <label>Email :</label><br></br>
//                 <Input style={{border:"3px solid orange"}} placeholder='enter email here' onChange={(e)=>setEmaillogIn(e.target.value)}/>
//                 <label>Password :</label><br></br>
//                 <Input style={{border:"3px solid orange"}} placeholder='enter Password here' onChange={(e)=>setPasswordlogIn(e.target.value)}/>
//                 <Button type={'submit'}>Submit</Button>
//                 <Button onClick={onClose}>Close</Button>
//                </FormControl>
//              </ModalBody>
//            </ModalContent>
//          </Modal>
//     </div>
//     </div>
//   )
// }

// export default Signin
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adminLoginRequest, loginRequest } from "../Redux/AuthReducer/action";
import { Button,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody,ModalFooter, useDisclosure, Input, FormControl } from '@chakra-ui/react'

// import { adminLoginRequest, loginRequest } from "../../Redux/Auth/action";


const Signin = () => {
  // const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [emaillogIn, setEmaillogIn] = useState("");
  const [passwordlogIn, setPasswordlogIn] = useState("");
  const dispatch = useDispatch();
  const store = useSelector((store) => store.AuthReducer);
  function handleLogin(e) {
    e.preventDefault();
    let data = { email: emaillogIn, password: passwordlogIn };
    if (emaillogIn === "admin@admin.com" && passwordlogIn === "admin") {
      
      dispatch(adminLoginRequest(data));
      console.log("Admin Successful")
      //  navigate("/admin")
    } else {
      dispatch(loginRequest(data))
    }
  }


  // if (store.isAuth) {
  //   navigate("/cart");
  // }

  return (
    <div>
      <Button onClick={onOpen}>User</Button>
     <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
      <div id="signin_pare">
        <h3 id="sign">Sign In</h3>
        <ModalHeader>Login</ModalHeader>
        <form onSubmit={handleLogin}>
          <Input
            id="mail"
            type="email" width={60}
            className="formInput"
            placeholder="Email address"
            onChange={(event) => setEmaillogIn(event.target.value)}
          />
          <br />
          <Input
            type="password" width={60}
            className="formInput"
            placeholder="Password"
            onChange={(event) => setPasswordlogIn(event.target.value)}
          />
          <br />
          <Button type="submit">SIGN IN</Button>
          <br />
        </form>
      </div>

      {/* {flag && (
            //    <Alert color ="primary" variant='danger'>
            //       Please Fill Correct Info 
            //    </Alert> 
            )} */}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Signin;