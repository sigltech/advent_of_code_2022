import { readFileSync } from 'fs';

const data = readFileSync('./data.txt', 'utf-8')
    .split('\n\n')
    .map((group) => group.split('\n'))
    .map((group) => group.map((game) => game.split(' ')));


const getCalories = (data) => {
    let totals = [];
    let topElfTotal = 0;

    for (let i = 0; i < data.length; i++) {
        let calories = data[i];
        let total = 0;
        for (let j = 0; j < calories.length; j++) {
            total += parseInt(calories[j]);
        }
        totals.push(total);
    }
    totals.sort((a, b) => b - a);
    topElfTotal = totals[0];

    return `totalCalories for top elf: ${topElfTotal} calories`;
}
console.log(getCalories(data));
