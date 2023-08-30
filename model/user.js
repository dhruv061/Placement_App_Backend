const mongoose = require("mongoose");

const HomeScreenSchema = mongoose.Schema({
    title: {
      required: true,
      type: String,
    },
    date: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
  });

const CompanySchema = mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  date: {
    required: true,
    type: String,
  },
  Requirements: {
    required: true,
    type: String,
  },
  SalaryOffered: {
    required: true,
    type: String,
  },
  Jobprofile: {
    required: true,
    type: String,
  },  
  CompanyCriteria: {
    required: true,
    type: String,
  },
  InterviewProcess: {
    required: true,
    type: String,
  },
  Interviewlocation: {
    required: true,
    type: String,
  },  
  Companylocation: {
    required: true,
    type: String,
  },
  Remarks: {
    required: true,
    type: String,
  },
  bond: {
    required: true,
    type: String,
  },
  ApplyLink: {
    required: true,
    type: String,
  }, 
  CompanyProfileLink: {
    type: String,
  },
});

const PLSDSchema = mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  date: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
});

const Login7CESchema = mongoose.Schema({
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  branch: {
    required: true,
    type: String,
  },
});

const Login7ITSchema = mongoose.Schema({
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  branch: {
    required: true,
    type: String,
  },
});




const HomeScreen = mongoose.model("Home Screen Data", HomeScreenSchema);
const Login7CE = mongoose.model("Userdata 7CE", Login7CESchema);
const Login7IT = mongoose.model("Userdata 7IT", Login7ITSchema);
const Company = mongoose.model("Company Data", CompanySchema);
const PlsdSchema = mongoose.model("PLSD Data", PLSDSchema);


module.exports = {
  HomeScreen,
  Login7CE,
  Login7IT,
  Company,
  PlsdSchema,
};
  