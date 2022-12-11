import { readFileSync } from 'fs';

const data = readFileSync('./data.txt', 'utf-8')
    .trim();

let index = 0;
for (let i = 0; i < data.length; i++) {
    const set = new Set();
    set.add(data[i]);
    set.add(data[i + 1]);
    set.add(data[i + 2]);
    set.add(data[i + 3]);
    if (set.size === 4) {
        index = i + 3 + 1;
        break;
    }
}

console.log(index);
