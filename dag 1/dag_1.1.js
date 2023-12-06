const fs = require('fs'); 
const readline = require('readline');

const filePath = '../inputFiles/input1.txt'


const r = readline.createInterface({
    input: fs.createReadStream(filePath),
});

let total = 0

r.on('line', line =>{
     
    total += findnumbers(line)
    
    console.log(total)
}) 

function findnumbers(line) {
    let numbersArray = []
    for (let index = 0; index < line.length; index++) {
        let character = line.charAt(index)
        if (!isNaN(character)) {
        numbersArray.push(character)
        }
    }
    let sum = numbersArray[0].toString() + numbersArray[numbersArray.length - 1].toString()
    return parseInt(sum)
}

