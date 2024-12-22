require("dotenv").config({ path: "./src/.env" });

import { neon } from "@neondatabase/serverless";
import type { FastifyInstance } from "fastify";

export async function routes(app: FastifyInstance) {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL não está definida");
  }

  const sql = neon(process.env.DATABASE_URL);

  app.get(
    "/usuarios/getUsuarios",
    {
      schema: {
        tags: ["usuarios"],
        description: "Retorna todos os usuários",
      },
    },
    async () => {}
  );
}
