import { AppError } from "../errors/app.error";

export interface VehiclePayload {
    brand: string;
    model: string;
    manufactureYear: number;
    plate: string;
    color: string;
}

export function validateVehiclePayload(payload: unknown): VehiclePayload {
    if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
        throw new AppError(
            "O corpo da requisição deve ser um objeto com os dados do veículo.",
            400
        );
    }

    const vehicle = payload as Record<string, unknown>;

    const brand = normalizeRequiredString(vehicle.brand, "A marca do veículo é obrigatória.");
    const model = normalizeRequiredString(vehicle.model, "O modelo do veículo é obrigatório.");
    const color = normalizeRequiredString(vehicle.color, "A cor do veículo é obrigatória.");

    const currentYear = new Date().getFullYear();

    if (typeof vehicle.manufactureYear !== "number" || !Number.isInteger(vehicle.manufactureYear) ||
        vehicle.manufactureYear < 1886 || vehicle.manufactureYear > currentYear) {
        throw new AppError(
            `O ano de fabricação deve ser um número inteiro entre 1886 e ${currentYear}.`,
            400
        );
    }

    const plate = normalizePlate(vehicle.plate);

    return {
        brand,
        model,
        manufactureYear: vehicle.manufactureYear,
        plate,
        color
    };
}

function normalizeRequiredString(value: unknown, message: string): string {
    if (typeof value !== "string" || value.trim() === "") {
        throw new AppError(message, 400);
    }

    return value.trim();
}

function normalizePlate(value: unknown): string {
    if (typeof value !== "string") {
        throw new AppError("A placa do veículo é obrigatória.", 400);
    }

    const normalizedPlate = value.trim().toUpperCase().replace(/[^A-Z0-9]/g, "");

    if (!/^[A-Z]{3}[0-9A-Z]{4}$/.test(normalizedPlate)) {
        throw new AppError("A placa do veículo possui um formato inválido.", 400);
    }

    return normalizedPlate;
}