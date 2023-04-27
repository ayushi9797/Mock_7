const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  Profile_picture: String,
  Name: String,
  Bio: String,
  Phone: String,
  Email: String,
  Password: String,
});

const UserModel = mongoose.model("users", userSchema);
module.exports = {
  UserModel,
};


// {
//   "Profile_picture": "https://cdn.pixabay.com/photo/2017/02/11/14/19/valentines-day-2057745__340.jpg",
//   "Name": "Ayushi",
//   "Bio": "I am a dancer",
//   "Phone": "9450",
//   "Email": "soniayushi345@gmail.com",
//   "Password": "1234"
// }