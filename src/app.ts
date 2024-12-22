require("dotenv").config();
import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import {
  validatorCompiler,
  serializerCompiler,
} from "fastify-type-provider-zod";
import { fastifySwagger } from "@fastify/swagger";
import { fastifySwaggerUi } from "@fastify/swagger-ui";
import { routes } from "./routes/routes";

const app = fastify();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(fastifyCors, { origin: "*" });
app.register(fastifySwagger, {
  openapi: {
    info: {
      title: "Hospeda Fácil PI",
      description: "API para a Solução Hospeda Fácil",
      version: "1.0.0",
    },
  },
});
app.register(fastifySwaggerUi, {
  routePrefix: "/docs",
});

app.register(routes);

export default app;
