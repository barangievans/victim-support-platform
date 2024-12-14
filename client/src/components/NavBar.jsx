// src/components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';  // Import the CSS file for styling

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><Link to="/" className="nav-link">Home</Link></li>
                <li><Link to="/admin" className="nav-link">Admin</Link></li>
                <li><Link to="/user-form" className="nav-link">User Form</Link></li>
                <li><Link to="/signup" className="nav-link">Sign Up</Link></li>

                {/* Added links for Resource List, Book Appointment, and Victim Support Services */}
                <li><Link to="/resource-list" className="nav-link">Resource List</Link></li>
                <li><Link to="/book-appointment" className="nav-link">Book Appointment</Link></li>

                {/* Corrected the path for Victim Support Services */}
                <li><Link to="/victim-support-services" className="nav-link">Victim Support Services</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
