import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaEnvelope, FaBuilding, FaInfoCircle, FaGraduationCap, FaRegListAlt } from 'react-icons/fa';
import './careers.css';

const jobPostings = [
  {
    jobTitle:'Visiting Lecturer',
    jobType: "Full-Time",
    jobDate: "August 30, 2024",
    jobLocation: "Faisalabad, Pakistan",
    jobEmail: "hr@gccsf.edu.pk",
    jobDepartment: "Computer Science",
    jobDescription: "Responsible for teaching advanced computer science courses.",
    jobQualification: "PhD in Computer Science or related field.",
    jobInstructions: "Submit your resume and cover letter via email."
  },
  {
    jobTitle:'Visiting Lecturer',
    jobType: "Part-Time",
    jobDate: "September 15, 2024",
    jobLocation: "Lahore, Pakistan",
    jobEmail: "careers@gccsf.edu.pk",
    jobDepartment: "Mathematics",
    jobDescription: "Teach undergraduate level mathematics courses.",
    jobQualification: "Master's degree in Mathematics.",
    jobInstructions: "Fill out the online application form."
  },
  // Add more job postings as needed
];

function Careers() {
  return (
    <div className='careers'>
        <div className="careersCon">
            <div className="careersConText">
                <div className="conTextHeading">
                    Come Join And Work With Us 
                    <img src="/images/careerIcon.png" className='conTextImg' alt="" />
                </div>
                <div className="conTextDetail">
                Want to make a difference? HR @ GPCSF is creating a workplace where employees and the University bloom. We are striving to create and sustain a work environment that attracts, motivates, develops, rewards, and retains the highest caliber of staff. Whether you are currently part of the GPCSF faculty and staff community or are contemplating joining us, we ensure you have the best empowering experience at GPCSF. We bring together people from all over the world, We’re as dedicated to our employees' success as we are in modernizing for the future.
                </div>
            </div>
            <div className="careersConImg"></div>
        </div>

        <div className="careersCon2">
            <div className="careersCon2H1">
                Current Jobs Postings  
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
                        <div className="jobDescriptionText jobHeadingText">
                            {job.jobDescription}
                        </div>
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
                        <div className="jobInstructionText jobHeadingText">
                            {job.jobInstructions}
                        </div>

                    </div>
                    <div className="jobApplyBtn">Apply Now</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Careers;
