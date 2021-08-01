const Player = (name) => {
    let turns = []

    const randomMove = (board) => {
        let num = Math.floor(Math.random() * 10);
        return num
      
    };

    return {
        name, turns, randomMove
    }
}

module.exports = Player