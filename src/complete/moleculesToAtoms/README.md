# Molecules to Atoms

**5kyu**
Taken from codewars, [see here for full instructions](https://www.codewars.com/kata/52f831fa9d332c6591000511).

**Brief:**
Write a function that takes a molecule and returns its constituent atoms, and their frequency, as an object.

**Tip:**
* Molecules can contain any type of brackets `()`, `[]`, or `{}`
* These brackets can be nested

## Examples

```
var water = 'H2O';
parseMolecule(water); // return {H: 2, O: 1}

var magnesiumHydroxide = 'Mg(OH)2';
parseMolecule(magnesiumHydroxide); // return {Mg: 1, O: 2, H: 2}

var fremySalt = 'K4[ON(SO3)2]2';
parseMolecule(fremySalt); // return {K: 4, O: 14, N: 2, S: 4}
```
