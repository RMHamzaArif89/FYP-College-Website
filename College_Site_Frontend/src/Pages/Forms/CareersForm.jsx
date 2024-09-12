import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, TextField, FormControl, Select, MenuItem, InputLabel, Button, Typography, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import axios from 'axios';
import './careersForm.css'

const formStyle = { padding: '20px', maxWidth: '800px', margin: '0 auto', backgroundColor: '#f7f7f7', borderRadius: '10px' };

function CareersForm() {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    birthdate: '',
    country: '',
    city: '',
    zip: '',
    address: '',
    experienceJobTitle: '',
    experienceYears: '',
    email: '',
    salary: '',
    position: '',
    startDate: '',
    resume: null,
  });
  const [otherPosition, setOtherPosition] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleFileChange = (e) => {
    setValues({ ...values, resume: e.target.files[0] });
  };

  const handlePositionChange = (e) => {
    const { value } = e.target;
    if (value === 'other') {
      setValues({ ...values, position: otherPosition });
    } else {
      setValues({ ...values, position: value });
      setOtherPosition('');
    }
  };

  const handleOtherPositionChange = (e) => {
    setOtherPosition(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(values)
    try {
      setLoading(true);

      const formData = new FormData();
      Object.keys(values).forEach((key) => {
        formData.append(key, values[key]);
      });

      const res = await axios.post(
        'http://localhost:5001/api/jobForm/createJobForm',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      // Handle success response
      setSubmitSuccess(true);
      setOpen(true);
    //   console.log(res.data);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
    if (submitSuccess) {
      navigate('/home'); // Redirect to success page or reset form
    }
  };

  return (
   <div className="careersForm">
     <form style={formStyle} onSubmit={handleSubmit}>
      <Typography variant="h4" gutterBottom>Job Application Form</Typography>

      {/* Personal Information Section */}
      <Typography variant="h6" gutterBottom>Personal Information</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="First Name" name="firstName" value={values.firstName} onChange={handleChange} required />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Last Name" name="lastName" value={values.lastName} onChange={handleChange} required />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Date of Birth" name="birthdate" type="date" InputLabelProps={{ shrink: true }} value={values.birthdate} onChange={handleChange} required />
        </Grid>
      </Grid>

      {/* Location Section */}
      <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>Your Location</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Country</InputLabel>
            <Select label="Country" name="country" value={values.country} onChange={handleChange}>
              <MenuItem value="Pakistan">Pakistan</MenuItem>
              <MenuItem value="USA">USA</MenuItem>
              <MenuItem value="Canada">Canada</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="City/Town" name="city" value={values.city} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Zip Code" name="zip" type="number" value={values.zip} onChange={handleChange} />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label="Street Address" name="address" value={values.address} onChange={handleChange} />
        </Grid>
      </Grid>

      {/* Experience Section */}
      <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>Experience</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField fullWidth label="Previous Job Title" name="experienceJobTitle" value={values.experienceJobTitle} onChange={handleChange} />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label="Years of Experience" name="experienceYears" type="number" value={values.experienceYears} onChange={handleChange} />
        </Grid>
      </Grid>

      {/* Additional Information */}
      <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>Additional Information</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField fullWidth label="Email" name="email" type="email" placeholder="mail@example.com" value={values.email} onChange={handleChange} />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label="Expected Salary (in US dollars)" name="salary" type="number" value={values.salary} onChange={handleChange} />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>What position are you applying for?</InputLabel>
            <Select label="What position are you applying for?" name="position" value={values.position} onChange={handlePositionChange}>
              <MenuItem value="frontend">Frontend Developer</MenuItem>
              <MenuItem value="backend">Backend Developer</MenuItem>
              <MenuItem value="fullstack">Full-Stack Developer</MenuItem>
              <MenuItem value="intern">Intern</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
            {values.position === 'other' && (
              <TextField fullWidth label="Specify Other Position" value={otherPosition} onChange={handleOtherPositionChange} />
            )}
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label="Date available to start work" name="startDate" type="date" InputLabelProps={{ shrink: true }} value={values.startDate} onChange={handleChange} required />
        </Grid>
        <Grid item xs={12}>
       
            <input type="file" className='careersFormFile' accept="application/pdf" name="resume" onChange={handleFileChange} />
    
        </Grid>
      </Grid>

      {/* Submit Button */}
      <Grid container justifyContent="flex-end" style={{ marginTop: '20px' }}>
        <Button type="submit" variant="contained" className='careersFormBtn' disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </Button>
      </Grid>

      {/* Modal for Success/Error */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{submitSuccess ? 'Success' : 'Error'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {submitSuccess ? 'Your application has been submitted successfully!' : error}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </form>
   </div>
  );
}

export default CareersForm;
