const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const { RegisterRouter } = require("./router/Register.router");
const { LoginRouter } = require("./router/Login.router");
const { ProfileRouter } = require("./router/getProfile");

const app = express();
app.use(cors());
app.use("/", RegisterRouter);
app.use("/", LoginRouter);
app.use("/", ProfileRouter);

app.use(express.json());

app.use("/", async (req, res) => {
  try {
    res.send(`Welcome to home!`);
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log(`app listening on port ${process.env.port}`);
  } catch (error) {
    console.log({ error: `error in connections with port: ${error.message}` });
  }
});
