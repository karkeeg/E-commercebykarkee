import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutUs from '../pages/AboutUs'
import Layout from '../pages/Layout'
import HomePage from '../pages/HomePage'
import MyPics from '../pages/MyPics'
import LoginPage from '../pages/LoginPage'
import ProductDetails from '../pages/ProductDetails'
import CartPage from '../pages/CartPage'

const MyRoutes = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Layout/>} > 

    <Route index element={<HomePage/>}/>
    <Route path='/about' element={<AboutUs/>} />
    <Route path='/mypics' element={<MyPics/>} />
    <Route path='/productdetails/:id' element={<ProductDetails/>} />
    <Route path='/cart' element={<CartPage/>} />
    

    </Route>
    <Route path='/login' element={<LoginPage/>} />
    </Routes>
   
    </BrowserRouter>
    </>
  )
}

export default MyRoutes