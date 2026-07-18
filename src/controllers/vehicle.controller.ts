import { Request, Response } from "express";
import vehicleService from "../services/vehicle.service";

class VehicleController {

    public findAll(req: Request, res: Response): void {
        const vehicles = vehicleService.findAll();
        res.status(200).json(vehicles);
    }

}

export default new VehicleController();