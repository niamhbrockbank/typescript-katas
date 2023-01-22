import { multiplyStrings } from "./multiplyStrings";

test("single digit numbers multiply correctly", () => {
    expect(multiplyStrings("2", "3")).toBe("6")
    expect(multiplyStrings("5", "3")).toBe("15")
})

test("multiple digit numbers multiply together", () => {
    expect(multiplyStrings("11", "85")).toBe("935")
    expect(multiplyStrings("30", "69")).toBe("2070")
})

test("starting zeros are ignored", () => {
    expect(multiplyStrings("06", "2")).toBe("12")
    expect(multiplyStrings("03", "03")).toBe("9")
})

test.todo("large numbers are handled")