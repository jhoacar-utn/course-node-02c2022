const { sum } = require("./operations")

describe("Operaciones aritmeticas", () => {
    it("Deberia sumar todos los numeros pasados por parametro", () => {
        expect(sum(1, "2", 5.0)).toBe(8);
    })
})