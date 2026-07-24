import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/app.error";
import { PostgresError } from "../types/postgres-error.type";

export function errorMiddleware(
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction): void {

    if (error instanceof AppError) {
        res.status(error.statusCode).json({
            message: error.message
        });

        return;
    }

    const postgresError = error as PostgresError;

    if (postgresError.code === "23505" && postgresError.constraint === "vehicles_plate_key") {
        res.status(409).json({
            message: "A placa informada já está cadastrada."
        });

        return;
    }

    console.error(error);

    res.status(500).json({
        message: "Erro interno do servidor."
    });

}