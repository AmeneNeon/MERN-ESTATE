import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signin from './pages/Signin'

import Profile from './pages/Profile'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
          <Route path='/' element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/sign-in" element={<Signin/>} />
          <Route path="/sign-out" element={<SignUp/>} />
          <Route path="/profile" element={<Profile />} />
         
        
      </Routes>
    </BrowserRouter>
  )
}
