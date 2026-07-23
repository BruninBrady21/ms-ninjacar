import { VehicleCreateDTO } from "../dtos/vehicle-create.dto";
import vehicleRepository from "../repositories/vehicle.repository";
import { Vehicle } from "../models/vehicle.model";
import { AppError } from "../errors/app.error";

class VehicleService {

    public async findAll(): Promise<Vehicle[]> {
        return await vehicleRepository.findAll();
    }

    public async create(vehicle: VehicleCreateDTO): Promise<Vehicle> {
        const existingVehicle =
            await vehicleRepository.findByPlate(
                vehicle.plate
            );

        if (existingVehicle) {
            throw new AppError(
                "Já existe um veículo cadastrado com essa placa.",
                409
            );
        }

        return await vehicleRepository.create(vehicle);
    }
}

export default new VehicleService();