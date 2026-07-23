import { VehicleCreateDTO } from "../dtos/vehicle-create.dto";
import vehicleRepository from "../repositories/vehicle.repository";
import { Vehicle } from "../models/vehicle.model";
import { AppError } from "../errors/app.error";
import { VehicleUpdateDTO } from "../dtos/vehicle-update.dto";

class VehicleService {

    public async findAll(): Promise<Vehicle[]> {
        return await vehicleRepository.findAll();
    }

    public async findById(id: number): Promise<Vehicle> {

        const vehicle = await vehicleRepository.findById(id);

        if (!vehicle) {
            throw new AppError(
                "Veículo não encontrado.",
                404
            );
        }

        return vehicle;
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

    public async update(id: number, vehicle: VehicleUpdateDTO): Promise<Vehicle> {

        const existingVehicle = await vehicleRepository.findById(id);

        if (!existingVehicle) {
            throw new AppError(
                "Veículo não encontrado.",
                404
            );
        }

        const vehicleWithSamePlate =
            await vehicleRepository.findByPlate(vehicle.plate);

        if (vehicleWithSamePlate && vehicleWithSamePlate.id !== id) {
            throw new AppError(
                "Já existe outro veículo cadastrado com essa placa.",
                409
            );
        }

        return await vehicleRepository.update(
            id,
            vehicle
        );

    }

    public async delete(id: number): Promise<void> {

        const vehicle = await vehicleRepository.findById(id);

        if (!vehicle) {
            throw new AppError(
                "Veículo não encontrado.",
                404
            );
        }

        await vehicleRepository.delete(id);
    }
}

export default new VehicleService();