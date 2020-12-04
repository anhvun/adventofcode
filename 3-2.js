// run on browser console when in https://adventofcode.com/2020/day/3/input

function calculateTrees(speedDown, speedRight) {
    const rows = document.querySelector("body>pre")
        .innerText
        .split("\n");

    const rightToDownRatio = speedRight / speedDown;

    const repeatsNeeded = Math.ceil(rows.length * rightToDownRatio / [...rows[0]].length);

    const extendedRows = rows.map(x => x.repeat(repeatsNeeded));

    return extendedRows
        .filter((extendedRow, index) =>
            [...extendedRow][index * rightToDownRatio] === '#' && (index % speedDown === 0)
        ).length;
}

const speeds = [
    {right: 1, down: 1},
    {right: 3, down: 1},
    {right: 5, down: 1},
    {right: 7, down: 1},
    {right: 1, down: 2}
];


const multiplicationOfTrees = speeds.reduce((previousValue, speed) =>
    previousValue * calculateTrees(speed.down, speed.right)
    , 1);

console.log(multiplicationOfTrees);
