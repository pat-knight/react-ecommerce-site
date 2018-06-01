import React from 'react';
import "./Navbar.css";

const Navbar = (props) => {
    return (
        <nav className='navbar'>
            <ul className='navbar_left' role='navigation'>
                <li>Home</li>                
                <li>Products</li>                
                <li>Examples</li>                                
            </ul>
            <ul className='navbar_right' rolse='navigation'>               
                <li>Cart</li>                
                <li>Checkout</li> 
            </ul>
        </nav>
    )
};

export default Navbar;