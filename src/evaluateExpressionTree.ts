/*
Evaluate an expression tree
Using recursive method

EXTENSION
include variables in your expressions

For visualisation of tree see:
https://jamboard.google.com/d/1d-h0UpzcNi48h67pgV7tBq98oabF2Wmon-n0KVPgArM/edit?usp=sharing

*/

type Operator = 'subtract' | 'multiply' | 'add' | 'divide';

type Expression = 
  number 
  | {op : Operator; a : Expression; b : Expression;}

export function evaluateTree(expression : Expression): number {
    let resultNum = 0;

    //handle invalid arguments
    //handle single leaf expression trees
    if (typeof expression === 'number'){
        return resultNum + roundTo2dp(expression)
    }

    //handle multiple tier trees
    //handle operators
    const {op, a, b} = expression

    if (op === 'divide'){
        resultNum += evaluateTree(a) / evaluateTree(b)
    } else if (op === 'multiply'){
        resultNum += evaluateTree(a) * evaluateTree(b)
    } else if (op === 'add'){
        resultNum += evaluateTree(a) + evaluateTree(b)
    } else if (op === 'subtract'){
        resultNum += evaluateTree(a) - evaluateTree(b)
    }

    return resultNum
}

function roundTo2dp(num : number){
    return Math.round(num * 100)/100
}