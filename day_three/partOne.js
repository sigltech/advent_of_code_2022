import { readFileSync } from 'fs';

const data = readFileSync('./data.txt', 'utf-8')
    .split('\n')
    .map((group) => {
        let length = Math.floor(group.length / 2);
        let first = group.slice(0, length);
        let second = group.slice(length, group.length);
        return [first, second];
    })
    .map((group) => {
        let first = group[0].split('');
        let second = group[1].split('');
        let matches = first.filter((value) => second.includes(value));
        return matches;
    })
    .map((group) => {
        return group
            .filter((value, index, self) => self.indexOf(value) === index)
    });

let letterValues = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5,
    'f': 6,
    'g': 7,
    'h': 8,
    'i': 9,
    'j': 10,
    'k': 11,
    'l': 12,
    'm': 13,
    'n': 14,
    'o': 15,
    'p': 16,
    'q': 17,
    'r': 18,
    's': 19,
    't': 20,
    'u': 21,
    'v': 22,
    'w': 23,
    'x': 24,
    'y': 25,
    'z': 26,
    'A': 27,
    'B': 28,
    'C': 29,
    'D': 30,
    'E': 31,
    'F': 32,
    'G': 33,
    'H': 34,
    'I': 35,
    'J': 36,
    'K': 37,
    'L': 38,
    'M': 39,
    'N': 40,
    'O': 41,
    'P': 42,
    'Q': 43,
    'R': 44,
    'S': 45,
    'T': 46,
    'U': 47,
    'V': 48,
    'W': 49,
    'X': 50,
    'Y': 51,
    'Z': 52
}

let sum = 0;
for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
        sum += letterValues[data[i][j]];
    }
}
console.log(sum);
// console.log(data);


// console.log(getTotal(data));
