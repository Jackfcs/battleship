import Ship from "./factories/Ship";
import GameBoard from "./factories/GameBoard";
import Player from "./factories/Player";

export const game = () => {
  let playerBoard = GameBoard();
  let cpuBoard = GameBoard();
  let player = Player("player");
  let cpu = Player("CPU");
  const playerBoardContainer = document.getElementById("player-board");
  const cpuBoardContainer = document.getElementById("cpu-board");
  let cpuCells = Array.from(document.querySelectorAll(".cpu-cell"));
  let playerCells = Array.from(document.querySelectorAll(".player-cell"));
  const shipBtn1 = document.getElementById("ship1");
  const shipBtn2 = document.getElementById("ship2");
  const shipBtn3 = document.getElementById("ship3");
  const shipBtn4 = document.getElementById("ship4");
  const shipBtn5 = document.getElementById("ship5");
  const gameInfo = document.getElementById("game-info");
  const ship1 = Ship(2, 1);
  const ship2 = Ship(3, 2);
  const ship3 = Ship(4, 3);
  const ship4 = Ship(4, 4);
  const ship5 = Ship(5, 5);

  //Place ships on players board
  const placeShips = (board) => {
    gameInfo.textContent = "Place your first ship";
    cpuBoardContainer.style.display = "none";
    playerCells.forEach((cell) => {
      let index = playerCells.indexOf(cell);

      cell.addEventListener("click", () => {
        if (!board.board.some((obj) => obj.shipID)) {
          board.placeShip(ship1, index);
          shipBtn1.style.display = "none";
          gameInfo.textContent = "Place your second ship";
        } else if (
          board.board.some(
            (obj) =>
              obj.shipID === 1 && !board.board.some((obj) => obj.shipID === 2)
          )
        ) {
          board.placeShip(ship2, index);
          gameInfo.textContent = "Place your third ship";
          shipBtn2.style.display = "none";
        } else if (
          board.board.some(
            (obj) =>
              obj.shipID === 2 && !board.board.some((obj) => obj.shipID === 3)
          )
        ) {
          board.placeShip(ship3, index);
          shipBtn3.style.display = "none";
          gameInfo.textContent = "Place your fourth ship";
        } else if (
          board.board.some(
            (obj) =>
              obj.shipID === 3 && !board.board.some((obj) => obj.shipID === 4)
          )
        ) {
          board.placeShip(ship4, index);
          shipBtn4.style.display = "none";
          gameInfo.textContent = "Place your final ship";
        } else if (
          board.board.some(
            (obj) =>
              obj.shipID === 4 && !board.board.some((obj) => obj.shipID === 5)
          )
        ) {
          board.placeShip(ship5, index);
          shipBtn5.style.display = "none";
          gameInfo.textContent = "Attack Enemy Board";
          cpuBoardContainer.style.display = "grid";
          cpuPlace();
          shipPlacementPhase = false;
          console.log(shipPlacementPhase);
        }
        updateBoard(board, playerCells);
      });
    });
  };

  placeShips(playerBoard);

  const updateBoard = (board, cells) => {
    for (let i = 0; i < 100; i++) {
      if (
        board.board[i].isShip &&
        !board.board[i].hit &&
        board === playerBoard
      ) {
        cells[i].classList.remove("cell-not-hit");
        cells[i].classList.add("cell-ship");
      } else if (board.board[i].isShip && board.board[i].hit) {
        cells[i].classList.remove("cell-not-hit");
        cells[i].classList.add("cell-ship-hit");
      } else if (board.board[i].hit && !board.board[i].isShip) {
        cells[i].classList.remove("cell-not-hit");
        cells[i].classList.add("cell-hit");
      }
    }
  };

  //Adds click event on each enemy cell and registers hit
  const hitBoard = (board) => {
    cpuCells.forEach((cell) => {
      let index = cpuCells.indexOf(cell);
      cell.addEventListener("click", () => {
        board.receiveAttack(index);
        updateBoard(cpuBoard, cpuCells);
        //turnCount++;
        
        cpuAttack();
      });
    });
    
  };

  const cpuPlace = () => {
    cpuBoard.placeShip(ship1, cpu.randomMove());
    cpuBoard.placeShip(ship2, cpu.randomMove());
    cpuBoard.placeShip(ship3, cpu.randomMove());
    cpuBoard.placeShip(ship4, cpu.randomMove());
    cpuBoard.placeShip(ship5, cpu.randomMove());
  };

  let shipPlacementPhase = true;

  let turnCount = 0;

  const cpuAttack = () => {
    let index = cpu.randomMove();
    playerBoard.receiveAttack(cpu.randomMove(index));
    updateBoard(playerBoard, playerCells);
    turnCount++;
  };

  hitBoard(cpuBoard);


  // const declareWinner = () => {
  //   if (playerBoard.board.some((obj) => obj.isShip && !playerBoard.board.some((obj) => obj.hit === false))) {
  //     alert("player wins")
  //   }
  // }
  //console.log(playerBoard.board.some((obj) => obj.isShip))
};
