import React, { useState, useEffect } from 'react';

const SuperAdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the backend or mock data
    // This is just a placeholder for demo purposes
    const fetchedUsers = [
      { id: 1, username: 'user1', role: 'user' },
      { id: 2, username: 'user2', role: 'user' },
      { id: 3, username: 'admin1', role: 'admin' },
    ];
    setUsers(fetchedUsers);
  }, []);

  const handleAddAdmin = (userId) => {
    // Here, you'd normally call an API to change the user's role to admin
    // Mocking the action
    setUsers((prevUsers) => {
      return prevUsers.map(user =>
        user.id === userId ? { ...user, role: 'admin' } : user
      );
    });

    alert('User promoted to Admin!');
  };

  return (
    <div>
      <h2>Super Admin Dashboard</h2>
      <h3>User List</h3>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.role}</td>
              <td>
                {user.role !== 'admin' && (
                  <button onClick={() => handleAddAdmin(user.id)}>Promote to Admin</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SuperAdminDashboard;
