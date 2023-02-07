import { User } from "../models";
import { randomBytes } from "crypto";
import express from "express";

export const registerController = async (
  req: express.Request,
  res: express.Response
) => {
  let user;
  const { username, email } = req.body;

  user = await User.findOne({ username });

  if (user) {
    return res.status(400).json({
      message: "The username is already taken",
      success: false,
    });
  }

  user = await User.findOne({ email });

  if (user) {
    return res.status(400).json({
      message: "The email is already taken",
      success: false,
    });
  }

  user = new User({
    ...req.body,
    verificationCode: randomBytes(20).toString("hex"),
  });
  await user.save();
  return res.status(201).json({
    success: true,
    message: `A verification link has been sent to ${email}`,
  });
  // Send email to user!
};
