import express from "express";
import userRoutes from "./user.routes";

const routes = express();

routes.use("/users", userRoutes);

export default routes;
