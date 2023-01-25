interface Molecule {
  [element : string] : number
}
function parseMolecule(formula : string): Molecule{
  const molecule : Molecule = {}

  for (let i = 0; i < formula.length; i++){
    if (isUppercase(formula[i])){
      if (isLowercase(formula[i + 1]) && i < formula.length - 1){
        if (isNumber(formula[i + 2]) && i < formula.length - 2){
          const multiplier = isNumber(formula[i + 3])? parseInt(`${formula[i + 2]}${formula[i + 3]}`) : parseInt(formula[i + 2])
          molecule[`${formula[i]}${formula[i + 1]}`] ? molecule[`${formula[i]}${formula[i + 1]}`] += multiplier : molecule[`${formula[i]}${formula[i + 1]}`] = multiplier
        } else {
          molecule[`${formula[i]}${formula[i + 1]}`] ? molecule[`${formula[i]}${formula[i + 1]}`]++ : molecule[`${formula[i]}${formula[i + 1]}`] = 1
        }
      } else {
        if (isNumber(formula[i + 1]) && i < formula.length - 1){
          const multiplier = isNumber(formula[i + 2]) ? parseInt(`${formula[i + 1]}${formula[i + 2]}`) : parseInt(formula[i + 1])
          molecule[formula[i]] ? molecule[formula[i]] += multiplier : molecule[formula[i]] = multiplier
        } else {
          molecule[formula[i]] ? molecule[formula[i]]++ : molecule[formula[i]] = 1
        }
      }
    } else if (formula[i] === '(' || formula[i] === '[' || formula[i] === '{'){
        const closingBracket = findClosingBracket(formula[i])
        const closingIndex = formula.lastIndexOf(closingBracket)
        const subMolecule = parseMolecule(formula.slice(i + 1, closingIndex))

        if (isNumber(formula[closingIndex + 1])){
          const multiplier = isNumber(formula[closingIndex + 2]) ? parseInt(`${formula[closingIndex + 1]}${formula[closingIndex + 2]}`) : parseInt(formula[closingIndex + 1])

          for (const element in subMolecule){
            molecule[element] ? molecule[element] += subMolecule[element] * multiplier : molecule[element] = subMolecule[element] * multiplier
          }

          i = closingIndex
        } else {
          for (const element in subMolecule){
            molecule[element] ? molecule[element] += subMolecule[element] : molecule[element] = subMolecule[element]
          }

          i = closingIndex - 1
        }
    }
  }
  return molecule
}

export default parseMolecule

console.log(parseMolecule('MgH'))
console.log(parseMolecule('Mg2H3MgH4'))
console.log(parseMolecule("Mg(OH)22"))
console.log(parseMolecule('K4[ON(SO3)2]2'))


function isUppercase(char : string) : boolean{
  return /[A-Z]/.test(char)
}

function isLowercase(char : string) : boolean{
  return /[a-z]/.test(char)
}

function isNumber(char : string) : boolean{
  return /[1-9]/.test(char)
}

type ClosingBracket = ')' | '}' | ']'
function findClosingBracket(openingBracket : string): ClosingBracket {
  if (openingBracket === '('){
    return ')'
  } else if (openingBracket === '{'){
    return '}'
  } else {
    return ']'
  }
}