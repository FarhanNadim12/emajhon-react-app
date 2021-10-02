import React from 'react';
import './Nav.css'
const Nav = () => {
    return (
        <div className="navContainer">
            <nav className="nav">
                <a href="./home">Home</a>
                <a href="./review">Order Review</a>
                <a href="./inventory">Products Inventory</a>
            </nav>
        </div>
    );
};

export default Nav;