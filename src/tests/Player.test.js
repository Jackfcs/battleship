const Ship = require('../factories/Ship')
const GameBoard = require('../factories/GameBoard')
const Player = require('../factories/Player')

let testShip
let testBoard
let testPlayer
beforeAll(() => {
    testShip = Ship(2)
    testBoard = GameBoard()
    testPlayer = Player('Test Player')
})

test("Player returns name", () => {
    expect(Player('Player 1')).toMatchObject({name: 'Player 1'});
})


test("randomMove generates a random position to attack", () => {
    testBoard.receiveAttack(testPlayer.randomMove())

    expect(testBoard.board).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          isShip: false,
          hit: true,
        }),
      ])
    );   
})
