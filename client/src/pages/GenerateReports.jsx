// GenerateReports.jsx
import React, { useState } from 'react';

const GenerateReports = () => {
    const [reportData, setReportData] = useState({
        victimName: '',
        status: 'active',
        crime: '',
        locality: '',
        date: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Process the form submission (e.g., save the report data, make API requests)
        console.log('Report generated:', reportData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setReportData({
            ...reportData,
            [name]: value,
        });
    };

    return (
        <div>
            <h2>Generate Reports</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Victim Name:
                    <input
                        type="text"
                        name="victimName"
                        value={reportData.victimName}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Status:
                    <select
                        name="status"
                        value={reportData.status}
                        onChange={handleChange}
                    >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </label>
                <label>
                    Crime:
                    <input
                        type="text"
                        name="crime"
                        value={reportData.crime}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Locality:
                    <input
                        type="text"
                        name="locality"
                        value={reportData.locality}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Date:
                    <input
                        type="date"
                        name="date"
                        value={reportData.date}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Generate Report</button>
            </form>
        </div>
    );
};

export default GenerateReports;
