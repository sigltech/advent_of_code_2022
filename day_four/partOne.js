import { readFileSync } from 'fs';

const solvePartOne = () => {
    const data = readFileSync('./data.txt', 'utf-8')
        .trim()
        .split('\n')
        .map(item => item.split(','))
        .map(line => line.map(item => item.split('-')));

    let total = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j += 2) {
            const element = data[i]
            if ((parseInt(element[j][0]) >= parseInt(element[j + 1][0])) && (parseInt(element[j][1]) <= parseInt(element[j + 1][1]))) {
                total++;
            } else if ((parseInt(element[j + 1][0]) >= parseInt(element[j][0])) && (parseInt(element[j + 1][1]) <= parseInt(element[j][1]))) {
                total++;
            }

        }

    }

    return total;

}


console.log(solvePartOne());

