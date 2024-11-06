const User = require("../models/user.model");
const bcryptjs = require("bcryptjs");

const signUp = async (req, res) => {
  const { userName, password, email } = req.body;
  if (
    !userName ||
    !password ||
    !email ||
    userName === "" ||
    email === "" ||
    password === ""
  ) {
    return res.status(400).json({ message: "all fields are required" });
  }
  const hashPassword = await bcryptjs.hashSync(password, 10);
  const newUser = new User({
    userName,
    email,
    password: hashPassword,
  });
  try {
    await newUser.save();
    res.json({ message: "signup successful" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = { signUp };
