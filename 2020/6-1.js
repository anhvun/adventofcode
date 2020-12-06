// run on browser console when in https://adventofcode.com/2020/day/6/input

const groups = document.querySelector("body>pre")
    .innerText
    .split("\n\n");

// const groups = ["abc", "a\nb\nc", "ab\nac", "a\na\na\na", "b"];

const acceptedAnswersRegex = /[a-z]/g;

function getUniqueYessesCount(group) {
    let totalAnswers = "".concat(group.split("\n"));
    let accepted = totalAnswers.match(acceptedAnswersRegex);
    return accepted ? (new Set([...accepted])).size : 0;
}

const sumOfAcceptedUniqueGroupAnswers = groups.reduce((previousValue, currentValue) =>
    previousValue + getUniqueYessesCount(currentValue)
    , 0);

console.log(sumOfAcceptedUniqueGroupAnswers);
