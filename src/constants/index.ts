import { config } from "dotenv";

config();

export const DOMAIN = process.env.APP_DOMAIN;
export const PORT = process.env.PORT || process.env.APP_PORT;
export const DB_URL = process.env.APP_DB_URL || "";
export const SECRET = process.env.APP_SECRET || "";
