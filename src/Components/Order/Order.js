import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import Cart from "../Cart/Cart";
import ReviewItems from '../ReviewItems/ReviewItems'
import "./Order.css";

const Order = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);

  return (
    <div className="order-container container">
      <Card className="card mb-3">
        <div className="row g-0">
          <div className="col-md-6">
            <h2>Total Products : {products.length}</h2>
            <Cart cart={cart}></Cart>
          </div>
          <div className="col-md-6">
            <div className="Card.Body">
              <h3 className="mb-3">Total order product : {cart.length}</h3>
              <Card.Header className="fs-3 fw-bold">Order List</Card.Header>
                {
                    cart.map(product => <ReviewItems
                        key={product.id}
                        product = {product}
                        ></ReviewItems>)
                }
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Order;
