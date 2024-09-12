import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const jobFormSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  birthdate: {
    type: Date,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  zip: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  experienceJobTitle: {
    type: String,
    required: false
  },
  experienceYears: {
    type: Number,
    required: false
  },
  email: {
    type: String,
    required: true
  },
  salary: {
    type: Number,
    required: false
  },
  position: {
    type: String,
    enum: ['frontend', 'backend', 'fullstack', 'intern', 'other'],
    required: true
  },
  otherPosition: {
    type: String,
    required: function() { return this.position === 'other'; }
  },
  startDate: {
    type: Date,
    required: true
  },
  resume: {
    type: String, // URL or path to the uploaded resume
   
  }
}, { timestamps: true });

const jobFormModel= mongoose.model('jobForm', jobFormSchema);
export default jobFormModel;
