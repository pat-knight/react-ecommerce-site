import React, { Component } from 'react';
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <nav className='navbar'>
                <ul className='navbar_left' role='navigation'>
                    <li className='navbar_home' name='home'><a href='#'>Home</a></li>                
                    <li className='navbar_products' name='products'><a href='#'>Products</a></li>                
                    <li className='navbar_examples' name='examples'><a href='#'>Examples</a></li>                                
                </ul>
                <ul className='navbar_right' rolse='navigation'>               
                    <li>Cart</li>                
                    <li>Checkout</li> 
                </ul>
            </nav>
        )
    }
};

export default Navbar;