//TODO: performance should be considered

export default function scramble(str1: string, str2: string): boolean {
  let copyStr1 = str1;
  const str2Length = str2.length;

  for (let i = 0; i < str2Length; i++) {
    const letter = str2[i];

    if (!copyStr1.includes(letter)) {
      return false;
    } else {
      const scrambledIndex = copyStr1.indexOf(letter);
      copyStr1 = `${copyStr1.slice(0, scrambledIndex)}${copyStr1.slice(
        scrambledIndex + 1
      )}`;
    }
  }
  return true;
}
