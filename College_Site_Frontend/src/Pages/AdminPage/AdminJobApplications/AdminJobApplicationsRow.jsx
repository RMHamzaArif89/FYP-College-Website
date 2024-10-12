import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { FaUserTie, FaPhoneAlt, FaRegIdCard } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';
import './adminJobApplications.css'; // Styles for job application rows

function AdminJobApplicationsRow({ jobApplication, deleteJobApplication }) {
  const [showReply, setShowReply] = useState(false);

  return (
    <>
    <div className="adminJobApplicationRow">
    <div className="adminJobApplicationDetail">
        <div className="adminJobApplicationDetailBox">
          <FaUserTie className="detailBoxIcon" /> {jobApplication.firstName} {jobApplication.lastName}
        </div>
        <div className="adminJobApplicationDetailBox">
          <FaPhoneAlt className="detailBoxIcon" /> {jobApplication.email}
        </div>
        <div className="adminJobApplicationDetailBox">
          <FaRegIdCard className="detailBoxIcon" /> {jobApplication.position}
        </div>
        <div className="adminJobApplicationQuery">
          {jobApplication.experienceJobTitle} ({jobApplication.experienceYears} years)
        </div>
        <div
          className="adminJobApplicationMessage"
          onMouseOver={() => setShowReply(true)}
          onMouseOut={() => setShowReply(false)}
        >
          {jobApplication.salary} USD
        </div>
 
        <MdDelete
          className="adminMessageDeleteIcon"
          onClick={() => deleteJobApplication(jobApplication._id)}
        />
      </div>
    </div>
    </>
  );
}

export default AdminJobApplicationsRow;
