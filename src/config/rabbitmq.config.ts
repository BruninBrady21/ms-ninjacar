import amqp, { Channel, ChannelModel } from "amqplib";
import { RABBITMQ } from "../messaging/constants/rabbitmq.constants";

let channel: Channel;

export async function connectRabbitMQ(): Promise<void> {
    const connection: ChannelModel = await amqp.connect(
        "amqp://localhost:5672"
    );

    channel = await connection.createChannel();

    await channel.assertExchange(
      RABBITMQ.EXCHANGE,
      "direct", { durable: true }
    );

    await channel.assertQueue(
      RABBITMQ.QUEUE,
      { durable: true }
    );

    await channel.bindQueue(
      RABBITMQ.QUEUE,
      RABBITMQ.EXCHANGE,
      RABBITMQ.ROUTING_KEY
    );

    console.log("🐇 RabbitMQ conectado com sucesso!");
}

export function getChannel(): Channel {
    if (!channel) {
        throw new Error("RabbitMQ não está conectado.");
    }

    return channel;
}