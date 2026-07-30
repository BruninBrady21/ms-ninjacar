export const RABBITMQ = {

    EXCHANGE: "vehicle.exchange",

    ROUTING_KEY: "vehicle.created",

    QUEUE: "vehicle.created.queue",

    EVENTS: {
        CREATED: "VehicleCreated",
        UPDATED: "VehicleUpdated",
        DELETED: "VehicleDeleted"
    }

} as const;