import React, { useState, useEffect } from 'react';
import './facultyMembers.css';

const facultyData = [
    {
        name: 'Dr. John Doe',
        image: 'https://via.placeholder.com/150',
        details: 'Ph.D. in Computer Science from XYZ University',
        department:'Computer Science'
    },
    {
        name: 'Dr. Jane Smith',
        image: 'https://via.placeholder.com/150',
        details: 'Ph.D. in Physics from ABC University',
        department:'Computer Science'
    },
    {
        name: 'Dr. Emily Johnson',
        image: 'https://via.placeholder.com/150',
        details: 'Ph.D. in Mathematics from DEF University',
        department:'Computer Science'
    },
    {
        name: 'Dr. Michael Brown',
        image: 'https://via.placeholder.com/150',
        details: 'Ph.D. in Chemistry from GHI University',
        department:'Computer Science'
    },
    {
        name: 'Dr. Sarah Davis',
        image: 'https://via.placeholder.com/150',
        details: 'Ph.D. in Biology from JKL University',
        department:'Computer Science'
    },
    {
        name: 'Dr. Robert Wilson',
        image: 'https://via.placeholder.com/150',
        details: 'Ph.D. in Engineering from MNO University',
    },
];

const FacultyMembers = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % facultyData.length);
        }, 20000); // 20 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="faculty-container">
            {facultyData.map((faculty, index) => (
                <div
                    key={faculty.name}
                    className={`faculty-card ${index === currentIndex ? 'active' : ''}`}
                >
                    <div className='faculty-department-name'>Department of {faculty.department}</div>
                    <img src={faculty.image} alt={faculty.name} className="faculty-image" />
                    <h3 className="faculty-name">{faculty.name}</h3>
                    <p className="faculty-details">{faculty.details}</p>
                </div>
            ))}
        </div>
    );
};

export default FacultyMembers;
