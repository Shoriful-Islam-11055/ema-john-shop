import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import './Order.css'

const Order = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    return (
        <div className='order-container container'>
            <h2 className='mt-3'>Total Products : {products.length}</h2>
            <h3>Total order product : {cart.length}</h3>
        </div>
    );
};

export default Order;