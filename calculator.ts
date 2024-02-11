export default class Calculator {
    constructor() { }

    add(x: number, y: number): number { 
        return x + y
    }
    
    subtract(x: number, y: number): number { 
        return x - y
    }
    
    divide(dividend: number, divisor: number):number {
        if (divisor === 0) {
            throw new Error("Cannot divide by 0")
        }
        return dividend / divisor
    }

    multiply(multiplier: number, multiplicand: number):number {
        return multiplier * multiplicand  
     }
}