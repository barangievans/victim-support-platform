// src/components/VictimList.jsx
import React from 'react';

const VictimList = () => {
    return (
        <div>
            <h2>Victim List</h2>
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
                    {/* Render victims here */}
                    <tr>
                        <td>John Doe</td>
                        <td>Support Service 1</td>
                        <td>Active</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                    {/* Repeat for more victims */}
                </tbody>
            </table>
        </div>
    );
};

export default VictimList;
