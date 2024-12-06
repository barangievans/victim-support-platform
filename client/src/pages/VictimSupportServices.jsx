// src/pages/VictimSupportServices.jsx
import React, { useEffect, useState } from 'react';

const VictimSupportServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        // Replace with your API endpoint
        const response = await fetch('/api/victimSupportServices');
        const data = await response.json();
        setServices(data);
    };

    const addService = async (service) => {
        // API call to add new service
    };

    const deleteService = async (id) => {
        // API call to delete service by id
    };

    return (
        <div>
            <h2>Victim Support Services</h2>
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
                    {services.map(service => (
                        <tr key={service.id}>
                            <td>{service.name}</td>
                            <td>{service.description}</td>
                            <td>{service.availableMembers.join(', ')}</td>
                            <td>
                                <button>Edit</button>
                                <button onClick={() => deleteService(service.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Add Form for New Service */}
            <form onSubmit={addService}>
                <input type="text" placeholder="Service Name" required />
                <input type="text" placeholder="Description" required />
                {/* Additional fields */}
                <button type="submit">Add New Service</button>
            </form>
        </div>
    );
};

export default VictimSupportServices;
