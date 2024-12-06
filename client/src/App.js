// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import AdminLogin from './pages/AdminLogin';
import UserForm from './pages/UserForm';
import SignupForm from './pages/SignupForm';
import GenerateReport from './pages/GenerateReports';  // Import the GenerateReport component
import NavBar from './components/NavBar';
import Footer from './components/Footer'; // Import the Footer component

const App = () => {
    return (
        <Router>
            <NavBar />
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <Routes>
                    {/* Admin Routes */}
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="/login" element={<AdminLogin />} />
                    
                    {/* User Routes */}
                    <Route path="/user-form" element={<UserForm />} />
                    <Route path="/signup" element={<SignupForm />} />

                    {/* Generate Report Route */}
                    <Route path="/generate-report" element={<GenerateReport />} /> {/* Add the route */}

                    {/* Home Route */}
                    <Route path="/" element={<h1>Welcome to the Victim Support Platform</h1>} />
                </Routes>
            </div>
            <Footer /> {/* Add the Footer component here */}
        </Router>
    );
};

export default App;
