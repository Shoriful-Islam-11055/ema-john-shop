import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h2 className='text-center py-3'>Order Summary</h2>
             <p>Selected Items: {cart.length}</p> 
        </div>
    );
};

export default Cart;