import vehicleRepository from "../repositories/vehicle.repository";
import { Vehicle } from "../models/vehicle.model";

class VehicleService {

    public findAll(): Vehicle[] {

        return vehicleRepository.findAll();

    }

}

export default new VehicleService();