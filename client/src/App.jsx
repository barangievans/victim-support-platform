// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Removed useNavigate
import AdminDashboard from './components/AdminDashboard';
import AdminLogin from './pages/AdminLogin';
import UserForm from './pages/UserForm';
import SignupForm from './pages/SignupForm';
import GenerateReport from './pages/GenerateReports';  // Import the GenerateReport component
import BookAppointment from './components/BookAppointment';  // Import the AppointmentForm component
import ResourceList from './components/ResourceList';  // Correct the path to ResourceList
import VictimSupportServices from './pages/VictimSupportServices';  // Import VictimSupportServices page
import NavBar from './components/NavBar';
import Footer from './components/Footer'; // Import the Footer component

const App = () => {
  // Check login state from localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // This function will handle login success and redirect user to admin dashboard
  const handleLoginSuccess = (navigate) => {
    setIsLoggedIn(true);
    navigate('/admin'); // Redirect to admin dashboard after login
  };

  useEffect(() => {
    if (localStorage.getItem('adminToken')) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <div>
        {/* Show NavBar only if logged in */}
        {isLoggedIn && <NavBar />} 

        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <Routes>
            {/* Admin Routes */}
            <Route 
              path="/admin" 
              element={isLoggedIn ? <AdminDashboard /> : <AdminLogin onLoginSuccess={handleLoginSuccess} />} 
            />
            <Route path="/admin-login" element={<AdminLogin onLoginSuccess={handleLoginSuccess} />} />

            {/* User Routes */}
            <Route path="/user-form" element={<UserForm />} />
            <Route path="/signup" element={<SignupForm />} />

            {/* Generate Report Route */}
            <Route path="/generate-reports" element={<GenerateReport />} />

            {/* Newly added Routes */}
            <Route path="/resource-list" element={<ResourceList />} />
            <Route path="/book-appointment" element={<BookAppointment />} />
            <Route path="/admin/victim-support-services" element={<VictimSupportServices />} />

            {/* Home Route */}
            <Route path="/" element={<h1>Welcome to the Victim Support Platform</h1>} />
          </Routes>
        </div>

        <Footer /> {/* Add the Footer component */}
      </div>
    </Router>
  );
};

export default App;
