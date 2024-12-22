import app from "./app";

const startServer = async () => {
  app.listen({ port: 3333 }).then(() => {
    console.log(
      "Server is running on port 3333 \n\nSwagger: http://localhost:3333/docs "
    );
  });
};

startServer();
