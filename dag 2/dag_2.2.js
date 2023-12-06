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



function gamescounter(line){
    let games = line.split(/[:;]/)

    let power = makeandCheckgames(games)

    return (power)
}


function makeandCheckgames(games) {
    let red = 0
    let green = 0 
    let blue = 0
    // starting at one since 0 is not relevant for the game itself
    for (let index = 1; index < games.length; index++) {
        let values = games[index].split(/[, ]/)
        for (let i = 0; i < values.length/3; i++) {
            
            let number = parseInt(values[1 + i*3])
            let color = values[2 + i*3]
            

            switch (color) {
                case "green":
                if (number > green) {
                    green = number
                }
                break;
                case "blue":
                    if (number > blue) {
                        blue = number
                    }
                    break;
                case "red":
                    if (number > red) {
                        red = number
                    }
                    break;
                default:
                    console.log("if u see this u fucked up")
                    break;
            }
        }
    }
    return(red*green*blue)
}
