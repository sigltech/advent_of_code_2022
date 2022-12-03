import { readFileSync } from 'fs';

const data = readFileSync('./data.txt', 'utf-8')
    .split('\n\n')
    .map((group) => group.split('\n'))
    .map((group) => group.map((game) => game.split(' ')));


const getCalories = (data) => {
    let totals = [];

    for (let i = 0; i < data.length; i++) {
        let calories = data[i];
        let total = 0;
        for (let j = 0; j < calories.length; j++) {
            total += parseInt(calories[j]);
        }
        totals.push(total);
    }
    totals.sort((a, b) => b - a);
    let totalCalories = totals[0] + totals[1] + totals[2];
    return `totalCalories for top 3 elves: ${totalCalories} calories`;
}
console.log(getCalories(data));
