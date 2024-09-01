import mongoose from "mongoose";

const careersSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
  },
  jobType: {
    type: String,
  },
  jobDate: {
    type: String,
  },
  jobLocation: {
    type: String,
  },
  jobEmail: {
    type: String,
  },
  jobDepartment: {
    type: String,
  },
  jobDescription: {
    type: String,
  },
  jobQualification: {
    type: String,
  },
  jobInstructions: {
    type: String,
  },
});

const careersModel = mongoose.model('careers', careersSchema);

export default careersModel;
