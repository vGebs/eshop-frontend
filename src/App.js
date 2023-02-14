import React from 'react'
import { Routes, Route } from "react-router-dom"

import { NavBar } from "./pages/components"
import HomePage from "./pages/homepage/homepage"
import Products from "./pages/products/products"
import Cart from "./pages/cart/cart"
import ProductPage from "./pages/productpage/productpage"

import "./App.css"

const App = () => {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<Products />} />
                <Route path="/ourMission" element={<div><h1>Our mission</h1><h1>Our mission</h1><h1>Our mission</h1></div>} />
                <Route path="/contact" element={<div><h1>Contact</h1><h1>Contact</h1><h1>Contact</h1></div>} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/product/:id" element={<ProductPage/>} />
            </Routes>
        </div>
    )
}

export default App;