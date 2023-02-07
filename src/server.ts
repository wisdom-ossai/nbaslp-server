import cors from "cors";
import consola from "consola";
import express from "express";
import mongoose from "mongoose";
import { json } from "body-parser";
import { DB_URL, PORT } from "./constants";

const server = express();

server.use(cors());
server.use(json());

const main = () => {
  try {
    mongoose
      .connect(DB_URL)
      .then(() => {
        consola.success("Database connection success");
        server.listen(PORT, () =>
          consola.success("Server started on port " + PORT)
        );
      })
      .catch(() => consola.error("Unable to connect to databasse"));
  } catch (err: any) {
    consola.error(`Unable to start server: \n ${err?.message}`);
  }
};

main();
