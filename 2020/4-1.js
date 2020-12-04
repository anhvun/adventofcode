// run on browser console when in https://adventofcode.com/2020/day/4/input


const passports = document.querySelector("body>pre")
    .innerText
    .split("\n\n");

const fields = [
    "byr",
    "iyr",
    "eyr",
    "hgt",
    "hcl",
    "ecl",
    "pid",
    "cid"
];

const optionalFields = ["cid"];

const requiredFields = fields.filter(f => !(optionalFields.indexOf(f) !== -1));


const validPassports = passports
    .map(p =>
        p.split(/\s+/)
            .map(m => m.split(":")[0])
            .filter(p => requiredFields.indexOf(p) !== -1).length
    ).filter(p => p >= requiredFields.length).length;

console.log(validPassports);
