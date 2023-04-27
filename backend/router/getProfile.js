const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const express = require("express");
const { UserModel } = require("../models/user.Schema");
const app = express();

const ProfileRouter = express.Router();
ProfileRouter.use(express.json());


//Profile_details
ProfileRouter.get("/getProfile", async (req, res) => {
  try {
    let data = await UserModel.find();
    console.log("User Get profile");
    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
});

//Edit profile_details
ProfileRouter.patch("/update/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let users = req.body;
    console.log(users);
    await UserModel.findByIdAndUpdate(id, users);
    console.log("User data updated");
    res.send(users);
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = {
  ProfileRouter,
};
