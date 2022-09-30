// MAIN CODE
////Array generation
interface testArrObject {
    [size : string] : number[]
}

const testArrs : testArrObject =
{
  ten: [...Array(10).keys()],
  hundred: [...Array(100).keys()],
  thousand: [...Array(1000).keys()],
  tenThousand: [...Array(10000).keys()],
  hundredThousand: [...Array(100000).keys()],
  million: [...Array(1000000).keys()],
  tenMillion: [...Array(10_000_000).keys()],
//   hundredMillion : [...Array(100_000_000).keys()]
}

//Testing push
console.log('')
console.log('Testing push')
for (const arr in testArrs) {
  const arrForTesting = testArrs[arr]
  const startTime = performance.now();
  arrForTesting.push();
  const stopTime = performance.now();
  const elapsedTime = stopTime - startTime;

  console.log(arr + " " + Math.round(elapsedTime * 1000)/1000+"ms")
}

//Testing unshift
console.log('')
console.log('Testing unshift')
for (const arr in testArrs) {
  const arrForTesting = [...testArrs[arr]]
  console.time(arr)
  arrForTesting.unshift()
  console.timeEnd(arr)
}

//Testing pop
console.log('')
console.log('Testing pop')
for (const arr in testArrs) {
  const arrForTesting = [...testArrs[arr]]
  console.time(arr)
  arrForTesting.pop()
  console.timeEnd(arr)
}

//Testing shift
console.log('')
console.log('Testing shift')
for (const arr in testArrs) {
  const arrForTesting = [...testArrs[arr]]
  console.time(arr)
  arrForTesting.shift()
  console.timeEnd(arr)
}