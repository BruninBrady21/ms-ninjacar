import { Request, Response } from "express";
import vehicleService from "../services/vehicle.service";

class VehicleController {

    public async findAll(req: Request, res: Response): Promise<void> {
        const vehicles = await vehicleService.findAll();
        res.status(200).json(vehicles);
    }

}

export default new VehicleController();