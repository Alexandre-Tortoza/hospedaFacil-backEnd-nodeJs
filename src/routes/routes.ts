import { FastifyInstance } from "fastify";
import { userController } from "../controllers/userController";

export async function routes(app: FastifyInstance) {
  app.get("/allUsers", userController.getAllUsers);
  // app.get("/user:id", userController.getUser);
  // app.post("/user", userController.postUser);
  // app.put("/user:id", userController.putUser);
  // app.delete("/user:id", userController.deleteUser);
}
