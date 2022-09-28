import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([])
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className='shop-container'>
            <div className="products-container">
                <h4>All Products{products.length}</h4>
            </div>
            <div className="cart-container">
                <h4>Order Summary</h4>
            </div>
        </div>
    );
};

export default Shop;