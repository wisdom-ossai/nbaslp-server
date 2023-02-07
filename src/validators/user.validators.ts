import { check } from "express-validator";

const name = check("name", "Name is required.").not().isEmpty();
const username = check("username", "Username is required").not().isEmpty();
const email = check("email", "Please provide a valid email address")
  .not()
  .isEmail();
const password = check(
  "password",
  "Password is required with minimum of 6 characters"
)
  .not()
  .isEmpty()
  .isLength({
    min: 6,
  });

export const RegisterValidations = [name, username, email, password];
export const LoginValidations = [email, password];
