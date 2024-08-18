import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utilis/error.js";

export const signupController = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  try {
    await User.create({ username, email, password: hashedPassword });
    return res.status(201).json({ status: "Done creating user." });
  } catch (error) {
    next(error);
  }
};

export const signinController = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser)
      return next(errorHandler(404, "User not found in database."));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword)
      return next(errorHandler(401, "Wrong email or password."));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    res
      .cookie("access_token", token)
      .status(200)
      .json({ ...validUser._doc, password: undefined });
  } catch (error) {
    next(error);
  }
};
