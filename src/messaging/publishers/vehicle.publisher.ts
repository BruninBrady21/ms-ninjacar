import { getChannel } from "../../config/rabbitmq.config";
import { RABBITMQ } from "../constants/rabbitmq.constants";
import { Vehicle } from "../../models/vehicle.model";

export class VehiclePublisher {

    public async publishVehicleCreated(vehicle: Vehicle): Promise<void> {

        const channel = getChannel();

        channel.publish(RABBITMQ.EXCHANGE, RABBITMQ.ROUTING_KEY, Buffer.from(
                JSON.stringify({
                    event: RABBITMQ.EVENTS.CREATED,
                    data: vehicle
                })
            ),
            { persistent: true }
        );

        console.log(`📨 Evento VehicleCreated publicado (ID: ${vehicle.id})`);
    }

    public async publishVehicleUpdated(vehicle: Vehicle): Promise<void> {

        const channel = getChannel();

        channel.publish(RABBITMQ.EXCHANGE, RABBITMQ.ROUTING_KEY, Buffer.from(
                JSON.stringify({
                    event: RABBITMQ.EVENTS.UPDATED,
                    data: vehicle
                })
            ),
            { persistent: true }
        );

        console.log(`✏️ Evento VehicleUpdated publicado (ID: ${vehicle.id})`);
    }

    public async publishVehicleDeleted(id: number): Promise<void> {

        const channel = getChannel();

        channel.publish(RABBITMQ.EXCHANGE, RABBITMQ.ROUTING_KEY, Buffer.from(
                JSON.stringify({
                    event: RABBITMQ.EVENTS.DELETED,
                    data: { id }
                })
            ),
            { persistent: true }
        );

        console.log(`🗑️ Evento VehicleDeleted publicado (ID: ${id})`);
    }

}