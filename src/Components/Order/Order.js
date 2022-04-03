import React from 'react';
import useProducts from '../../hooks/useProducts';
import './Order.css'

const Order = () => {
    const [products, setProducts] = useProducts();
    return (
        <div className='order-container container'>
            <h2 className='mt-3'>Total Products : {products.length}</h2>
        </div>
    );
};

export default Order;