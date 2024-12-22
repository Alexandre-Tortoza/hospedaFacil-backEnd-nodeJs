require("dotenv").config({ path: "./src/.env" });

import type { FastifyInstance } from "fastify";
import { sql } from "../config/db";

export async function routes(app: FastifyInstance) {
  app.get("/test-connection", async (request, reply) => {
    try {
      const result = await sql`SELECT version()`;
      const { version } = result[0];
      reply.send({ success: true, version });
    } catch (error) {
      console.error("Erro ao conectar ao banco:", error);
      reply
        .status(500)
        .send({ success: false, error: (error as Error).message });
    }
  });
}
