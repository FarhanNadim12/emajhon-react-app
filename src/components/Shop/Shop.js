import React, { useState } from 'react';
import Products from '../Products/Products';
import './Shop.css'
const Shop = () => {
    const [carts, setCarts] = useState([]);

    const handleAddToCart = (product) => {
        const newCount = [...carts, product];

        setCarts(newCount)
    }
    console.log(carts)
    let price = 0;
    let shipping = 0;
    carts.forEach(cart => {
        let newPrice = price + cart.price;
        let newShipping = shipping + cart.shipping;
        price = newPrice;
        shipping = newShipping;
    });
    let totalPriceBeforeTax = price + shipping;
    let tax = 0;
    if (totalPriceBeforeTax > 100) {
        let newTax = totalPriceBeforeTax * 0.05;
        tax = newTax;
    } else if (totalPriceBeforeTax > 300) {
        let newTax = totalPriceBeforeTax * 0.10;
        tax = newTax;
    } else if (totalPriceBeforeTax > 300) {
        let newTax = totalPriceBeforeTax * 0.15;
        tax = newTax;
    }
    const grandTotal = totalPriceBeforeTax + tax;
    return (
        <div className="shop">
            <div className="products">
                <Products handleAddToCart={handleAddToCart} ></Products>

            </div>
            <div className="summary">
                <h3>Shopping Summary</h3>
                <h4>items: {carts.length}</h4>
                <p><b>Price:</b> ${price.toFixed(2)}</p>
                <p><b>Shipping And Handling: $</b>{shipping.toFixed(2)}</p>
                <p><b>Total before tax:</b> {totalPriceBeforeTax.toFixed(2)}</p>
                <p><b>Tax:</b> ${tax.toFixed(2)}</p>
                <p><b>Grand Total:</b> ${grandTotal.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default Shop;