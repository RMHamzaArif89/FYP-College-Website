import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import axios from 'axios';
import 'react-quill/dist/quill.snow.css';
import '../adminEditPage.css'
import AdminCareersCom from './AdminCareersCom';

function AdminCareersPage() {
  const [publishError, setPublishError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    jobTitle: '',
    jobType: '',
    jobDate: '',
    jobLocation: '',
    jobEmail: '',
    jobDepartment: '',
    jobDescription: '',
    jobQualification: "",
    jobInstructions: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    let name = e.target.name;
    let val = e.target.value;

    setValues((pre) => ({
      ...pre,
      [name]: val,
    }));
  };

  const handleQuillChange = (name, value) => {
    setValues((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const formData = new FormData();
      formData.append('jobTitle', values.jobTitle);
      formData.append('jobType', values.jobType);
      formData.append('jobDate', values.jobDate);
      formData.append('jobLocation', values.jobLocation);
      formData.append('jobEmail', values.jobEmail);
      formData.append('jobDepartment', values.jobDepartment);
      formData.append('jobDescription', values.jobDescription);
      formData.append('jobQualification', values.jobQualification);
      formData.append('jobInstructions', values.jobInstructions);

      const res = await axios.post(
        'http://localhost:5001/api/careers/createCareers',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      // Handle success response
      console.log(res.data);
    } catch (err) {
      setPublishError('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append('jobTitle', values.jobTitle);
      formData.append('jobType', values.jobType);
      formData.append('jobDate', values.jobDate);
      formData.append('jobLocation', values.jobLocation);
      formData.append('jobEmail', values.jobEmail);
      formData.append('jobDepartment', values.jobDepartment);
      formData.append('jobDescription', values.jobDescription);
      formData.append('jobQualification', values.jobQualification);
      formData.append('jobInstructions', values.jobInstructions);

      const res = await axios.post(
        `http://localhost:5001/api/careers/updatepost/${formData._id}`,
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      // Handle success response
      console.log(res.data);
    } catch (err) {
      setPublishError('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='adminPageEdit'>
      <form className='adminEditPageForm' onSubmit={handleSubmit}>
        <div className='adminEditPageHeading'>Create Careers Job Post</div>

        <input
          onChange={handleChange}
          value={values.jobTitle}
          name='jobTitle'
          type='text'
          placeholder='Job Title'
          className='adminEditPageTitleInp'
        />

        <input
          onChange={handleChange}
          value={values.jobType}
          name='jobType'
          type='text'
          placeholder='Job Type'
          className='adminEditPageTitleInp'
        />

        <input
          onChange={handleChange}
          value={values.jobDate}
          name='jobDate'
          type='date'
          className='adminEditPageDateInp'
        />

        <input
          onChange={handleChange}
          value={values.jobLocation}
          name='jobLocation'
          type='text'
          placeholder='Job Location'
          className='adminEditPageTitleInp'
        />

        <input
          onChange={handleChange}
          value={values.jobEmail}
          name='jobEmail'
          type='email'
          placeholder='Job Email'
          className='adminEditPageTitleInp'
        />

        <input
          onChange={handleChange}
          value={values.jobDepartment}
          name='jobDepartment'
          type='text'
          placeholder='Job Department'
          className='adminEditPageTitleInp'
        />

        <ReactQuill
          theme='snow'
          value={values.jobDescription}
          onChange={(value) => handleQuillChange('jobDescription', value)}
          className='adminEditPageDetail adminQuill'
          placeholder='Job Description'
        />

        <input
          onChange={handleChange}
          value={values.jobQualification}
          name='jobQualification'
          type='text'
          placeholder='Job Qualification'
          className='adminEditPageTitleInp'
        />

        <ReactQuill
          theme='snow'
          value={values.jobInstructions}
          onChange={(value) => handleQuillChange('jobInstructions', value)}
          className='adminEditPageDetail adminQuill'
          placeholder='Job Instructions'
        />

        <button className='adminEditPagebtn' type='submit'>
          Create ExamNews
        </button>
      </form>

      {loading ? (
        <div className='loading'>...loading</div>
      ) : (
        <AdminCareersCom/>
      )}
    </div>
  );
}

export default AdminCareersPage;

