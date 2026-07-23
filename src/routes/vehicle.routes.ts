import { Router } from "express";
import vehicleController from "../controllers/vehicle.controller";

const router = Router();

router.get("/vehicles", vehicleController.findAll);

router.post("/vehicles", vehicleController.create);

export default router;