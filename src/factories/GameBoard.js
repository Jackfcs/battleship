const GameBoard = () => {
  let board = [];
  let ships = [];

  for (let i = 0; i < 100; i++) {
    board.push({
      isShip: false,
      hit: false,
    });
  }

  //Place new ship on board
  const placeShip = (ship, coord) => {

    
    // for (let i = 11; i < 102; i + 10){
    //   if (coord >= i - ship.length && coord < i-1) {
    //     return
    //   }
    // }

    //Test if ship placement will be over border
    if (coord >= 11 - ship.length && coord < 10) {
      return;
    }
    if (coord >= 21 - ship.length && coord < 20) {
      return;
    }
    if (coord >= 31 - ship.length && coord < 30) {
      return;
    }
    if (coord >= 41 - ship.length && coord < 40) {
      return;
    }
    if (coord >= 51 - ship.length && coord < 50) {
      return;
    }
    if (coord >= 61 - ship.length && coord < 60) {
      return;
    }
    if (coord >= 71 - ship.length && coord < 70) {
      return;
    }
    if (coord >= 81 - ship.length && coord < 80) {
      return;
    }
    if (coord >= 91 - ship.length && coord < 90) {
      return;
    }
    if (coord >= 101 - ship.length && coord < 100) {
      return;
    }

    // test if ship placement will overlap other ships
    if (board[coord + ship.length - 1].isShip || board[coord].isShip) {
      return;
    }
    
    //Create shipArray to add to board
    let shipArray = [];
    for (let i = 0; i < ship.length; i++) {
      shipArray.push({
        isShip: true,
        hit: false,
        shipID: ship.id,
        sector: i + 1,
      });
    }
    //Add ship to board
    board.splice(coord, ship.length, ...shipArray);
    //Add ship to board memory
    ships.push(ship);
    
  };

  //Register hit on ship

  const receiveAttack = (coord) => {
    board[coord].hit = true;
    if (board[coord].shipID) {
      //if hits boat
    }
  };

  //Check for remaining ships

  const shipsRemain = () => {
    const found = board.some((obj) => obj.isShip === true && obj.hit === false);

    return found;
  };

  return {
    board,
    receiveAttack,
    placeShip,
    shipsRemain,
    ships,
  };
};

module.exports = GameBoard;
