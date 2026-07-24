import { AppError } from "../errors/app.error";

export function validateVehicle(
    brand: unknown,
    model: unknown,
    manufactureYear: unknown,
    plate: unknown,
    color: unknown): void {

    if (typeof brand !== "string" || brand.trim() === "") {
        throw new AppError(
            "A marca do veículo é obrigatória.",
            400
        );
    }

    if (typeof model !== "string" || model.trim() === "") {
        throw new AppError(
            "O modelo do veículo é obrigatório.",
            400
        );
    }

    const currentYear = new Date().getFullYear();

    if (typeof manufactureYear !== "number" || !Number.isInteger(manufactureYear) ||
        manufactureYear < 1886 || manufactureYear > currentYear) {
        throw new AppError(
            `O ano de fabricação deve ser um número inteiro entre 1886 e ${currentYear}.`,
            400
        );
    }

    const plateRegex = /^[A-Z]{3}-?[0-9][A-Z0-9][0-9]{2}$/i;

    if (typeof plate !== "string" || plate.trim() === "" || !plateRegex.test(plate.trim())) {
        throw new AppError(
            "A placa do veículo possui um formato inválido.",
            400
        );
    }

    if (typeof color !== "string" || color.trim() === "") {
        throw new AppError(
            "A cor do veículo é obrigatória.",
            400
        );
    }

}