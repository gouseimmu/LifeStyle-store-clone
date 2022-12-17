import React, { children } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivatRoute = ({children}) => {
 const isAuth = useSelector((store)=> store.AuthReducer.isAdmin);

console.log(isAuth)
 if(!isAuth){
    console.log("Admin Successfully logged")
 }  
 return children
}


// export const SecondPrivate =({children})=>{
//     const isAuth = useSelector((s)=> s.AuthReducer.isAuth);
//     if(!isAuth) return <Navigate to="/login"/>
//     return children
// }