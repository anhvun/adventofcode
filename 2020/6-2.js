// run on browser console when in https://adventofcode.com/2020/day/6/input

const groups = document.querySelector("body>pre")
    .innerText
    .split("\n\n");

// const groups = ["abc", "a\nb\nc", "ab\nac", "a\na\na\na", "bb"];

const acceptedAnswersRegex = /[a-z]/g;

function getUniqueYessesCount(group) {
    let uniqueGroupAnswers = group.split("\n")
        .filter(x => x) // <- important to remove the empty elements of "".
        .map(x => [...x]
        ).reduce((a, b) =>
            a.filter(c =>
                b.includes(c)
            )
        );
    let totalAnswers = "".concat(uniqueGroupAnswers);
    let accepted = totalAnswers.match(acceptedAnswersRegex);

    return accepted ? (new Set([...accepted])).size : 0;
}

const sumOfAcceptedUniqueGroupAnswers = groups.reduce((previousValue, currentValue) => {
    let blaa = getUniqueYessesCount(currentValue);
    return previousValue + blaa;
}, 0);

console.log(sumOfAcceptedUniqueGroupAnswers);
