import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Products.css'

const Products = (props) => {
    const {product, handleAddToCard} = props;
    const {name, price, ratings, img, seller} = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='py-3'>
                <div className='px-3'>
                    <h5>{name}</h5>
                    <p>Price: ${price}</p>
                    <p>Rating: {ratings}</p>
                    <p>Seller: {seller}</p>
                </div>
            </div>
            <div className='footer-card'>
                 <button onClick={()=> handleAddToCard(product)} className='card-btn py-2'><small className='me-2 fs-5 fw-bold'>Add to Card</small> <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
                
            </div>
        </div>
    );
};

export default Products;