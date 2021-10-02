import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Product.css'
const Products = (props) => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h2>Products: {products.length}</h2>
            {
                products.map(product => <Product handleAddToCart={props.handleAddToCart} key={product.key} product={product}></Product>)
            }
        </div>
    );
};

export default Products;