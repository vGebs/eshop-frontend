import React from 'react'
import { Routes, Route } from "react-router-dom"

import { NavBar } from "./pages/components"
import HomePage from "./pages/homepage/homepage"
import Products from "./pages/products/products"
import Cart from "./pages/cart/cart"

import "./App.css"

const App = () => {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </div>
    )
}

export default App;