import vehicleRepository from "../repositories/vehicle.repository";
import { Vehicle } from "../models/vehicle.model";

class VehicleService {

    public async findAll(): Promise<Vehicle[]> {
        return await vehicleRepository.findAll();
    }

}

export default new VehicleService();