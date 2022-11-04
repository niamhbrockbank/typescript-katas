const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
  it("can handle mov", () => {
    assert.deepEqual(simple_assembler(["mov a 16"]), { a: 16 });
  });

  it("can handle inc", () => {
    assert.deepEqual(simple_assembler(["mov a 16", "inc a"]), { a: 17 });
  });

  it("can handle dec", () => {
    assert.deepEqual(
      simple_assembler(["mov a 16", "dec a", "dec a", "dec a"]),
      { a: 13 }
    );
  });

  it("test", () => {
    assert.deepEqual(
      simple_assembler([
        "mov a 5",
        "inc a",
        "dec a",
        "dec a",
        "jnz a -1",
        "inc a",
      ]),
      { a: 1 }
    );

    assert.deepEqual(
      simple_assembler(["mov a -10", "mov b a", "inc a", "dec b", "jnz a -2"]),
      { a: 0, b: -20 }
    );
  });
});
