require("dotenv").config({ path: "./src/.env" });
import { neon } from "@neondatabase/serverless";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL não está definida");
}

export const sql = neon(process.env.DATABASE_URL);
