import { Request, Response } from "express";
import vehicleService from "../services/vehicle.service";

class VehicleController {

    public async findAll(
        req: Request,
        res: Response
    ): Promise<void> {

        const vehicles = await vehicleService.findAll();
        res.status(200).json(vehicles);
    }

    public async create(
        req: Request,
        res: Response
    ): Promise<void> {

        const vehicle = await vehicleService.create(req.body);
        res.status(201).json(vehicle);
    }

}

export default new VehicleController();