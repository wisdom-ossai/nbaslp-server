import Express from "express";

import { validationResult } from "express-validator";

const validationMiddleware = (
  req: Express.Request,
  res: Express.Response,
  next: () => void
) => {
  let errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({
      errors: errors.array(),
    });

  return next();
};

export default validationMiddleware;
