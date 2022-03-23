import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    const handleAddToCard = (product) =>{
        console.log(product);
        const newCard = [...cart, product];
        setCart(newCard);
    }
    return (
        <div className='shop-container px-5'>
            <div>
                <h2 className='text-center mb-3 text-decoration-underline text-success'>Our Products</h2>
                <div className="products-container">
                {
                    products.map(product => <Products key ={product.id}
                    product = {product}
                    handleAddToCard ={handleAddToCard}
                    ></Products>)
                }
                </div>
            </div>
            <div className="card-container text-center">
                <h2 className='text-center'>Order Summary</h2>
                <p>Selected Items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;