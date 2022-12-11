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
    set.add(data[i + 4]);
    set.add(data[i + 5]);
    set.add(data[i + 6]);
    set.add(data[i + 7]);
    set.add(data[i + 8]);
    set.add(data[i + 9]);
    set.add(data[i + 10]);
    set.add(data[i + 11]);
    set.add(data[i + 12]);
    set.add(data[i + 13]);

    if (set.size === 14) {
        index = i + 14;
        break;
    }
}

console.log(index);
