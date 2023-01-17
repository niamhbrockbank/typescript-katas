export function trailingZeros(inputNum: number): number | null {
  if (inputNum < 0) {
    return null;
  }

  const kMax = log5(inputNum);
  let numZeros = 0;
  for (let k = 1; k <= kMax; k++) {
    numZeros += Math.floor(inputNum / 5 ** k);
  }

  return numZeros;
}

//using the equation for calculating trailing zeros
//kMax = log5(inputNum)
//let numZeros = 0
//for k from 0 to kMax; k++
//numZeros += Math.floor(inputNum / 5**k)
//return numZeros

function log5(inputNum: number): number {
  return Math.log(inputNum) / Math.log(5);
}
