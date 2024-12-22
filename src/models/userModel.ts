// Models: Lidam com a lógica de acesso ao banco de dados
import { sql } from "../config/db";

export class userModel {
  static async getVersion() {
    const result = await sql`SELECT version()`;
    return result[0];
  }
  static async getAllUsers() {
    const result = await sql`SELECT * FROM usuarios`;
    return result;
  }
}
