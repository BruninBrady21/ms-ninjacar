import express from "express";
import cors from "cors";
import vehicleRoutes from "./routes/vehicle.routes";
import { errorMiddleware } from "./middlewares/error.middleware";

const app = express();

app.use(cors());
app.use(express.json());
app.use(vehicleRoutes);

app.use(errorMiddleware);

app.get("/", (_, res) => {
  res.send("🚗 ms-ninjacar funcionando!");
});

export default app;