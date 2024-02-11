interface ArrayInformations {
    average: number,
    min: number,
    max: number,
    length: number,
}

function getAverage(array: number[]): number {
    const sum = array.reduce((sum, current) => sum + current, 0);
    return sum / array.length;
}

function getMin(array: number[]): number {
    const min = array.reduce((prev, current) => prev < current ? prev : current);
    return min;
}

function getMax(array: number[]): number {
    const max = array.reduce((prev, current) => prev > current ? prev : current);
    return max;
}

function analyzeArray(array: number[]): ArrayInformations {
    return {
        average: getAverage(array),
        min: getMin(array),
        max: getMax(array),
        length: array.length,
    }
}

export {
    getAverage,
    getMin,
    getMax,
    analyzeArray
}