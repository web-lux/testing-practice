import {analyzeArray, getAverage, getMin, getMax} from "./analyzeArray"

describe("arrayInformations", () => {
    const arrayToAnalyze = [1, 8, 3, 4, 2, 6];

    it("should_get_average", () => {
        expect(getAverage(arrayToAnalyze)).toBe(4)
    })

    it("should_get_min_value", () => {
        expect(getMin(arrayToAnalyze)).toBe(1)
    })

    it("should_get_max_value", () => {
        expect(getMax(arrayToAnalyze)).toBe(8)
    })

    it("should_return_an_object_with_info_about_array", () => {
        expect(analyzeArray(arrayToAnalyze)).toBe({
            average: 4,
            min: 1,
            max: 8,
            length: 6
          })
    })
})
