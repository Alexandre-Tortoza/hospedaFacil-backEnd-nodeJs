// Services: Contêm a lógica de negócio
import { userModel } from "../models/userModel";
export class userService {
  static async getAllUsers() {
    try {
      const result = await userModel.getAllUsers();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getUser(id: number) {
    try {
      const response = await userModel.getUser(id);
      return response;
    } catch (error) {
      throw error;
    }
  }
}
