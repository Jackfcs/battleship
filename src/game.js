import Ship from "./factories/Ship";
import GameBoard from "./factories/GameBoard";

export const game = () => {
  let playerBoard = GameBoard();
  let cpuBoard = GameBoard()
  console.log(playerBoard.board);
  playerBoard.receiveAttack(2);
  playerBoard.receiveAttack(6);
  const playerBoardContainer = document.getElementById("player-board");

const fillBoard = (cell, board, boardArray) => {
  let playersCells = Array.from(document.querySelectorAll(cell));

  playersCells.forEach((cell) => {
    if (boardArray[playersCells.indexOf(cell)].hit) {
        cell.classList.remove("cell-not-hit");
        cell.classList.add("cell-hit");
      }
    cell.addEventListener("click", () => {
      board.receiveAttack(playersCells.indexOf(cell));
      if (boardArray[playersCells.indexOf(cell)].hit) {
        cell.classList.remove("cell-not-hit");
        cell.classList.add("cell-hit");
      }
    });
  });
}

fillBoard(".player-cell", playerBoard, playerBoard.board)
fillBoard(".cpu-cell", cpuBoard, cpuBoard.board)



};
