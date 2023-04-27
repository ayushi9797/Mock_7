const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const express = require("express");
const { UserModel } = require("../models/user.Schema");
const app = express();

const RegisterRouter = express.Router();
RegisterRouter.use(express.json());

//Register get route
RegisterRouter.get("/register", async (req, res) => {
  try {
    res.send(`welcome to register route`);
  } catch (error) {
    console.log(error.message);
  }
});

//RegisterRouter User
RegisterRouter.post("/register", async (req, res) => {
  const { Profile_picture, Name, Bio, Phone, Email, Password } = req.body;
  console.log(res.body);
  try {
    bcrypt.hash(Password, 6, async function (err, hash) {
      const users = new UserModel({
        Profile_picture,
        Name,
        Bio,
        Phone,
        Email: Email,
        Password: hash,
      });
      console.log(users);
      await users.save();
      res.send({ message: `USERS REGISTERED Successfully` });
    });
  } catch (error) {
    res.send({ message: error.message });
  }
});

//login


module.exports = {
  RegisterRouter,
};
