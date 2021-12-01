const rows = document.querySelector("body>pre")
    .innerText
    .split("\n")
    .filter(x => x);


let increased = 0;
let previousValue = null;

rows.map(v => {
    const value = parseInt(v, 10);
    const tempPreviousValue = previousValue;
    previousValue = value;
    if (!tempPreviousValue) {
        return;
    }

    if (value > tempPreviousValue) {
        increased++;
    }
});

