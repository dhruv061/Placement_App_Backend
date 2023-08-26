const mongoose = require("mongoose");

const NotificationSchema = mongoose.Schema({
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


  const Notification = mongoose.model("Home Screen Data", NotificationSchema);
  const Login7CE = mongoose.model("Userdata 7CE", Login7CESchema);
  const Login7IT = mongoose.model("Userdata 7IT", Login7ITSchema);


  module.exports = {
    Notification,
    Login7CE,
    Login7IT,
  };
  