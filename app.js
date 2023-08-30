const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const path = require("path");
const multer = require("multer");
app.use(cors());

//import file from the other file structure
const authorRouter = require("./routers/auth");

const DB =
  "mongodb+srv://deepjodhani007:wFAWqgZIZoZSbvXV@cluster0.mktdbvt.mongodb.net/";

//if we use local then it's get 3000 otherwise they automatically
const PORT = process.env.PORT || 5000;

// File Upload Setup using Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, "companyProfile-" + uniqueSuffix + ext);
  },
});

const upload = multer({ storage });

//middleware
app.use(express.json());
app.use(authorRouter);

//Database connections
mongoose.set("strictQuery", false);
mongoose
  .connect(DB)
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((e) => {
    console.log(e);
  });

//listen port
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Connection make succefullay at ${PORT}`);
});
