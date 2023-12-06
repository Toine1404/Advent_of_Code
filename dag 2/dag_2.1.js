const fs = require('fs'); 
const readline = require('readline');

const filePath = '../inputFiles/input2.txt'


const r = readline.createInterface({
    input: fs.createReadStream(filePath),
});

let total = 0

r.on('line', line =>{
     
    total += gamescounter(line)
    
    console.log(total)
}) 

// let result = 0
// result = gamescounter("Game 3: 7 red, 7 blue, 9 green; 15 green, 4 red, 8 blue; 3 green, 12 blue, 6 red")
//console.log(result)

function gamescounter(line){
    let games = line.split(/[:;]/)
    // getting the number of the game
    let number = games[0].split(" ")[1]

    let isGameValid = makeandCheckgames(games)
    if (isGameValid) {
        return (parseInt(number))
    }
    else {
        return (0)
    }
}


function makeandCheckgames(games) {
    // starting at one since 0 is not relevant for the game itself
    for (let index = 1; index < games.length; index++) {
        let values = games[index].split(/[, ]/)
        for (let i = 0; i < values.length/3; i++) {
            
            let number = values[1 + i*3]
            let color = values[2 + i*3]
            let validGame = checkgame(number, color)
            if (!validGame) {
                return(false)
            }
        }
    }
    return(true)
}

function checkgame(number, color) {
    switch (color) {
        case "green":
            return (parseInt(number) <= 13)
        case "blue":
            return (parseInt(number) <= 14)
        case "red":
            return (parseInt(number) <= 12)
        default:
            console.log("if u see this u fucked up")
            return(false)
    }
}