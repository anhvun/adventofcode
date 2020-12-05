// run on browser console when in https://adventofcode.com/2020/day/5/input

const startSeat = {
    rows: "0-127",
    cols: "0-7"
};

const lowerRow = "F";
const upperRow = "B";
const lowerCol = "L";
const upperCol = "R";

/*const seats = document.querySelector("body>pre")
    .innerText
    .split("\n");*/

const seats = ["FBFBBFFRLR"];

function splitRange(seat, letter) {
    let rowsRange = seat.rows.split("-");
    let colsRange = seat.cols.split("-");

    let rowSize = +rowsRange[1]- +rowsRange[0];
    let colSize = +colsRange[1]- +colsRange[0];

    switch (letter) {
        case lowerRow:
            rowsRange[1] = +rowsRange[1] - (rowSize + 1) / 2;
            break;
        case upperRow:
            rowsRange[0] = +rowsRange[0] + (rowSize + 1) / 2;
            break;
        case lowerCol:
            colsRange[1] = +colsRange[1] - (colSize + 1) / 2;
            //console.log(colsRange);
            break;
        case upperCol:
            colsRange[0] = +colsRange[0] + (colSize + 1) / 2;
            //console.log(colsRange);
            break;
    }


    return {
        rows: typeof(rowsRange[1]) === "undefined" ? `${rowsRange[0]}` : `${rowsRange[0]}-${rowsRange[1]}`,
        cols: typeof(colsRange[1]) === "undefined" ? `${colsRange[0]}` : `${colsRange[0]}-${colsRange[1]}`
    }
}

const foundSeats = seats.map(seat => {
    return [...seat].reduce((s, letter) => {
        console.log(splitRange(s, letter));
        return splitRange(s, letter);
    }, startSeat);
});

/*const highestSeatId = foundSeats.reduce((previousSeatId, foundSeat) => {
        let seatId = 8 * foundSeat.rows + foundSeat.cols;
        return (seatId > previousSeatId) ? seatId : previousSeatId;
    }, 0
)
*/
//console.log(highestSeatId);
