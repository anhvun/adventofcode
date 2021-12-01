const rows = document.querySelector("body>pre")
    .innerText
    .split("\n")
    .filter(x => x);


let increased = 0;
let previousSumValue = null;

rows.map((v, index) => {
    if (index < 2) {
        return;
    }
    const sumValue = parseInt(v, 10) + parseInt(rows[index - 1], 10) + parseInt(rows[index - 2]);
    const tempPreviousSumValue = previousSumValue;
    previousSumValue = sumValue;
    if (!tempPreviousSumValue) {
        return;
    }

    if (sumValue > tempPreviousSumValue) {
        increased++;
    }
});

console.log(increased);