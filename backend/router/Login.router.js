const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const express = require("express");
const { UserModel } = require("../models/user.Schema");
const app = express();

const LoginRouter = express.Router();
LoginRouter.use(express.json());

//Register get route
LoginRouter.get("/login", async (req, res) => {
  try {
    res.send(`welcome to Login route`);
  } catch (error) {
    console.log(error.message);
  }
});

//LoginRouter User

LoginRouter.post("/login", async (req, res) => {
  const { Email, Password } = req.body;
  console.log(req.body);
  try {
    const user = await UserModel.findOne({ Email });
    console.log(user);
    const hashed_Password = user?.Password;
    console.log(hashed_Password);
    if (user) {
      bcrypt.compare(Password, hashed_Password, async function (err, result) {
        if (result) {
          const token = jwt.sign({ user_id: user._id }, "secret_key", {
            expiresIn: "7d",
          });
          console.log(token);
          res.send({
            token,
            message: `USER LOGIN SUCCESSFULLY`,
            user_id: user._id,
          });
        } else {
          console.log(`USER NOT FOUND WHILE LOGIN`);
          res.send(`PASSWORD MISSMATCHED WHILE LOGIN`);
        }
      });
    }
  } catch (error) {
    console.log(error.message);
    res.send({ message: `error in login: ${error.message}` });
  }
});

module.exports = {
  LoginRouter,
};
