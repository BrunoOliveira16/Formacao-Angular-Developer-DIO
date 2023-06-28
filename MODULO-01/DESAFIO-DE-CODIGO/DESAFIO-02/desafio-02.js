const { gets, print } = require('./auxiliar');

let line = gets().split(" ");
let x = parseFloat(line[0]);
let y = parseFloat(line[1]);

if(x === 0 && y === 0) {
    print("Origem");
} else if (x === 0 && y !== 0) {
    print("Eixo Y");
} else if (x !== 0 && y === 0) {
    print("Eixo X");
} else if (x > 0 && y > 0) {
    print("Q1");
} else if (x < 0 && y > 0) {
    print("Q2");
} else if (x < 0 && y < 0) {
    print("Q3");
} else if (x > 0 && y < 0) {
    print("Q4");
}