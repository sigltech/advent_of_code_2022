import { readFileSync } from 'fs';
const data = readFileSync('./data.txt', 'utf-8')
    .trim()
    .split('\n')
    .map(item => item.split(','))
    .map(line => line.map(item => item.split('-')));

const solvePartTwo = () => {

    let total = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j += 2) {
            const element = data[i]

            // first range
            const a = parseInt(element[j][0]);
            const b = parseInt(element[j][1]);

            // second range
            const x = parseInt(element[j + 1][0]);
            const y = parseInt(element[j + 1][1]);

            if (a <= y && a >= x) {
                total++;
            } else if (b >= x && b <= y) {
                total++;
            } else if ((x >= a && x <= b)) {
                total++;
            } else if ((y <= b && y >= a)) {
                total++;
            }
        }
    }
    return total;
}


console.log(solvePartTwo());

