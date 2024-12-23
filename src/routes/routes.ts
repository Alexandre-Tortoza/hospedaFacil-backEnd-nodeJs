import z from "zod";
import { FastifyInstance } from "fastify";
import { userController } from "../modules/user/userController";

export async function routes(app: FastifyInstance) {
  app.get(
    "/todosUsuarios",
    {
      schema: {
        tags: ["Usuários"],
      },
    },
    () => {
      console.log("all users");
      return [];
    }
  );
  app.post(
    "/usuarios",
    {
      schema: {
        tags: ["Usuários"],
        // querystring: z.object({
        //   tipoUsuario: z.string(),
        // }),
        body: z.object({
          nome: z.string(),
          email: z.string().email(),
          senha_hash: z.string(),
          telefone: z.string(),
        }),
      },
    },
    async (request, reply) => {
      userController.postUser(request.body as object);
    }
  );
}
