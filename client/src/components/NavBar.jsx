import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';  // Import the CSS file for styling

const NavBar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/admin">Admin</Link>
            <Link to="/login">Login</Link>
            <Link to="/user-form">User Form</Link>
            <Link to="/signup">Sign Up</Link>
        </nav>
    );
};

export default NavBar;
