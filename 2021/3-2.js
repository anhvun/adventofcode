const rows = document.querySelector("body>pre")
    .innerText
    .split("\n")
    .filter(x => x);

const getBitCount = (rows) =>
    rows[0]
        .split("")
        .map((r, index) =>
            rows.reduce((sum, bits) => (sum + parseInt(bits[index])), 0)
        );

const filter = (rows, position = 0, LSB = false) => {
    const bitCount = getBitCount(rows);
    let mask = bitCount
        .map((b) => (b >= rows.length / 2 ? "1" : "0"))
        .join("");
    if (LSB) {
        mask = mask
            .split("")
            .map((b) => (b === "1" ? "0" : "1"))
            .join("");
    }

    const filtered = rows.filter((d) => d[position] === mask[position]);
    return filtered.length === 1 ? filtered[0] : filter(filtered, ++position, LSB);
};

const oxygen = parseInt(filter(rows), 2);
const co2 = parseInt(filter(rows, 0, true), 2);

const result = oxygen * co2;

