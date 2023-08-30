const express = require("express");

const router = express.Router();
const { HomeScreen, Login7CE, Login7IT, Company,PlsdSchema } = require("../model/user"); 

// POST: Create a new notification
router.post("/homeScreenData", async (req, res) => {
  try {
    const { title, date, description } = req.body;

    const newHomeScreen = new HomeScreen({
      title,
      date,
      description,
    });

    await newHomeScreen.save();

    res.status(201).json({ message: "Home Screen Data created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while creating Home Screen Data" });
  }
});

// GET: Fetch all notifications
router.get("/homeScreenData", async (req, res) => {
  try {
    const notifications = await HomeScreen.find();
    res.status(200).json(notifications);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching notifications" });
  }
});

// POST: Create a new notification
router.post("/companyData", async (req, res) => {
  try {
    const { title,date,Requirements,SalaryOffered,Jobprofile,CompanyCriteria,InterviewProcess,Interviewlocation,Companylocation,Remarks,bond,ApplyLink,CompanyProfile } = req.body;

    const newCompany = new Company({
    title,
    date,
    Requirements,
    SalaryOffered,
    Jobprofile,
    CompanyCriteria,
    InterviewProcess,
    Interviewlocation,
    Companylocation,
    Remarks,
    bond,
    ApplyLink,
    CompanyProfile,
    });

    await newCompany.save();

    res.status(201).json({ message: "Company Data created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while creating Company Data" });
  }
});

// GET: Fetch all notifications
router.get("/companyData", async (req, res) => {
  try {
    const companydata = await Company.find();
    res.status(200).json(companydata);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching company data" });
  }
});

//POST: fetch all data of PLSD
router.post("/PLSDdata", async (req, res) => {
  try {
    const { title, date, description } = req.body;

    const newPLSDScreenData = new PlsdSchema({
      title,
      date,
      description,
    });

    await newPLSDScreenData.save();

    res.status(201).json({ message: "PLSD Screen Data created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while creating PLSD Screen Data" });
  }
});


//GET: fetch all data of PLSD
router.get("/PLSDdata", async (req, res) => {
  try {
    const plsdData = await PlsdSchema.find();
    res.status(200).json(plsdData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching plsdData data" });
  }
});


// POST: Userdata 7CE
router.post("/userdata/7CE", async (req, res) => {
    try {
      const { email, password, branch } = req.body;
  
      const newLogin7CE = new Login7CE({
        email,
        password,
        branch,
      });
  
      await newLogin7CE.save();
  
      res.status(201).json({ message: "Successful Added student in 7th CE" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Unsuccessful" });
    }
  });

// LOGIN 7CE
router.post("/login/7CE", async (req, res) => {
try {
  const { email, password } = req.body;

  const user = await Login7CE.findOne({ email });
  if (!user) {
    return res
      .status(400)
      .json({ msg: "User with this email does not exist!" });
  }

  // Compare the entered password with the stored password
  if (user.password !== password) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  res.json({ user });
} catch (error) {
  res.status(500).json({ error: error.message });
}
});

// POST: Userdata 7IT
router.post("/userdata/7IT", async (req, res) => {
  try {
    const { email, password, branch } = req.body;

    const newLogin7IT = new Login7IT({
      email,
      password,
      branch,
    });

    await newLogin7IT.save();

    res.status(201).json({ message: "Successful Added student in 7th IT" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unsuccessful" });
  }
});

// LOGIN 7IT
router.post("/login/7IT", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Login7IT.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ msg: "User with this email does not exist!" });
    }

    // Compare the entered password with the stored password
    if (user.password !== password) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
  
// PUT: Update user's password CE
router.put("/login/7CE/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const { password } = req.body;

    // Find the user by email
    const user = await Login7CE.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Update the user's password and save
    user.password = password;
    await user.save();

    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while updating the password" });
  }
});

// PUT: Update user's password IT
router.put("/login/7IT/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const { password } = req.body;

    // Find the user by email
    const user = await Login7IT.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Update the user's password and save
    user.password = password;
    await user.save();

    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while updating the password" });
  }
});

module.exports = router;
