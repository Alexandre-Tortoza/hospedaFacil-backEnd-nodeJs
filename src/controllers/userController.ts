// Controllers: Gerenciam as requisições e respostas HTTP
import fastify, { FastifyReply, FastifyRequest } from "fastify";
import { userService } from "../services/userService";
import formatResponse from "../utils/responseFormatter";

export class userController {
  static async getAllUsers(request: FastifyRequest, reply: FastifyReply) {
    try {
      const result = await userService.getAllUsers();
      if (result.length === 0) {
        reply
          .status(200)
          .send(formatResponse(result, 404, "Nenhum usuário encontrado"));
      }
      reply.send(formatResponse(result, 200, "Todos os usuários encontrados"));
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
      reply
        .status(500)
        .send(formatResponse(error, 500, "Erro ao buscar usuários"));
    }
  }

  static async getUser(request: FastifyRequest, reply: FastifyReply) {
    return;
  }
}
