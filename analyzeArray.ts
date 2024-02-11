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

function getMax() {

}

function analyzeArray(array: number[]): ArrayInformations {

}

export {
    getAverage,
    getMin,
    getMax,
    analyzeArray
}