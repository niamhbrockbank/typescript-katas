interface AtomRegister {
  [atom: string]: number;
}

export default function moleculesToAtoms(formula: string): AtomRegister {
  let outputElements: AtomRegister = {};
  const formulaLength = formula.length;

  for (let i = 0; i < formulaLength; i++) {
    const char = formula[i];

    if (char.match(/[A-Z]/)) {
      outputElements[char] = 1;

      if (i < formulaLength - 1) {
        const nextChar = formula[i + 1];
        if (nextChar.match(/[1-9]/)) {
          outputElements[char] *= parseInt(nextChar);
        }
      }
    }
  }

  return outputElements;
}
