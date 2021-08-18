const Player = (name) => {
    let turns = []

    const randomPlace = (board, ship) => {
        
        let num = Math.floor(Math.random() * 20);
        if (num >= 11 - ship.length && num < 10) {
            num = Math.floor(Math.random() * 20);
            
          }
          console.log(num)
        

        return num
      
    };

    
    

    const randomMove = (array) => {

        let randomSelection = array[Math.floor(Math.random() * array.length)];
        const index = array.indexOf(randomSelection)
        array.splice(index, 1)
        return randomSelection
      
    };

    return {
        name, turns, randomMove, randomPlace
    }
}

module.exports = Player