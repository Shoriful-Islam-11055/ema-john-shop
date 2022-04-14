import React, { useEffect, useState } from 'react';
import { Button, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([]);


    useEffect(()=>{
        const storedCart = getStoredCart();
        const saveCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id]; 
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
            }
        }
        setCart(saveCart);
    },[products]);

    const handleAddToCard = (selectedProduct) =>{
        // console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        
        setCart(newCart);
        addToDb(selectedProduct.id);
    }
    return (
        <div className='shop-container'>
            <div className='mt-3'>
                <h2 className='text-center mb-3 text-decoration-underline text-success'>Our Products</h2>
                <div className="products-container container">
                {
                    products.map(product => <Products key ={product.id}
                    product = {product}
                    handleAddToCard ={handleAddToCard}
                    ></Products>)
                }
                </div>
            </div>
            <div className="card-container">
                <Cart cart = {cart}>
                <Link to ='/order'><Button>Review Product</Button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;