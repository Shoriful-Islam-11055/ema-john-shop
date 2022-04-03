import { Button } from 'bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        
        total = total + (product.price * product.quantity);
        shipping = shipping + product.shipping;
    }
    const tax = (total * 0.10).toFixed(3);
    let grand = (parseFloat(total) + parseFloat(tax) + parseFloat(shipping)).toFixed(2);
    return (
        <div className='cart'>
            <h2 className='text-center py-3'>Order Summary</h2>
            <div className='text-end cart-p'>
                <p>Selected Items: {quantity}</p> 
                <p>Total Price: ${total}</p>
                <p>Total Shipping: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <h5>Grand Total: ${grand}</h5>
               {
                   props.children
               }
            </div>
        </div>
    );
};

export default Cart;