import app from "./app";
import { connectRabbitMQ } from "./config/rabbitmq.config";

const PORT = process.env.PORT || 3000;

async function startServer() {
    try {
        await connectRabbitMQ();

        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });

    } catch (error) {
        console.error("Erro ao iniciar aplicação:", error);
    }
}

startServer();