import { Router } from "express";
import vehicleController from "../controllers/vehicle.controller";

const router = Router();

router.get("/vehicles", vehicleController.findAll);
router.get("/vehicles/:id", vehicleController.findById);

router.post("/vehicles", vehicleController.create);

router.put("/vehicles/:id", vehicleController.update);

router.delete("/vehicles/:id", vehicleController.delete);

export default router;