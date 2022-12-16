import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrivatRoute } from '../components/privateRoute';
import Signin from './Signin';
import Signup from './Signup';
import Admin from '../Admin/Admin'


const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/Signin" element={<Signin/>}>Login</Route>
            <Route path="/Signup" element={<Signup/>}>Signup</Route>
            <Route path="/Admin" element={<PrivatRoute><Admin/></PrivatRoute>}>Admin</Route>
        </Routes>
    </div>
  )
}

export default MainRoutes