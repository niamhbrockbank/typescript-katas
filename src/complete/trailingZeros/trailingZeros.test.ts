import { trailingZeros } from "./trailingZeros";

test("No trailing zeros", () => {
    expect(trailingZeros(0)).toBe(0)
    expect(trailingZeros(2)).toBe(0)
})

test("negative input returns null", () => {
    expect(trailingZeros(-1)).toBe(null)
})

test("numbers up to 30", () => {
    expect(trailingZeros(5)).toBe(1)
    expect(trailingZeros(30)).toBe(7)
})