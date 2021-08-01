const GameBoard = require('../factories/GameBoard')
const Ship = require('../factories/Ship')

let testShip
let testBoard
beforeAll(() => {
    testShip = Ship(3)
    testBoard = GameBoard()
})


test("GameBoard has correct length", () => {

    expect(testBoard.board.length).toBe(100);
});

test("GameBoard can record a hit", () => {

    testBoard.receiveAttack(2)

    expect(testBoard.board[2].hit).toBe(true);
});

test("GameBoard can receive a ship at the given position", () => {

    testBoard.placeShip(testShip, 2)

    expect(testBoard.board[2].isShip).toBe(true);
    expect(testBoard.board[3].isShip).toBe(true);
    expect(testBoard.board[4].isShip).toBe(true);
});

test.todo("Gameboard registers on ship sector as well as board");

test("Gameboard can report when all ships are sunk", () => {
    testBoard.placeShip(testShip, 2)
    testBoard.receiveAttack(2)
    testBoard.receiveAttack(3)
    expect(testBoard.shipsRemain()).toBe(true)
    testBoard.receiveAttack(4)
    expect(testBoard.shipsRemain()).toBe(false)

});

test.todo("Gameboard prevents overlapping ships");

test.todo("Ships can be placed in a vertical position");

test.todo("Prevents positioning ships that clip over perimeter");
