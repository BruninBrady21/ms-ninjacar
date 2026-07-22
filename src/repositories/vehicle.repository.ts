import pool from "../config/database.config";
import { Vehicle } from "../models/vehicle.model";

class VehicleRepository {

    public async findAll(): Promise<Vehicle[]> {

        const result = await pool.query(`
            SELECT
                id,
                brand,
                model,
                manufacture_year AS "manufactureYear",
                plate,
                color
            FROM vehicles
        `);

        return result.rows;

    }
}

export default new VehicleRepository();