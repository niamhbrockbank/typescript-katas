import noughtsAndCrosses from "./noughtsAndCrosses";

describe("checks for results of noughts and crosses game", () => {
  test("returns row winner", () => {
    expect(
      noughtsAndCrosses([
        [0, 0, 0],
        [1, 1, 1],
        [0, 1, 2],
      ])
    ).toBe(1);
  });

  test("returns column winner", () => {
    expect(
      noughtsAndCrosses([
        [1, 0, 2],
        [0, 1, 2],
        [1, 1, 2],
      ])
    ).toBe(2);
  });

  test("returns diagonal winner", () => {
    expect(
      noughtsAndCrosses([
        [1, 0, 2],
        [1, 1, 0],
        [2, 0, 1],
      ])
    ).toBe(1);
  });

  test("returns draw", () => {
    expect(
      noughtsAndCrosses([
        [2, 1, 1],
        [1, 2, 2],
        [2, 2, 1],
      ])
    ).toBe(0);
  });

  test("returns -1 if game not yet won nor lost", () => {
    expect(
      noughtsAndCrosses([
        [1, 0, 1],
        [2, 1, 2],
        [2, 0, 2],
      ])
    ).toBe(-1);
  });
});
