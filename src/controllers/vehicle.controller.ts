import { Request, Response } from "express";
import { parseId } from "../utils/parse-id.util";
import { validateVehiclePayload } from "../utils/validate-vehicle.util";
import vehicleService from "../services/vehicle.service";

class VehicleController {

    public async findAll(req: Request, res: Response): Promise<void> {
        const vehicles = await vehicleService.findAll();

        res.status(200).json(vehicles);
    }

    public async findById(req: Request, res: Response): Promise<void> {
        const id = parseId(req.params.id);
        const vehicle = await vehicleService.findById(id);

        res.status(200).json(vehicle);
    }

    public async create(req: Request, res: Response): Promise<void> {
        const vehiclePayload = validateVehiclePayload(req.body);
        const vehicle = await vehicleService.create(vehiclePayload);
        
        res.status(201).json(vehicle);
    }

    public async update(req: Request, res: Response): Promise<void> {
        const id = parseId(req.params.id);
        const vehiclePayload = validateVehiclePayload(req.body);
        
        const vehicle = await vehicleService.update(id, vehiclePayload);

        res.status(200).json(vehicle);
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const id = parseId(req.params.id);
        await vehicleService.delete(id);

        res.status(204).send();
    }

}

export default new VehicleController();