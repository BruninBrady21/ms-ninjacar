import { getChannel } from "../../config/rabbitmq.config";
import { RABBITMQ } from "../constants/rabbitmq.constants";
import { Vehicle } from "../../models/vehicle.model";

export class VehiclePublisher {

    async publishVehicleCreated(vehicle: Vehicle): Promise<void> {

        const channel = getChannel();

        const message = JSON.stringify({
            event: "VehicleCreated",
            data: vehicle
        });

        channel.publish(
            RABBITMQ.EXCHANGE,
            RABBITMQ.ROUTING_KEY,
            Buffer.from(message),
            {
                persistent: true
            }
        );

        console.log("📨 Evento VehicleCreated publicado.");
    }

}