import amqp, { Channel, ChannelModel } from "amqplib";

let channel: Channel;

export async function connectRabbitMQ(): Promise<void> {
    const connection: ChannelModel = await amqp.connect(
        "amqp://localhost:5672"
    );

    channel = await connection.createChannel();

    console.log("🐇 RabbitMQ conectado com sucesso!");
}

export function getChannel(): Channel {
    if (!channel) {
        throw new Error("RabbitMQ não está conectado.");
    }

    return channel;
}