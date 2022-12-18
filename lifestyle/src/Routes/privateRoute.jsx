import React from 'react'
 
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

 const PrivatRoute = ({children}) => {
 const isAdmin = useSelector((store)=> store.AuthReducer.isAdmin);
console.log("private",isAdmin)
 if(!isAdmin) return <Navigate to="/Signin"/>
 return children
}


 const SecondPrivate =({children})=>{
     const isAuth = useSelector((s)=> s.AuthReducer.isAuth);
    if(!isAuth) return <Navigate to="/Signin"/>
    return children
}

export {PrivatRoute,SecondPrivate}