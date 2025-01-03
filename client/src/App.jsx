import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import AdminLogin from './pages/AdminLogin';
import AdminSignUp from './pages/AdminSignUp';
import SuperAdminDashboard from './pages/SuperAdminDashboard';  // Import SuperAdminDashboard
import UserForm from './pages/UserForm';
import SignupForm from './pages/SignupForm';
import GenerateReport from './pages/GenerateReports';
import ResourceList from './components/ResourceList';
import BookAppointment from './components/BookAppointment';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import VictimSupportServices from './pages/VictimSupportServices';

const App = () => {
  return (
    <Router> {/* Ensure Router wraps the entire app */}
      <div>
        {/* Navigation Bar */}
        <NavBar />
        
        {/* Main content area */}
        <div>
          <Routes>
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin-signup" element={<AdminSignUp />} />  
            
            {/* Super Admin Routes */}
            <Route path="/super-admin" element={<SuperAdminDashboard />} />  {/* Super Admin Dashboard route */}
            
            {/* User Routes */}
            <Route path="/user-form" element={<UserForm />} />
            <Route path="/signup" element={<SignupForm />} />
            
            {/* Reports Route */}
            <Route path="/generate-reports" element={<GenerateReport />} />
            
            {/* Other Routes */}
            <Route path="/resource-list" element={<ResourceList />} />
            <Route path="/book-appointment" element={<BookAppointment />} />

            {/* Victim Support Services Route */}
            <Route path="/victim-support-services" element={<VictimSupportServices />} />
            
            {/* Home Route */}
            <Route path="/" element={<h1>Welcome to the Victim Support Platform</h1>} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
