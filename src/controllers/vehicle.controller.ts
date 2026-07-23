import { Request, Response } from "express";
import vehicleService from "../services/vehicle.service";

class VehicleController {

    public async findAll(req: Request, res: Response): Promise<void> {
        const vehicles = await vehicleService.findAll();

        res.status(200).json(vehicles);
    }

    public async findById(req: Request, res: Response): Promise<void> {
        const id = Number(req.params.id);
        const vehicle = await vehicleService.findById(id);

        res.status(200).json(vehicle);
    }

    public async create(req: Request, res: Response): Promise<void> {
        const vehicle = await vehicleService.create(req.body);
        
        res.status(201).json(vehicle);
    }

    public async update(req: Request, res: Response): Promise<void> {

        const id = Number(req.params.id);
        const vehicle = await vehicleService.update(id, req.body);

        res.status(200).json(vehicle);
    }

    public async delete(req: Request, res: Response): Promise<void> {

        const id = Number(req.params.id);
        await vehicleService.delete(id);

        res.status(204).send();
    }

}

export default new VehicleController();