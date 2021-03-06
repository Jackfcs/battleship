const { expect } = require('@jest/globals')
const GameBoard = require('../factories/GameBoard')
const Ship = require('../factories/Ship')

let testShip
let testShip1
let testBoard
let horizontal = true
beforeAll(() => {
    testShip = Ship(3)
    testShip1 = Ship(4)
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

    testBoard.placeShip(testShip, 2, horizontal)

    expect(testBoard.board[2].isShip).toBe(true);
    expect(testBoard.board[3].isShip).toBe(true);
    expect(testBoard.board[4].isShip).toBe(true);
});

test("Gameboard can report when all ships are sunk", () => {
    testBoard.placeShip(testShip, 2, horizontal)
    testBoard.receiveAttack(2)
    testBoard.receiveAttack(3)
    expect(testBoard.shipsRemain()).toBe(true)
    testBoard.receiveAttack(4)
    expect(testBoard.shipsRemain()).toBe(false)

});

test("Gameboard prevents overlapping ships", () => {

    testBoard.placeShip(testShip, 2, horizontal)

    expect(() => testBoard.placeShip(testShip1, 13, horinzontal).toBeUndefined());
});

test("Prevents positioning ships that clip over perimeter", () => {
    expect(() => testBoard.placeShip(testShip1, 8).toBeUndefined());
});

test("Ships can be placed in a vertical position", () => {
    testBoard.placeShip(testShip, 12, !horizontal)
    expect(testBoard.board[22].isShip).toBe(true);

});


