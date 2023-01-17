/*
Extract parameters from a Spotify callback URL into an object.

example format:
whatever#field1=value1&field2=value2&field3=value3

key-value pairs start after #
treat all values as strings
*/

/*
PSEUDOCODE
@params : string, call it url
@returns : object of type [key : string] : string

create empty object, call it outputObj

create empty string, call it key
create empty string, call it value
create status assign "key" string to it

find index of first #
  from said index onwards look at each character in order
    if character is not = or &
      push character to variable that has same name as status
    else if character is =
      change status to 'value'
    else if character is &
      change status to 'key'
      push key and value to new property in outputObj
      reset key and value
*/

interface outputObj {
  [key: string]: string;
}

export function extractParams(url: string): outputObj {
  const outputObj: outputObj = {};
  const startIndex = url.indexOf("#") + 1;
  let status = "key";

  let key = "";
  let value = "";

  for (let i = startIndex; i < url.length; i++) {
    const char = url[i];
    if (char !== "=" && char !== "&") {
      if (status === "key") {
        key = key.concat(char);
      } else {
        value = value.concat(char);
      }
    } else if (char === "=") {
      status = "value";
    } else if (char === "&") {
      status = "key";
      outputObj[key] = value;
      key = "";
      value = "";
    }
  }

  outputObj[key] = value;

  return outputObj;
}

/*
  extract params with split
  */

export function extractSplit(url: string): outputObj {
  const outputObj: outputObj = {};
  const paramsUrl = url.slice(url.indexOf("#") + 1);
  const keyValPairs = paramsUrl.split("&");

  for (let keyValPair of keyValPairs) {
    const keyValArr = keyValPair.split("=");
    outputObj[keyValArr[0]] = keyValArr[1];
  }

  return outputObj;
}

/*
  extract params with reduce
  */

export function extractReduce(url: string): outputObj {
  const outputObj: outputObj = {};
  const paramsUrl = url.slice(url.indexOf("#") + 1);
  const keyValPairs = paramsUrl.split("&");

  //TO DO: write with reduce

  return outputObj;
}
