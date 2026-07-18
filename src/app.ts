import express from "express";
import cors from "cors";
import vehicleRoutes from "./routes/vehicle.routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(vehicleRoutes);

app.get("/", (_, res) => {
  res.send("🚗 ms-ninjacar funcionando!");
});

export default app;