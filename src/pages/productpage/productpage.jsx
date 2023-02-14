import React from 'react'
import "./productpage.css"
import { useParams } from 'react-router-dom';

const ProductPage = () => {
    let { id } = useParams();
    return (
        <div>
            <h1>ProductPage: {id}</h1>
            <h1>ProductPage: {id}</h1>
            <h1>ProductPage: {id}</h1>
            <h1>ProductPage: {id}</h1>
            <h1>ProductPage: {id}</h1>
            <h1>ProductPage: {id}</h1>
        </div>
    )
}

export default ProductPage; 