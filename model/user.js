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
  description: {
    required: true,
    type: String,
  },
  package: {
    required: true,
    type: String,
  },
  location: {
    required: true,
    type: String,
  },
  bound: {
    required: true,
    type: String,
  },
  link: {
    required: true,
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
  