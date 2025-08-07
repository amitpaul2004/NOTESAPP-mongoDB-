import React from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import './App.css' // Assuming you have an App.css for styles
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
 

export default function App() {
  return(
    <>
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/login'element={<Login></Login>}></Route>
      

    </Routes>
    </BrowserRouter>
    
    
    </>
  )
}