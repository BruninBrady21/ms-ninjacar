import { Router } from "express";
import vehicleController from "../controllers/vehicle.controller";

const router = Router();

router.get("/vehicles", vehicleController.findAll);

export default router;