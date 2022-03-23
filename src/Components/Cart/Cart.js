import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = (total * 0.10).toFixed(3);
    return (
        <div className='cart'>
            <h2 className='text-center py-3'>Order Summary</h2>
            <div className='text-end cart-p'>
                <p>Selected Items: {cart.length}</p> 
                <p>Total Price: ${total}</p>
                <p>Total Shipping: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <h4>Grand Total: </h4>
            </div>
        </div>
    );
};

export default Cart;