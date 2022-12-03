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

            switch (games[j][0]) {
                case 'A':
                    if (games[j][1] === 'Z') {
                        total += 2 + 6;
                    }
                    if (games[j][1] === 'Y') {
                        total += 1 + 3;
                    }
                    if (games[j][1] === 'X') {
                        total += 3 + 0;
                    }
                    break;
                case 'B':
                    if (games[j][1] === 'Z') {
                        total += 3 + 6;
                    }
                    if (games[j][1] === 'Y') {
                        total += 2 + 3;
                    }
                    if (games[j][1] === 'X') {
                        total += 1 + 0;
                    }
                    break;
                case 'C':
                    if (games[j][1] === 'Z') {
                        total += 1 + 6;
                    }
                    if (games[j][1] === 'Y') {
                        total += 3 + 3;
                    }
                    if (games[j][1] === 'X') {
                        total += 2 + 0;
                    }
                    break;
                default:
                    break;
            }
        }
    }
    return total;
}

console.log(getScore());
