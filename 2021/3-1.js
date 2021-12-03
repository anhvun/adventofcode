const rows = document.querySelector("body>pre")
    .innerText
    .split("\n")
    .filter(x => x);

const rowsLength = rows.length;

const colLength = rows[0].split("").length;

let columns = {};

rows.forEach((rowValue, rowIndex) => {
    const columnChars = rowValue.split("");
    columnChars.forEach((char, charIndex) => {
        if(!columns[charIndex]){
            columns[charIndex] = char;
        } else {
            columns[charIndex] += char;
        }
    });
})

const gamma = parseInt(Object.values(columns).map( c => {
    const ones = c.split("1").length - 1;
    const zeros = c.split("0").length - 1;
    return ones > zeros ? "1" : "0";
}).join(''), 2);

const epsilon = parseInt(Object.values(columns).map( c => {
    const ones = c.split("1").length - 1;
    const zeros = c.split("0").length - 1;
    return ones < zeros ? "1" : "0";
}).join(''), 2);

const result = gamma * epsilon;
