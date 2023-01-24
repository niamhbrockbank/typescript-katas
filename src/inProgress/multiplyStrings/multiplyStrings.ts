export function multiplyStrings(str1: string, str2: string): string {
  const num1 = parseFloat(str1);
  const num2 = parseFloat(str2);

  let productStr = `${num1 * num2}`;
  if (productStr.includes("e")) {
    const bigProduct = BigInt(num1) * BigInt(num2);
    return bigProduct.toString();
  }

  return productStr;
}
