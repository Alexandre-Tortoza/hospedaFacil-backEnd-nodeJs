import { sql } from "../../config/db";

interface User {
  id: string;
  nome: string;
  email: string;
  senha_hash: string;
  telefone: string;
  tipo_usuario: number;
  ativo: boolean;
}

const todosUsuarios: User[] = [];

export class userModel {
  static async getAllUsers() {
    const result = await sql`SELECT * FROM usuarios`;
    return result;
  }

  static async getUser(id: string) {
    const result = await sql`SELECT * FROM usuarios WHERE id = ${id}`;
    return result;
  }

  static async postUser(body: User) {
    try {
      await sql`INSERT INTO usuarios (nome, email, senha_hash, telefone, tipo_usuario, ativo) VALUES (${body.nome}, ${body.email}, ${body.senha_hash}, ${body.telefone}, ${body.tipo_usuario}, true)`;
    } catch (error) {
      console.log("\n\n\n\n\n" + error);
    }

    return [];
  }
}
