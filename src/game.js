import Ship from "./factories/Ship";
import GameBoard from "./factories/GameBoard";

export const game = () => {
  let playerBoard = GameBoard();
  let cpuBoard = GameBoard();
  const playerBoardContainer = document.getElementById("player-board");
  let cpuCells = Array.from(document.querySelectorAll(".cpu-cell"));
  let playerCells = Array.from(document.querySelectorAll(".player-cell"));

  //Place ships on players board
  const ship1 = Ship(2, 1);
  const ship2 = Ship(3, 2);
  const ship3 = Ship(4, 3);
  const ship4 = Ship(4, 4);
  const ship5 = Ship(5, 5);

  const placeShips = (board) => {
    playerCells.forEach((cell) => {
      let index = playerCells.indexOf(cell);

      cell.addEventListener("click", () => {
        if (!board.board.some((obj) => obj.shipID)){
          board.placeShip(ship1, index)
        } else if (board.board.some((obj) => obj.shipID === 1 && !board.board.some((obj) => obj.shipID === 2))){
          board.placeShip(ship2, index)
        } else if (board.board.some((obj) => obj.shipID === 2 && !board.board.some((obj) => obj.shipID === 3))){
          board.placeShip(ship3, index)
        } else if (board.board.some((obj) => obj.shipID === 3 && !board.board.some((obj) => obj.shipID === 4))){
          board.placeShip(ship4, index)
        } else if (board.board.some((obj) => obj.shipID === 4 && !board.board.some((obj) => obj.shipID === 5))){
          board.placeShip(ship5, index)
        }
        //board.placeShip(ship, index);
        let answer = board.board.some((obj) => obj.shipID === 1)
        console.log(answer)
        updateBoard(board, index);
        console.log('hi')
      });
    });
  };

  placeShips(playerBoard)

  const updateBoard = (board, index) => {
    for (let i = 0; i < 5; i++) {
      if (board.board[index + i].isShip) {
        playerCells[index + i].classList.remove("cell-not-hit");
        playerCells[index + i].classList.add("cell-ship");
      }
    }
  };

  
  
  

  //Adds click event on each enemy cell and registers hit
  const hitBoard = (board, boardArray) => {
    cpuCells.forEach((cell) => {
      let index = cpuCells.indexOf(cell);
      cell.addEventListener("click", () => {
        board.receiveAttack(index);
        if (boardArray[index].hit) {
          cell.classList.remove("cell-not-hit");
          cell.classList.add("cell-hit");
        }
      });
    });
  };
  hitBoard(cpuBoard, cpuBoard.board);
};
