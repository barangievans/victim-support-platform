// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import SignupForm from './pages/SignupForm'; // Import SignupForm
import UserForm from './pages/UserForm'; // Import UserForm
import UserLogin from './pages/UserLogin'; // Import UserLogin
import AdminDashboard from './components/AdminDashboard'; // Import AdminDashboard

const App = () => {
    const handleUserLogin = (username, password) => {
        // Perform login logic here (e.g., authenticate with API)
        console.log("Attempting to log in with:", { username, password });

        // For example purposes, consider login successful if both fields are filled
        if (username && password) {
            alert("Login successful!");
            // Redirect or update the state based on successful login
        } else {
            alert("Login failed. Please check your credentials.");
        }
    };

    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<h1>Welcome to the Victim Support Platform</h1>} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/login" element={<UserLogin onLogin={handleUserLogin} />} />
                <Route path="/user-form" element={<UserForm />} />
                <Route path="/signup" element={<SignupForm />} />
            </Routes>
        </Router>
    );
};

export default App;
