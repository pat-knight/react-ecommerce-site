import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { shoppingCart } from 'react-icons-kit/fa/shoppingCart';
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <nav className='navbar'>
                <ul className='navbar_left' role='navigation'>
                    <li className='navbar_home' name='home'>
                        <Link
                            to='/'
                            className={
                                window.location.pathname === '/' ? 'nav-link active' : 'nav-link'
                            }>
                            Home
                        </Link>
                    </li>                
                    <li className='navbar_products' name='products'>
                        <Link
                            to='products'
                            className={
                                window.location.pathname === '/products' ? 'nav-link active' : 'nav-link'
                            }>
                            Products
                        </Link>
                    </li>                
                    <li className='navbar_examples' name='examples'>
                        <a href='#'>Examples</a>
                    </li>                                
                </ul>
                <ul className='navbar_right' role='navigation'>                             
                    <li>
                        <Link
                            to='/cart'
                            className={
                                window.location.pathname === '/cart' ? 'nav-link active' : 'nav-link'
                            }>
                           Cart 
                           {/* <i>{shoppingCart} </i> */}
                        </Link>
                    </li> 
                    <li>
                        <Link
                            to='/checkout'
                            className={
                                window.location.pathname === '/' ? 'nav-link active' : 'nav-link'
                            }>
                           Checkout 
                        </Link>
                    </li> 
                </ul>
            </nav>
        )
    }
};

export default Navbar;