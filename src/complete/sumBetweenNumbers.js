/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {number} sum of all numbers between a and b inclusive
 */
function getSum(a, b)
{ 
   if (a === b){
     return a
   }
  
  const big = Math.max(a, b)
  const small = Math.min(a, b)
  
  let sum = small
  
  for (let count = small + 1; count <= big; count++){
    sum = sum + count
  }
  
  
  return sum
}