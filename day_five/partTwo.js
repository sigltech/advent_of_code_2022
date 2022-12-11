import { readFileSync } from 'fs';

const data = readFileSync('./data.txt', 'utf-8')
    .replace(/\r/g, "")
    .trimEnd();

const [rawStacks, rawMoves] = data.split("\n\n").map(x => x.split("\n"))


const parsed =
    rawStacks
        .map((line) =>
            [...line].filter((val, i) => i % 4 === 1));

const indexes = parsed.pop();

const stacks = {};

for (const line of parsed) {
    for (let i = 0; i < line.length; i++) {
        if (line[i] !== " ") {
            if (!stacks[indexes[i]]) {
                stacks[indexes[i]] = [];
            }
            stacks[indexes[i]].unshift(line[i]);
        }

    }
}
const moves = [];
for (const move of rawMoves) {
    // console.log(move);
    const match = /move (\d+) from (\d+) to (\d+)/g.exec(move);
    moves.push({
        count: parseInt(match[1]),
        from: parseInt(match[2]),
        to: parseInt(match[3])
    })
}

function partTwo() {
    const localStacks = JSON.parse(JSON.stringify(stacks));
    for (const move of moves) {
        const crate = localStacks[move.from].splice(-move.count, move.count);
        localStacks[move.to] = localStacks[move.to].concat(crate);
    }
    console.log(
        indexes.map((value) => {
            const stack = localStacks[value];
            return stack[stack.length - 1];
        }).join(""))
}

partTwo();
