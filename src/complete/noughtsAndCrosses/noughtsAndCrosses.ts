export default function noughtsAndCrosses(board: number[][]): number {
  let rows = board;
  let cols = board.map((cell, i) => [board[0][i], board[1][i], board[2][i]]);
  let diags = [
    [board[0][0], board[1][1], board[2][2]],
    [board[0][2], board[1][1], board[2][0]],
  ];
  const allSolutions = rows.concat(cols, diags);

  let incomplete = false;
  for (const sol of allSolutions) {
    const sum = sol.reduce((a, b) => a + b);
    if (sum % 3 === 0 && sol.indexOf(0) === -1) {
      return sol[0];
    } else if (sol.indexOf(0) !== -1) {
      incomplete = true;
    }
  }

  return incomplete ? -1 : 0;
}
