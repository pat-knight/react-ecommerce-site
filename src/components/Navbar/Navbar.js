import React from 'react';
import "./Navbar.css";

const Navbar = (props) => {
    return (
        <nav className='navbar'>
            <span className='navbar_left'>
                <a href='/'>Home</a>                
                <a href='/'>Home</a>                
                <a href='/'>Home</a>                
            </span>
            <span className='navbar_right'>
                <a href='/'>Home</a>                
                <a href='/'>Home</a>                
                <a href='/'>Home</a> 
            </span>
        </nav>
    )
};

export default Navbar;