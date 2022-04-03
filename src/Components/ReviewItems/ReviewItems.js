import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./ReviewItems.css";

const ReviewItems = ({ product }) => {
  const { name, img, price, shipping, quentity } = product;
  return (
    <div>
      <Card>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <div className="d-flex d-flex justify-content-between align-items-center">
               <div className="d-flex align-items-center">
                    <div>
                        <img className="review-item-img" src={img} alt="" />
                    </div>
                    <div>
                        <h6 className="fw-bold" title={name}>{name.length >= 20 ? name.slice(0, 18) : name}...</h6>
                        <h6> Price : {price} </h6>
                        <h6> Shipping : {shipping} </h6>
                    </div>
                </div>
                <div>
                    <Button className="btn-icon">
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    </Button>
                </div>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default ReviewItems;
