import app from "./app";

const startServer = async () => {
  app.listen({ host: "0.0.0.0", port: 3333 }).then(() => {
    console.log(
      "Server is running on port 3333 \n\nSwagger: http://localhost:3333/docs "
    );
  });
};

startServer();
