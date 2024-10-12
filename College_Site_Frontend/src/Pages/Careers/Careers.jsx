import React, { useEffect, useState } from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaEnvelope, FaBuilding, FaInfoCircle, FaGraduationCap, FaRegListAlt } from 'react-icons/fa';
import './careers.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router

function Careers() {
    const [jobPostings, setJobPostings] = useState([]);
    const navigate = useNavigate(); // Initialize the useNavigate hook

    useEffect(() => {
        const getJobPostings = async () => {
            const res = await axios.get('http://localhost:5001/api/careers/getCareers');
            setJobPostings(res.data.careers);
        };
        getJobPostings();
    }, []);

    const handleApplyClick = (jobId) => {
        // Navigate to the job application form page, passing the job ID
        navigate(`/careersForm`);
    };

    return (
        <div className='careers'>
            <div className="careersCon">
                <div className="careersConText">
                    <div className="conTextHeading">
                        Come Join And Work With Us
                        <img src="/images/careerIcon.png" className='conTextImg' alt="" />
                    </div>
                    <div className="conTextDetail">
                        Want to make a difference? HR @ GPCSF is creating a workplace where employees and the University bloom...
                    </div>
                </div>
                <div className="careersConImg"></div>
            </div>

            <div className="careersCon2">
                <div className="careersCon2H1">
                    Current Job Postings
                    <img src="/images/careerIcon2.png" className='careersCon2H1Img' alt="" />
                </div>
                <div className="careersCon2H2">
                    To join the GPCSF team, explore work opportunities.
                </div>
                {jobPostings.map((job, index) => (
                    <div className="careersCon2JobRow" key={index}>
                        <div className="careersJobTitle">
                            {job.jobTitle}
                        </div>
                        <div className="jobRow1 jobRow">
                            <div className="jobType jobCol">
                                <div className="jobHeading">
                                    <FaBriefcase /> Job Type
                                </div>
                                <div className="jobHeadingText">{job.jobType}</div>
                            </div>
                            <div className="jobDate jobCol">
                                <div className="jobHeading">
                                    <FaCalendarAlt /> Apply By
                                </div>
                                <div className="jobHeadingText">{job.jobDate}</div>
                            </div>
                            <div className="jobLocation jobCol">
                                <div className="jobHeading">
                                    <FaMapMarkerAlt /> Location
                                </div>
                                <div className="jobHeadingText">{job.jobLocation}</div>
                            </div>
                        </div>
                        <div className="jobRow2 jobRow">
                            <div className="jobEmail jobCol">
                                <div className="jobHeading">
                                    <FaEnvelope /> Apply at Email
                                </div>
                                <div className="jobHeadingText">{job.jobEmail}</div>
                            </div>
                            <div className="jobDepartment jobCol">
                                <div className="jobHeading">
                                    <FaBuilding /> Department
                                </div>
                                <div className="jobHeadingText">{job.jobDepartment}</div>
                            </div>
                        </div>
                        <div className="jobDescrition">
                            <div className="jobDescriptionHeading jobHeading">
                                <FaInfoCircle /> Description
                            </div>
                            <div className="jobDescriptionText jobHeadingText" dangerouslySetInnerHTML={{ __html: job.jobDescription }} />
                        </div>
                        <div className="jobQualification">
                            <div className="jobQualificatonHeading jobHeading">
                                <FaGraduationCap /> Qualification
                            </div>
                            <div className="jobQualificationText jobHeadingText">
                                {job.jobQualification}
                            </div>
                        </div>
                        <div className="jobInstructions">
                            <div className="jobInstructionHeading jobHeading">
                                <FaRegListAlt /> Instructions
                            </div>
                            <div className="jobInstructionText jobHeadingText" dangerouslySetInnerHTML={{ __html: job.jobInstructions }} />
                        </div>
                        <div className="jobApplyBtn" onClick={() => handleApplyClick(job._id)}>Apply Now</div> {/* Pass job ID to handleApplyClick */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Careers;
