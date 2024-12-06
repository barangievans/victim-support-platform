// src/components/Footer.jsx
import React from 'react';
import './Footer.css'; // Create a separate CSS file for the footer styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p>
                        The Victim Support Platform is dedicated to providing resources, support services, and care to individuals in need. We aim to connect victims with the right support services to empower them towards recovery.
                    </p>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/signup">Sign Up</a></li>
                        <li><a href="/admin">Admin Dashboard</a></li>
                        <li><a href="/user-form">User Form</a></li>
                        <li><a href="/admin/reports">Generate Reports</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>Email: <a href="mailto:support@victimsupport.com">support@victimsupport.com</a></p>
                    <p>Phone: +1 800 123 4567</p>
                    <p>Address: 123 Support Lane, Victim City, Country</p>
                </div>

                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <ul>
                        <li><a href="https://facebook.com/victimsupport" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://twitter.com/victimsupport" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li><a href="https://instagram.com/victimsupport" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="https://linkedin.com/company/victimsupport" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Victim Support Platform. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
