import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ROUTES } from './RouteConstants'
import HomePage from '../pages/homePage/HomePage'
import ShopPage from '../pages/shopPage/ShopPage'
import CartPage from '../pages/cartPage/CartPage'
import Navbar from '../components/Navbar'

const ReactRoute = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path={ROUTES.home} element={<HomePage/>} />
            <Route path={ROUTES.shop} element={<ShopPage/>} />
            <Route path={ROUTES.cart} element={<CartPage/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default ReactRoute