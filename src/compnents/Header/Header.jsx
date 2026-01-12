import React from 'react';
import { Link, NavLink } from 'react-router';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h3>This is Header</h3>
            <nav>
            {/* <a href="/">Home</a>
            <a href="/Mobiles">Mobiles</a>
            <a href="/Laptops">Laptops</a> */}
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Mobiles">Mobiles</NavLink>
            <NavLink to="/Laptops">Laptops</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/users2">Users2</NavLink>
            </nav>
        </div>
       
    );
};

export default Header;