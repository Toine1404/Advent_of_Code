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
    let filteredLine = convertString(line)
    let numbersArray = []
    for (let index = 0; index < filteredLine.length; index++) {
        let character = filteredLine.charAt(index)
        if (!isNaN(character)) {
        numbersArray.push(character)
        }
    }
    let sum = numbersArray[0].toString() + numbersArray[numbersArray.length - 1].toString()
    return parseInt(sum)
}

function convertString(line) {

    //special cases first
    line = line.replace(/twone/g, "twoone")
    line = line.replace(/sevenine/g, "sevennine")
    line = line.replace(/oneight/g, "oneeight")
    line = line.replace(/threeight/g, "threeeight")
    line = line.replace(/fiveight/g, "fiveeight")
    line = line.replace(/nineight/g, "nineeight")
    line = line.replace(/eighthree/g, "eightthree")
    line = line.replace(/eightwo/g, "eighttwo")

    line = line.replace(/one/g, "1")
    line = line.replace(/two/g, "2")
    line = line.replace(/three/g, "3")
    line = line.replace(/four/g, "4")
    line = line.replace(/five/g, "5")
    line = line.replace(/six/g, "6")
    line = line.replace(/seven/g, "7")
    line = line.replace(/eight/g, "8")
    line = line.replace(/nine/g, "9")
return line
}

