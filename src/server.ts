import app from "./app";

const startServer = async () => {
  try {
    app.listen({ host: "0.0.0.0", port: 3333 }).then(() => {
      console.log("O servidor está Rodando 🚀");
    });
  } catch (error) {
    console.error("Erro ao iniciar o servidor \n\n", error);
  }
};

startServer();
