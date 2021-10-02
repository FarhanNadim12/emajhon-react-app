import React from 'react';
import './Product.css';
const Product = (props) => {

    const { img, name, seller, stock, price } = props.product;
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="details">
                <h4>{name}</h4>
                <p>By <b>{seller}</b></p>
                <p>${price}</p>
                <p>only <b>{stock}</b> left in stock - order soon</p>
                <button onClick={() => props.handleAddToCart(props.product)}>Add TO Cart</button>
            </div>
        </div>
    );
};

export default Product;