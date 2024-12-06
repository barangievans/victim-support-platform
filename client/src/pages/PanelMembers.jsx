// PanelMembers.jsx
import React, { useEffect, useState } from 'react';

const PanelMembers = () => {
    const [users, setUsers] = useState([]);
    const [panelMembers, setPanelMembers] = useState([]);

    useEffect(() => {
        fetchUsers();
        fetchPanelMembers();
    }, []);

    const fetchUsers = async () => {
        const response = await fetch('/api/users'); // API to get registered users
        const data = await response.json();
        setUsers(data);
    };

    const fetchPanelMembers = async () => {
        const response = await fetch('/api/panel-members'); // API to get current panel members
        const data = await response.json();
        setPanelMembers(data);
    };

    const handleAddMember = async (userId) => {
        const response = await fetch('/api/panel-members', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId }), // Send the user ID to add them
        });

        if (response.ok) {
            fetchPanelMembers(); // Refresh the panel members list
        } else {
            alert('Failed to add panel member.');
        }
    };

    return (
        <div>
            <h2>Panel Members</h2>
            <ul>
                {panelMembers.map((member) => (
                    <li key={member.id}>{member.name}</li>
                ))}
            </ul>

            <h2>Add New Panel Member</h2>
            <select onChange={(e) => handleAddMember(e.target.value)}>
                <option value="">Select User</option>
                {users.map((user) => (
                    <option key={user.id} value={user.id}>{user.name}</option>
                ))}
            </select>
        </div>
    );
};

export default PanelMembers;
