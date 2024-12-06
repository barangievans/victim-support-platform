// src/pages/UserForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Replace this with actual registration logic (e.g., API call)
        console.log('Registering user', { username, email, password });
        
        // Simulate successful registration
        if (username && email && password) {
            alert('User registered successfully!');
            // Redirect to login page after successful registration
            navigate('/login');
        } else {
            alert('Please fill all the fields correctly.');
        }
    };

    return (
        <div>
            <h2>User Registration</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default UserForm;
