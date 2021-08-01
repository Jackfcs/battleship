const Ship = require('../factories/Ship')

let ship
beforeAll(() => {
    ship = Ship(2, 1)
})

test("Ship returns object", () => {
    expect(Ship(2) && typeof Ship(2) === 'object').toBe(true);
})

test("Ship returns sectors array with correct length", () => {
    expect(ship.sectors.length).toBe(2);
})

test("Ship returns sectors array with values set to false", () => {
    expect(ship.sectors).toEqual([false, false]);
})

test("Ship sectors can be hit", () => {
    ship.hit(1)
    expect(ship.sectors).toEqual([true, false]);
})

test("ship.isSunk() will return false after creation", () => {
    expect(ship.isSunk()).toBe(false);
})

test("ship.isSunk() will return true when all sectors are hit", () => {
    ship.hit(1)
    ship.hit(2)
    expect(ship.isSunk()).toBe(true);
})


