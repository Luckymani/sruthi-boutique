const User = require("../Models/userSchema");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const secretKey = process.env.SECRET_KEY;

// otp verification left
const signup = async (req, res) => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "can't have empty field" });
  }

  try {
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ error: "Email already exist" });
    }

    const newUser = new User({
      name,
      email,
      password,
      pic:
        pic ||
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    });
    await newUser.save();

    return res.status(200).json({ message: "Signup Succesfull", newUser });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userExist = await User.findOne({ email, password });

    if (!userExist) {
      return res.status(400).json({ error: "Invalid email/password" });
    }

    const token = jwt.sign({ userId: userExist._id }, secretKey);
    res.cookie("token", token, { httpOnly: true });

    return res.status(200).json({ message: "Login successfull" });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const authVerify = async (req, res, next) => {
  console.log("in authVerify");

  try {
    const token = req.cookies.token;
    // console.log(token);
    if (!token) {
      return res.status(400).json({ error: "no token" });
    }

    try {
      const verify = jwt.verify(token, secretKey);
      console.log(verify);
      if (!verify) {
        return res.status(400).json({ error: "invalid token!" });
      }

      const user = await User.findOne({ _id: verify.userId }).select(
        "-password"
      );
      if (!user) {
        return res.status(400).json({ error: "user not found" });
      }
      // console.log(user);
      req.user = user;
      //   res.status(200).json({ user: user });
    } catch (error) {
      return res.status(400).json({ error });
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
  next();
};

module.exports = { signup, login, authVerify };
