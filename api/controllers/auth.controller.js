import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const authTest = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  try {
    await User.create({ username, email, password: hashedPassword });
    return res.status(201).send("Done creating user");
  } catch (error) {
    next(error);
  }
};
