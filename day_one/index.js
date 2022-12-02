import { dataString } from "./data.js";

const input = dataString.split('\n\n');


for (let i = 0; i < input.length; i++) {
    input[i] = input[i].split('\n');
    for (let j = 0; j < input[i].length; j++) {
        input[i][j] = parseInt(input[i][j]);
    }
}

let start = 0;
let end = input.length - 1;


let firstTotal = 0;
let secondTotal = 0;
let thirdTotal = 0;
let firstIndex = 0;
let secondIndex = 0;
let thirdIndex = 0;

while (start <= end) {

}

console.log(`The elf with the most calories is ${firstIndex} with ${firstTotal} calories.`);
console.log(`The elf with the second most calories is ${secondIndex} with ${secondTotal} calories.`);
console.log(`The elf with the third most calories is ${thirdIndex} with ${thirdTotal} calories.`);

console.log(`The total calories for the top three elves is ${firstTotal + secondTotal + thirdTotal}.`);









for (let i = 0; i < input.length; i++) {
    let total = 0;
    for (let j = 0; j < input[i].length; j++) {
        input[i][j] = parseInt(input[i][j]);
        total += input[i][j];
    }
    if (total > firstTotal) {
        console.log(total);
        firstTotal = total;
        firstIndex = i - 1;
    } else if (total > secondTotal) {
        // console.log(total);
        secondTotal = total;
        secondIndex = i - 1;
    } else if (total > thirdTotal) {
        // console.log(total);
        thirdTotal = total;
        thirdIndex = i - 1;
    }

}



console.log(`The elf with the most calories is ${firstIndex} with ${firstTotal} calories.`);
console.log(`The elf with the second most calories is ${secondIndex} with ${secondTotal} calories.`);
console.log(`The elf with the third most calories is ${thirdIndex} with ${thirdTotal} calories.`);

console.log(`The total calories for the top three elves is ${firstTotal + secondTotal + thirdTotal}.`);
