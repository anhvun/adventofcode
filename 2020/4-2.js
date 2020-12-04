// run on browser console when in https://adventofcode.com/2020/day/4/input


const passports = document.querySelector("body>pre")
    .innerText
    .split("\n\n");

const fields = [
    {name: "byr", validationRegex: /^(19[2-8][0-9]|199[0-9]|200[0-2])$/},
    {name: "iyr", validationRegex: /^(201[0-9]|2020)$/},
    {name: "eyr", validationRegex: /^(202[0-9]|2030)$/},
    {name: "hgt", validationRegex: /^(1[5-8][0-9]|19[0-3])cm$|^(59|6[0-9]|7[0-6])in$/},
    {name: "hcl", validationRegex: /^#[0-9a-f]{6}$/},
    {name: "ecl", validationRegex: /^amb$|^blu$|^brn$|^gry$|^grn$|^hzl$|^oth$/},
    {name: "pid", validationRegex: /^[0-9]{9}$/},
    {name: "cid", validationRegex: null},
];

const optionalFields = ["cid"];

const requiredFields = fields.filter(f => !(optionalFields.indexOf(f.name) !== -1));

const validPropertiesCount = passports
    .map(p => {
        let properties = p.split(/\s+/).map(m => {
            let property = m.split(":");
            return {key: property[0], value: property[1]};
        });
        return properties.filter(p => {
            let foundIndex = requiredFields.map(f => f.name).indexOf(p.key);
            return foundIndex !== -1 && requiredFields[foundIndex].validationRegex.test(p.value);
        });
    }).filter(p => p.length >= requiredFields.length);

console.log(validPropertiesCount.length);
