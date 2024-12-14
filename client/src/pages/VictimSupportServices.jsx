// src/pages/VictimSupportServices.jsx
import React, { useEffect, useState } from 'react';
import './VictimSupportServices.css';  // Import the CSS file

const VictimSupportServices = () => {
    const [services, setServices] = useState([]);
    const [serviceName, setServiceName] = useState('');
    const [serviceDescription, setServiceDescription] = useState('');

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        const response = await fetch('/api/victimSupportServices');
        const data = await response.json();
        setServices(data);
    };

    const addService = async (e) => {
        e.preventDefault();
        const newService = {
            name: serviceName,
            description: serviceDescription,
            availableMembers: []  // You can adjust the data structure as needed
        };

        // Add API call to add new service
        // Example:
        // await fetch('/api/victimSupportServices', { method: 'POST', body: JSON.stringify(newService), headers: { 'Content-Type': 'application/json' } });
        
        setServices([...services, newService]);
        setServiceName('');
        setServiceDescription('');
    };

    const deleteService = async (id) => {
        // API call to delete service by id
        // Example:
        // await fetch(`/api/victimSupportServices/${id}`, { method: 'DELETE' });

        setServices(services.filter(service => service.id !== id));
    };

    return (
        <div className="container">
            <h2>Victim Support Services</h2>

            {/* Services Table */}
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
                <input 
                    type="text" 
                    placeholder="Service Name" 
                    value={serviceName}
                    onChange={(e) => setServiceName(e.target.value)}
                    required 
                />
                <input 
                    type="text" 
                    placeholder="Description" 
                    value={serviceDescription}
                    onChange={(e) => setServiceDescription(e.target.value)}
                    required 
                />
                <button type="submit">Add New Service</button>
            </form>
        </div>
    );
};

export default VictimSupportServices;
