import Ship from "./factories/Ship";
import GameBoard from "./factories/GameBoard";

export const game = () => {
  let playerBoard = GameBoard();
  let cpuBoard = GameBoard();
  console.log(playerBoard.board);
  const playerBoardContainer = document.getElementById("player-board");
  let cpuCells = Array.from(document.querySelectorAll(".cpu-cell"));
  let playerCells = Array.from(document.querySelectorAll(".player-cell"));

  //Place ships on players board
  const ship1 = Ship(2, 1)
  const ship2 = Ship(3, 2)
  const ship3 = Ship(4, 3)
  const ship4 = Ship(4, 4)
  const ship5 = Ship(5, 5)

  

  const placeShip = (board, ship) => {
    playerCells.forEach((cell) => {
      let index = playerCells.indexOf(cell)
      
      cell.addEventListener("click", () => {
        board.placeShip(ship, index)
        // if (board.board[index].isShip){
        //   cell.classList.remove("cell-not-hit");
        //   cell.classList.add("cell-ship")
        // }
        
        console.log(board.board)
      })
      updateBoard(board, index)
    } )
  }


  const updateBoard = (board, index) => {
      playerCells.forEach((cell) => {
        if (board.board[index].isShip){
        cell.classList.remove("cell-not-hit");
        cell.classList.add("cell-ship")
      }  
      })
        
  }

  placeShip(playerBoard, ship1)

  //Adds click event on each enemy cell and registers hit
  const hitBoard = (board, boardArray) => {
    cpuCells.forEach((cell) => {
      let index = cpuCells.indexOf(cell)
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
