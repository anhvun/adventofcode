// run on browser console when in https://adventofcode.com/2020/day/5/input


const startingPoint = {
    rows: "0-127",
    cols: "0-7"
};

const lowerRow = "F";
const upperRow = "B";
const lowerCol = "L";
const upperCol = "R";

const seats = document.querySelector("body>pre")
    .innerText
    .split("\n");

function getEndSeat(seat) {
    let rowsRange = startingPoint.rows.split("-");
    let colsRange = startingPoint.cols.split("-");
    [...seat].forEach(letter => {
        let rowSize = +rowsRange[1] - +rowsRange[0];
        let colSize = +colsRange[1] - +colsRange[0];

        switch (letter) {
            case lowerRow:
                rowsRange[1] = +rowsRange[1] - (rowSize + 1) / 2;
                break;
            case upperRow:
                rowsRange[0] = +rowsRange[0] + (rowSize + 1) / 2;
                break;
            case lowerCol:
                colsRange[1] = +colsRange[1] - (colSize + 1) / 2;
                break;
            case upperCol:
                colsRange[0] = +colsRange[0] + (colSize + 1) / 2;
                break;
        }
    });

    return {
        rows: `${rowsRange[0]}-${rowsRange[1]}`,
        cols: `${colsRange[0]}-${colsRange[1]}`,
        seatId: 8 * +rowsRange[0] + +colsRange[0]
    }
}

const foundSeats = seats.map(s => getEndSeat(s));
foundSeats.sort((a, b) => a.seatId - b.seatId).forEach((seat, index) => {
    if(index > 0 && index < foundSeats.length - 1){
        if (seat.seatId + 1 !== foundSeats[index + 1].seatId && seat.seatId + 2 === foundSeats[index + 1].seatId) {
            // the missing one, since there's a hole in id list, and next one takes the value of the other that's supposed to be after
            console.log(seat.seatId + 1);
        }
    }
});
