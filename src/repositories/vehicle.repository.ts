import { Vehicle } from "../models/vehicle.model";

class VehicleRepository {

    public findAll(): Vehicle[] {

        return [
            {
                id: 1,
                brand: "Toyota",
                model: "Corolla",
                year: 2024,
                plate: "ABC-1234"
            }
        ];

    }

}

export default new VehicleRepository();