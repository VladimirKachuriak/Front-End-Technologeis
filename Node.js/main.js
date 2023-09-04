const task = require('./task');

console.log(new Date(1995, 11, 17, 3, 24, 0));
console.log(task.secondsToDate(0));

console.log(task.toBase2Converter(5));

console.log(task.substringOccurrencesCounter('t','test it'));

console.log(task.repeatingLitters('Hello world'));

const f2 = task.redundant("pear");
console.log(f2());

console.log(task.towerHanoi(4));

const matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const matrix2 = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
];

const resultMatrix = task.matrixMultiplication(matrix1, matrix2);
console.log("Resulting Matrix:");
for (const row of resultMatrix) {
    console.log(row);
}


console.log(task.gather("a")("b")("c").order(0)(1)(2).get());
console.log(task.gather("a")("b")("c").order(2)(1)(0).get());
console.log(task.gather("e")("l")("o")("l")("!")("h").order(5)(0)(1)(3)(2)(4).get());

