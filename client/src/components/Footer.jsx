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
                    <p>Email: <a href="mailto:barangievans@gmail.com">barangievans@gmail.com</a></p>
                    <p>Phone: +254721971593</p>
                    <p>Address: Juja Town, Rim Plaza, Kiambu</p>
                </div>

                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <ul>
                        <li><button className="social-button" aria-label="Facebook link">Facebook</button></li>
                        <li><button className="social-button" aria-label="Twitter link">Twitter</button></li>
                        <li><button className="social-button" aria-label="Instagram link">Instagram</button></li>
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
