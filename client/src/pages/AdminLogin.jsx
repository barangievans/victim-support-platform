import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook for navigation

const AdminLogin = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock login logic, replace with actual authentication logic
    // Check credentials and role
    if (username === 'superadmin' && password === 'password') {
      // Super Admin login - redirect to Super Admin Dashboard
      localStorage.setItem('adminToken', 'superadmin_token');  // Set token in localStorage
      localStorage.setItem('role', 'super_admin');  // Store the role
      navigate('/super-admin');  // Redirect to the Super Admin Dashboard
    } else if (username === 'admin' && password === 'password') {
      // Admin login - redirect to Admin Dashboard
      localStorage.setItem('adminToken', 'admin_token');  // Set token in localStorage
      localStorage.setItem('role', 'admin');  // Store the role
      navigate('/admin');  // Redirect to the Admin Dashboard
    } else {
      alert('Invalid credentials');
    }

    // Call the parent callback on login success (optional if you have specific login success behavior)
    onLoginSuccess && onLoginSuccess();
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
