// src/components/AdminDashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './AdminDashboard.css';

const AdminDashboard = ({ onLogout }) => {
    const navigate = useNavigate(); // Initialize navigate

    // Define click handlers
    const handleAddPanelMember = () => {
        navigate('/user-list'); // Assuming this is the correct route for adding a new panel member
    };

    const handleAddVictimSupportService = () => {
        navigate('/add-victim-support-service'); // Route for adding victim support services
    };

    const handleViewAllVictims = () => {
        navigate('/victim-list'); // Route for viewing all victims
    };

    const handleGenerateReports = () => {
        navigate('/generate-reports'); // Route for generating reports
    }; // Closing brace added here

    return (
        <div className="admin-dashboard">
            <header>
                <h1>Admin Dashboard</h1>
                <button onClick={onLogout}>Logout</button>
            </header>
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
        </div>
    );
};

export default AdminDashboard;
