import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utlis/error.js";
import jwt from "jsonwebtoken";
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashPassword });
  try {
    await newUser.save();
    res.status(201).json("User created successfully!");
  } catch (error) {
    next(error);
  }
};
export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    // Find user by email
    const validUser = await User.findOne({ email });
    // If user not found, return 404 error
    if (!validUser) {
      return next(errorHandler(404, "User is not find!"));
    }
    // Check if password is correct
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    // If password is incorrect, return 401 error
    if (!validPassword) {
      return next(errorHandler(401, "Wrong credentials!"));
    }
    // Generate JWT token
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    // Remove password field from user object
    const { password: pass, ...rest } = validUser._doc;
    // Set cookie with token
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
