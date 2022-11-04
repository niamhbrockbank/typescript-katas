import moleculesToAtoms from "./moleculesToAtoms";

describe("Tests", () => {
  test("parses water correctly", () => {
    expect(moleculesToAtoms("H2O")).toStrictEqual({ H: 2, O: 1 });
  });

  test("Should parse magnesium hydroxide: Mg(OH)2", () => {
    expect(moleculesToAtoms("Mg(OH)2")).toStrictEqual({ Mg: 1, O: 2, H: 2 });
  });

  test.skip("Should parse Fremy's salt: K4[ON(SO3)2]2", () => {
    expect(moleculesToAtoms("K4[ON(SO3)2]2")).toStrictEqual({
      K: 4,
      O: 14,
      N: 2,
      S: 4,
    });
  });
});
