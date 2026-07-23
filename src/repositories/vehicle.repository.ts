import pool from "../config/database.config";
import { VehicleCreateDTO } from "../dtos/vehicle-create.dto";
import { VehicleUpdateDTO } from "../dtos/vehicle-update.dto";
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

    public async findById(id: number): Promise<Vehicle | null> {
        const result = await pool.query(`
            SELECT
                id,
                brand,
                model,
                manufacture_year AS "manufactureYear",
                plate,
                color
            FROM vehicles
            WHERE id = $1
            `,
            [id]
        );
        return result.rows[0] ?? null;
    }

    public async findByPlate(plate: string): Promise<Vehicle | null> {
        const result = await pool.query(`
            SELECT
                id,
                brand,
                model,
                manufacture_year AS "manufactureYear",
                plate,
                color
            FROM vehicles
            WHERE plate = $1
            `,
            [plate]
        );

        return result.rows[0] ?? null;
    }

    public async create(vehicle: VehicleCreateDTO): Promise<Vehicle> {

        const result = await pool.query(
            `
            INSERT INTO vehicles
                (
                    brand,
                    model,
                    manufacture_year,
                    plate,
                    color
                )
            VALUES
                ($1, $2, $3, $4, $5)
            RETURNING
                id,
                brand,
                model,
                manufacture_year AS "manufactureYear",
                plate,
                color
            `,
            [
                vehicle.brand,
                vehicle.model,
                vehicle.manufactureYear,
                vehicle.plate,
                vehicle.color
            ]
        );

        return result.rows[0];

    }

    public async update(id: number, vehicle: VehicleUpdateDTO): Promise<Vehicle> {

        const result = await pool.query(`
            UPDATE vehicles
            SET
                brand = $1,
                model = $2,
                manufacture_year = $3,
                plate = $4,
                color = $5
            WHERE id = $6
            RETURNING
                id,
                brand,
                model,
                manufacture_year AS "manufactureYear",
                plate,
                color
            `,
            [
                vehicle.brand,
                vehicle.model,
                vehicle.manufactureYear,
                vehicle.plate,
                vehicle.color,
                id
            ]
        );

        return result.rows[0];
    }

    public async delete(id: number): Promise<boolean> {

        const result = await pool.query(`
            DELETE FROM vehicles
            WHERE id = $1
            `,
            [id]
        );

        return (result.rowCount ?? 0) > 0;
    }

}

export default new VehicleRepository();