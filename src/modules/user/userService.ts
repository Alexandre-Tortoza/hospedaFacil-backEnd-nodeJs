import { userModel } from "./userModel";

export class userService {
  static async getAllUsers() {
    return userModel.getAllUsers();
  }

  static async getUser(id: string) {
    return userModel.getUser(id);
  }

  static async postUser(body: object) {
    return userModel.postUser(body);
  }
}
