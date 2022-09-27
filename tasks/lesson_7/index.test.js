const { sum } = require("./operations")

describe("Operaciones aritmeticas", () => {

    describe("Operacion de Suma", () => {

        test("Deberia sumar dos numeros", () => {
            expect(sum(1, 2)).toBe(3)
        })

        test.skip("Deberia poder sumar los numeros con su valor numerico y no como cadena de texto", () => {
            expect(sum("1", "2")).toBe(3);
        })

        test.skip("Deberia arrojar una excepcion si no cumple que es un numero sus parametros", () => {
            expect(() => sum("Hola", "2")).toThrow(new Error("Los parametros deben ser numeros"));
        })

        test.skip("Deberia poder sumar tres o mas parametros", () => {
            expect(sum(1, 3, "6")).toBe(10);
        })

        test.skip("Deberia sumar cadenas de texto o numeros con decimales", () => {
            expect(sum(1, "2", 5.3)).toBe(8.3);
        })
    })


})