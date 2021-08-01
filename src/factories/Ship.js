const Ship = (length, id) => {

    //Create sectors matching length
    let sectors = []
    sectors.length = length
    sectors.fill(false, 0)


    //Register hit on sector
    const hit = (pos) => {
        if(pos > sectors.length){
            return
        }
        sectors[pos - 1] = true
    }

    // Check if ship has been sunk
    const isSunk = () => {
         let checkSunk = sectors.every(elem => elem === true);
         if (checkSunk === true){
             return true
         } else {
             return false
         }
    }

   

    return {
        length, id, isSunk, sectors, hit
    }
}

let ship1 = Ship(1)

module.exports = Ship
