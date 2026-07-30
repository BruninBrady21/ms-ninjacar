import test from "node:test";
import assert from "node:assert/strict";
import { validateVehiclePayload } from "./validate-vehicle.util";

test("deve aceitar um payload válido de veículo", () => {
  const payload = validateVehiclePayload({
    brand: "Toyota",
    model: "Corolla",
    manufactureYear: 2020,
    plate: "ABC-1234",
    color: "Prata"
  });

  assert.equal(payload.brand, "Toyota");
  assert.equal(payload.plate, "ABC1234");
});

test("deve rejeitar placa com formato inválido", () => {
  assert.throws(() => validateVehiclePayload({
    brand: "Toyota",
    model: "Corolla",
    manufactureYear: 2020,
    plate: "123",
    color: "Prata"
  }), /formato inválido/i);
});

test("deve rejeitar ano fora do intervalo permitido", () => {
  assert.throws(() => validateVehiclePayload({
    brand: "Toyota",
    model: "Corolla",
    manufactureYear: 1800,
    plate: "ABC-1234",
    color: "Prata"
  }), /ano de fabricação/i);
});
