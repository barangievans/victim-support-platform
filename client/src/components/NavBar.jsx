import React from 'react'; 
import { Link } from 'react-router-dom';
import './NavBar.css';  // Import the CSS file for styling

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/admin-login" className="nav-link">Admin Login</Link></li> {/* Admin login link */}
        <li><Link to="/admin-signup" className="nav-link">Admin Sign Up</Link></li> {/* Admin signup link */}
        <li><Link to="/super-admin" className="nav-link">Super Admin Dashboard</Link></li> {/* Super Admin Dashboard link */}
        <li><Link to="/user-form" className="nav-link">User Form</Link></li>
        <li><Link to="/signup" className="nav-link">Sign Up</Link></li>
        <li><Link to="/resource-list" className="nav-link">Resource List</Link></li>
        <li><Link to="/book-appointment" className="nav-link">Book Appointment</Link></li>
        <li><Link to="/victim-support-services" className="nav-link">Victim Support Services</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
