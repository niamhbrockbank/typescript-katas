/*
printAllKeyValuePairs
  - params : object with string keys and  string values
  - return void
*/

interface InputObject {
  [name: string]: string;
}

function printAllKeyValuePairs(obj: InputObject): void {
  for (let pair in obj) {
    console.log(pair + " " + obj[pair]);
  }
}

//Tests
const characters = {
  Bruce: "Hulk",
  Peter: "Spiderman",
  Ororo: "Storm",
};

printAllKeyValuePairs(characters);

console.log(Object.entries(characters));
