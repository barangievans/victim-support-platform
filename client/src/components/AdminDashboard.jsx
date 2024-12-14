import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Check if the admin is logged in on component mount
    useEffect(() => {
        if (localStorage.getItem('adminToken')) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    // Define click handlers for various actions
    const handleAddPanelMember = () => {
        navigate('/user-list');
    };

    const handleAddVictimSupportService = () => {
        navigate('/add-victim-support-service');
    };

    const handleViewAllVictims = () => {
        navigate('/victim-list');
    };

    const handleGenerateReports = () => {
        navigate('/generate-reports');
    };

    // Handle logout functionality
    const handleLogout = () => {
        localStorage.removeItem('adminToken'); // Remove the admin token from storage
        setIsLoggedIn(false); // Update the state to reflect logout
        navigate('/admin-login'); // Redirect to the login page
    };

    // Handle login navigation
    const handleLogin = () => {
        navigate('/admin-login'); // Redirect to the login page
    };

    return (
        <div className="admin-dashboard">
            <header>
                <h1>Admin Dashboard</h1>
                <button onClick={isLoggedIn ? handleLogout : handleLogin}>
                    {isLoggedIn ? 'Logout' : 'Login'}
                </button>
            </header>

            {isLoggedIn && (
                <>
                    <section className="overview">
                        <h2>Overview</h2>
                        <p>Total Panel Members: <strong>0</strong></p>
                        <p>Total Victims Supported: <strong>0</strong></p>
                        <p>Total Services Offered: <strong>0</strong></p>
                    </section>

                    <section className="quick-actions">
                        <h2>Quick Actions</h2>
                        <button onClick={handleAddPanelMember}>Add New Panel Member</button>
                        <button onClick={handleAddVictimSupportService}>Add New Victim Support Service</button>
                        <button onClick={handleViewAllVictims}>View All Victims</button>
                        <button onClick={handleGenerateReports}>Generate Reports</button>
                    </section>

                    <section className="recent-activities">
                        <h2>Recent Activities</h2>

                        <h3>Panel Members</h3>
                        <button onClick={handleAddPanelMember}>Add New Panel Member</button>
                        <div>
                            <label>Select User:</label>
                            <select>
                                <option>Select a user...</option>
                                {/* Add options dynamically */}
                            </select>
                        </div>

                        <h3>Victim Support Services</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Service Name</th>
                                    <th>Description</th>
                                    <th>Available Panel Members</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Service Name</td>
                                    <td>Description</td>
                                    <td>Available Panel Members</td>
                                    <td>
                                        <button>Edit</button>
                                        <button>Delete</button>
                                    </td>
                                </tr>
                                {/* Repeat for more services */}
                            </tbody>
                        </table>

                        <h3>Victim List</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Support Service</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Name</td>
                                    <td>Support Service</td>
                                    <td>Status</td>
                                    <td>
                                        <button>Edit</button>
                                        <button>Delete</button>
                                    </td>
                                </tr>
                                {/* Repeat for more victims */}
                            </tbody>
                        </table>
                    </section>
                </>
            )}
        </div>
    );
};

export default AdminDashboard;
