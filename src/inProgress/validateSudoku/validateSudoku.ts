type Board = number[][];

export default function validSolution(board: Board): boolean {
  let columns: number[][] = [...Array(9)];
  let squares: number[][] = [...Array(9)];

  for (let int in board) {
    const i = parseInt(int);
    const row = board[i];

    //return false if there any zeros on the board
    if (row.includes(0)) {
      return false;
    }

    //return false if number is repeated within the row
    if (!numbersAreUnique(row)) {
      console.log(`numbers aren't unique`);
      return false;
    }

    //Add numbers to column arrays
    if (i === 0) {
      columns = row.map((num) => [num]);
      squares = [row.slice(0, 3), row.slice(3, 6), row.slice(6, 9)];
    } else {
      row.map((num, i) => (columns[i] = [...columns[i], num]));
      const yPosSquare = Math.floor(i / 3);
      //TODO: Find x position of square
    }
  }

  //return false if number is repeated within column
  for (let col of columns) {
    if (!numbersAreUnique(col)) {
      return false;
    }
  }

  //return false if number is repeated within grid square
  for (let sqr of squares) {
    if (!numbersAreUnique(sqr)) {
      return false;
    }
  }

  return true;
}

//TODO: Write this function
function numbersAreUnique(arr: number[]): boolean {
  return true;
}

validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
]);
