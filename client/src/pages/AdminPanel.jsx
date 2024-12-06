import React, { useState, useEffect } from 'react';
import AdminLoginForm from './AdminLoginForm'; // Path to your admin login form
import AdminDashboard from './AdminDashboard'; // Path to your admin dashboard

const AdminPanel = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [adminData, setAdminData] = useState(null); // To store admin information

    // Check if the admin is already logged in (based on localStorage)
    useEffect(() => {
        const storedAdminData = localStorage.getItem('adminData');
        if (storedAdminData) {
            setAdminData(JSON.parse(storedAdminData));
            setIsLoggedIn(true);
        }
    }, []);

    // Handle the login process
    const handleLogin = async (credentials) => {
        const response = await fetch('/api/admin/login', { // Update the API endpoint as needed
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials), // Send credentials in the request body
        });

        if (response.ok) {
            const data = await response.json(); // Parse the response if successful
            setAdminData(data); // Store admin data if needed
            setIsLoggedIn(true); // Set logged in status to true

            // Save admin data to localStorage for persistence across reloads
            localStorage.setItem('adminData', JSON.stringify(data));
        } else {
            alert('Login failed. Please check your credentials.'); // Alert on failure
        }
    };

    // Handle the logout process
    const handleLogout = () => {
        setAdminData(null); // Clear admin data
        setIsLoggedIn(false); // Set logged in status to false
        localStorage.removeItem('adminData'); // Remove admin data from localStorage
    };

    return (
        <div>
            {/* Conditionally render either the Dashboard or the Login Form */}
            {isLoggedIn ? (
                <AdminDashboard onLogout={handleLogout} adminData={adminData} />
            ) : (
                <AdminLoginForm onLogin={handleLogin} /> // Pass the login handler to AdminLoginForm
            )}
        </div>
    );
};

export default AdminPanel;
