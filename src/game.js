import Ship from "./factories/Ship";
import GameBoard from "./factories/GameBoard";

export const game = () => {

  let playerBoard = GameBoard();
  console.log(playerBoard.board);
  playerBoard.receiveAttack(2);
  playerBoard.receiveAttack(6);
  const playerBoardContainer = document.getElementById("player-board");


  // Add board and cells to dom
  const addToDom = (array) => {
    //clearHTML(playerBoardContainer)
    array.map((item) => {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      if (item.hit) {
        cell.classList.add("cell-hit");
      } else {
        cell.classList.add("cell-not-hit");
      }
      playerBoardContainer.appendChild(cell);
    });
  };

  addToDom(playerBoard.board);

  //Recognise click in cells

  let cells = document.querySelectorAll(".cell");

  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", () => {
      console.log(i);
      playerBoard.receiveAttack(i);
      addToDom(playerBoard.board);
      console.log(playerBoard.board[i]);
    });
  }
};
