import capitalize from "./capitalize";

it("should_return_string_with_first_letter_capitalized", () => {
    expect(capitalize("hello world")).toBe("Hello world")
});