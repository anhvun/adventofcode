// run on browser console when in https://adventofcode.com/2020/day/3/input

const speedRight = 3;
const speedDown = 1;

const rows = document.querySelector("body>pre")
    .innerText
    .split("\n");

const amountOfStepsRightNeeded = speedDown * speedRight;

const repeatsNeeded = Math.ceil(rows.length / ([...rows[0]].length / amountOfStepsRightNeeded));


const extendedRows = rows.map(x => x.repeat(repeatsNeeded));

const treesCount = extendedRows.filter((extendedRow, index) =>
    [...extendedRow][index * speedRight] === '#'
).length;
