import { AppError } from "../errors/app.error";

export function parseId(id: string | string[]): number {

    if (Array.isArray(id)) {
        throw new AppError(
            "O ID do veículo deve ser um valor único.",
            400
        );
    }

    const parsedId = Number(id);

    if (!Number.isInteger(parsedId) || parsedId <= 0) {
        throw new AppError(
            "O ID do veículo deve ser um número inteiro positivo.",
            400
        );
    }

    return parsedId;
}