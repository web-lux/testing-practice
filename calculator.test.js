import Calculator from "./calculator";

describe("calculator", () => {
    const calculator = new Calculator();

    it("should_add_numbers", () => {
        expect(calculator.add(2, 2)).toBe(4);
        expect(calculator.add(-4, 2)).toBe(-2);
    })

    it("should_subtract_numbers", () => {
        expect(calculator.subtract(6, 2)).toBe(4)
        expect(calculator.subtract(2, 6)).toBe(-4)
    })

    it("should_divide_numbers", () => {
        expect(calculator.divide(6, 2)).toBe(3)
        expect(() => calculator.divide(2, 0)).toThrow()
    });

    it("should_multiply_numbers", () => {
        expect(calculator.multiply(6, 2)).toBe(12)
        expect(calculator.multiply(6, 0)).toBe(0)
    });
})