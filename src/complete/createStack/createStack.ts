/*
functions to write...
createStack()
@returns: 
  - object representing an empty stack, not a reference to the array

methods of stack, no other properties
push(element)
pop(stack)
isEmpty(stack)
*/

function createStack() {
  const stackData: any = [];

  function push(element: any) {
    return stackData.push(element);
  }

  function pop() {
    const stackLength = stackData.length;
    if (stackLength > 0) {
      return stackData.pop(stackLength);
    }
    return undefined;
  }

  function isEmpty() {
    return stackData.length === 0;
  }

  return { push, pop, isEmpty };
}

//Tests
const myStack = createStack();
myStack.push(20);
myStack.push(30);
myStack.pop();
myStack.push(10);
myStack.push(40);

while (!myStack.isEmpty()) {
  const el = myStack.pop();
  console.log(el);
}
