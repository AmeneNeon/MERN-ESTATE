import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signin from './pages/Signin'

import Profile from './pages/Profile'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Home from './pages/Home';
import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        
          <Route path='/' element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/sign-in" element={<Signin/>} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/profile" element={<Profile />} />
         
        
      </Routes>
    </BrowserRouter>
  )
}
