const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());

//import file from the other file structure
const authorRouter = require("./routers/auth");

const DB =
  "mongodb+srv://deepjodhani007:wFAWqgZIZoZSbvXV@cluster0.mktdbvt.mongodb.net/";

//if we use local then it's get 3000 otherwise they automatically
const PORT = process.env.PORT || 5000;


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
