/*
function reduce 
parameters:
  - array of numbers, inputArr
  - callback function, callbackFn
  - optional number, startVal

returns:
  - number

  PSEUDOCODE
  if startVal is a number
    let output = startVal
  else
    let output = 0
    
  for each num in inputArr
    output += inputArr.shift()

  return output
  
*/

interface CallbackFn {
    callbackFn: (prev: number, curr: number) => number;
  }
  
  interface ReduceParams {
    inputArr: number[];
    callbackFn: (prev: number, curr: number) => number;
    startVal?: number
  }
  
  function reduce({ inputArr, callbackFn, startVal }: ReduceParams) {
    let output: number
    if (typeof startVal === 'number') {
      output = startVal
    } else {
      output = 0
    }
  
    for (let num of inputArr) {
      output = callbackFn(output, num)
    }
  
    return output
  }
  
  //Tests
  const arr1 = [1, 2, 3, 4];
  const callbackFn1 = (previousValue: number, currentValue: number): number => previousValue + currentValue
  
  // 0 + 1 + 2 + 3 + 4
  const initialValue = 1;
  const sumWithInitial = reduce({ inputArr: arr1, callbackFn: callbackFn1, startVal: 1 })
  
  console.log(sumWithInitial, 11);
  // expected output: 10