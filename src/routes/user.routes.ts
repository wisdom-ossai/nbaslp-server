import { registerController } from "../controllers/user.controllers";
import validationMiddleware from "../middlewares/validation.middleware";
import { RegisterValidations } from "../validators/user.validators";
import express from "express";

const router = express.Router();

router.post(
  "/register",
  RegisterValidations,
  validationMiddleware,
  registerController
);

export default router;
