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

    
    

    const randomMove = (board) => {
        
        let num = Math.floor(Math.random() * 100);
        console.log(board)
        // if (board[num].hit) {
        //     num = Math.floor(Math.random() * 100);
        // }
        return num
      
    };

    return {
        name, turns, randomMove, randomPlace
    }
}

module.exports = Player