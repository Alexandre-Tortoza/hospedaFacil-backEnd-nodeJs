import { userService } from "./userService";
import formatResponse from "../../utils/responseFormatter";
import { NOMEM } from "dns";

export class userController {
  static async postUser(body: object) {
    // Lidar com a resposta aqui
    await userService.postUser(body);
  }
}
