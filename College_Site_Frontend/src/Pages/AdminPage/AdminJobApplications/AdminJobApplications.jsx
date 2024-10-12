import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminJobApplicationsRow from './AdminJobApplicationsRow'; // New component for job applications
import './adminJobApplications.css'; // Custom styles

function AdminJobApplicationsPage() {
  const [jobApplications, setJobApplications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [publishError, setPublishError] = useState(null);

  useEffect(() => {
    const getJobApplications = async () => {
      try {
        const res = await axios.get('http://localhost:5001/api/jobForm/getJobForm');
        setJobApplications(res.data.jobForm); // Fetch job applications from the backend
      } catch (error) {
        setPublishError('Error fetching job applications.');
      }
    };
    getJobApplications();
  }, [loading]);

  const deleteJobApplication = async (id) => {
    try {
      setLoading(true);
      const res = await axios.delete(`http://localhost:5001/api/jobForm/deleteJobForm/${id}`);
      setLoading(false);
      if (res.status === 200) {
        setJobApplications(jobApplications.filter((application) => application._id !== id));
      }
    } catch (error) {
      setPublishError('Failed to delete the job application.');
      setLoading(false);
    }
  };

  return (
    <div className="adminJobApplicationsPage">
      <div className="adminJobApplicationsHeading">Job Applications</div>
      <div className="adminJobApplicationsRows">
        {jobApplications.length > 0 ? (
          loading ? (
            <div className="loading">...loading</div>
          ) : (
            jobApplications.map((application) => (
              <AdminJobApplicationsRow
                key={application._id}
                jobApplication={application}
                deleteJobApplication={deleteJobApplication}
              />
            ))
          )
        ) : (
          <div className="noApplicationsFound">No Job Applications Found</div>
        )}
      </div>
    </div>
  );
}

export default AdminJobApplicationsPage;
