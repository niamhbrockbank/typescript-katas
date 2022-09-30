import {evaluateTree} from './evaluateExpressionTree'

test("single leaf trees evaluate to correct number", () => {
  expect(evaluateTree(4)).toBe(4);
  expect(evaluateTree(-7)).toBe(-7);
  expect(evaluateTree(5/6)).toBe(0.83);
  expect(evaluateTree(0)).toBe(0);
});

test.skip("invalid arguments are handled", () => {
  //@ts-ignore
  expect(evaluateTree({op:'twelve', a: 3, b: 5})).toBe('invalid input, please use the Expression structure');
  //@ts-ignore
  expect(evaluateTree('twelve')).toBe('invalid input, please use the Expression structure');
})

//Testing operators behave correctly
test("division operator divides", () => {
  expect(evaluateTree({op: 'divide', a: 15, b: 5})).toBe(3);
  expect(evaluateTree({op: 'divide', a: -20, b: 4})).toBe(-5);
  expect(evaluateTree({op: 'divide', a: 4, b: -2})).toBe(-2);
  expect(evaluateTree({op: 'divide', a: 4, b: 4})).toBe(1);
  expect(evaluateTree({op: 'divide', a: 0, b: 4})).toBe(0);

  //division by zero is evaluated to Infinity
  expect(evaluateTree({op: 'divide', a: 4, b: 0})).toBe(Infinity);
})

test("multiplication operator multiplies", () => {
  expect(evaluateTree({op: 'multiply', a: 15, b: 5})).toBe(75);
  expect(evaluateTree({op: 'multiply', a: -2, b: 4})).toBe(-8);
  expect(evaluateTree({op: 'multiply', a: 2, b: 0})).toBe(0);
  expect(evaluateTree({op: 'multiply', a: -2, b: 0})).toBe(0);
  expect(evaluateTree({op: 'multiply', a: 0, b: 4})).toBe(0);
})

test("addition operator adds", () => {
  expect(evaluateTree({op: 'add', a: 15, b: 5})).toBe(20);
  expect(evaluateTree({op: 'add', a: -20, b: 4})).toBe(-16);
  expect(evaluateTree({op: 'add', a: -4, b: 20})).toBe(16);
  expect(evaluateTree({op: 'add', a: 5, b: -7})).toBe(-2);
  expect(evaluateTree({op: 'add', a: -4, b: 4})).toBe(0);
})

test("subtraction operator subtracts", () => {
  expect(evaluateTree({op: 'subtract', a: 50, b:45})).toBe(5);
  expect(evaluateTree({op: 'subtract', a: 50, b:-45})).toBe(95);
  expect(evaluateTree({op: 'subtract', a: -50, b:45})).toBe(-95);
  expect(evaluateTree({op: 'subtract', a: 5, b:10})).toBe(-5);
  expect(evaluateTree({op: 'subtract', a: 3, b:3})).toBe(0);
})

test("three tier trees and above evaluate to correct number", () => {
  expect(evaluateTree({op: 'multiply', a: {op : 'subtract', a : 7, b: 5}, b : {op : 'divide', a: {op : 'add', a: 5, b: 10}, b: 3}})).toBe(10)
})

test.todo("decimals are handled")