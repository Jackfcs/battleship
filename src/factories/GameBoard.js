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

    //Create shipArray to add to board
    let shipArray = [];
    for (let i = 0; i < ship.sectors.length; i++) {
      shipArray.push({
        isShip: true,
        hit: false,
        shipID: ship.id,
        sector: i + 1
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
    if(board[coord].shipID){
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
