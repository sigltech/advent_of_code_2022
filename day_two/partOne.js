import { readFileSync } from 'fs';

const data = readFileSync('./data.txt', 'utf-8')
    .split('\n\n')
    .map((group) => group.split('\n'))
    .map((group) => group.map((game) => game.split(' ')));

let total = 0;

function getScore() {

    for (let i = 0; i < data.length; i++) {
        let games = data[i];

        for (let j = 0; j < games.length - 1; j++) {

            if (games[j][0] === 'A' && games[j][1] === 'Z') {
                total += 3 + 0;
            } else if (games[j][0] === 'B' && games[j][1] === 'X') {
                total += 1 + 0;
            } else if (games[j][0] === 'C' && games[j][1] === 'Y') {
                total += 2 + 0;
            } else if (games[j][0] === 'A' && games[j][1] === 'Y') {
                total += 2 + 6;
            } else if (games[j][0] === 'B' && games[j][1] === 'Z') {
                total += 3 + 6;
            } else if (games[j][0] === 'C' && games[j][1] === 'X') {
                total += 1 + 6;
            } else if (games[j][0] === 'A' && games[j][1] === 'X') {
                total += 1 + 3;
            } else if (games[j][0] === 'B' && games[j][1] === 'Y') {
                total += 2 + 3;
            } else if (games[j][0] === 'C' && games[j][1] === 'Z') {
                total += 3 + 3;
            }
        }
    }
    return total;
}

console.log(getScore());
