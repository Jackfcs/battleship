const Player = (name) => {
  let turns = [];

  const randomPlace = (board, ship) => {
    let num = Math.floor(Math.random() * 100);

    //Prevent ships overlapping
    while (board[num + ship.length - 1].isShip || board[num].isShip) {
      num = Math.floor(Math.random() * 100);
    }

    //prevent ships being placed over border
    for (let i = 1; i < 10; i++) {
      while (num >= i * 10 + 1 - ship.length && num < i * 10) {
        num = num - 1;
      }
    }
    return num;
  };

  const randomMove = (array) => {
    let randomSelection = array[Math.floor(Math.random() * array.length)];
    const index = array.indexOf(randomSelection);
    array.splice(index, 1);

    //let randomSelection = Math.floor(Math.random() * 20);

    return randomSelection;
  };

  return {
    name,
    turns,
    randomMove,
    randomPlace,
  };
};

module.exports = Player;
