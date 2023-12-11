const fs = require('fs'); 
const readline = require('readline');

const filePath = '../inputFiles/input3.txt'


const r = readline.createInterface({
    input: fs.createReadStream(filePath),
});

let id = 0

let total = 0


let rows = 10;
let cols = 10;
let array2D = new Array(rows);

for (let i = 0; i < rows; i++) {
  array2D[i] = new Array(cols);
}

let rownumber  = 0

r.on('line', line =>{
     
    puzzlesolver(line, rownumber, array2D, id)
    

    for (let t = 0; index < line.t; t++) {
        console.log(array2D[row][index])
    }
    rownumber++
}) 


function puzzlesolver(line, rownumber, array2D, id) {
    for (let index = 0; index < line.length; index++) {

        let number = ""
        let numberlength = 0
        
        while (line[index + numberlength] !== "." && !isNaN(line[index+numberlength]) && index+numberlength < line.length) {
            number += (line[index + numberlength]).toString()
            numberlength++
        }
        parseInt(number)

        for (let i = 0; i < numberlength; i++) {
            let numberobject = new Number(number,id)
            array2D[rownumber][index + i] = numberobject
        }
        id++
        index += numberlength
    }

}


class Number {
    constructor(value, id) {
        this.value = value;
        this.id = id;
    }
}




