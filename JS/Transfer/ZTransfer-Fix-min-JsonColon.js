//** Transfer-Fix-Colon-in-min-Json.js */
//* This app repairs the improper punctuation in a Json a file after it has been minimized by the MinifyAll extension in VSCode! */
const fs = require('fs');
var workVersions = [];

const alph = [
    { "id": "a" },
    { "id": "A" },
    { "id": "b" },
    { "id": "B" },
    { "id": "c" },
    { "id": "C" },
    { "id": "d" },
    { "id": "D" },
    { "id": "e" },
    { "id": "E" },
    { "id": "f" },
    { "id": "F" },
    { "id": "g" },
    { "id": "G" },
    { "id": "h" },
    { "id": "H" },
    { "id": "i" },
    { "id": "I" },
    { "id": "j" },
    { "id": "J" },
    { "id": "k" },
    { "id": "l" },
    { "id": "L" },
    { "id": "m" },
    { "id": "M" },
    { "id": "n" },
    { "id": "N" },
    { "id": "o" },
    { "id": "O" },
    { "id": "p" },
    { "id": "P" },
    { "id": "q" },
    { "id": "Q" },
    { "id": "r" },
    { "id": "R" },
    { "id": "s" },
    { "id": "S" },
    { "id": "t" },
    { "id": "T" },
    { "id": "u" },
    { "id": "U" },
    { "id": "v" },
    { "id": "V" },
    { "id": "w" },
    { "id": "W" },
    { "id": "x" },
    { "id": "X" },
    { "id": "y" },
    { "id": "Y" },
    { "id": "z" },
    { "id": "Z" },
    { "id": "&" },
];

var versionidx = 15;
var path = `./DATA/1-Misc/`;
var vrs = fs.readFileSync(`${path}WorkVersions.jsonc`, 'utf8');
workVersions = JSON.parse(vrs);
var vrabr = `${workVersions[versionidx].ar}`;
var path = `./DATA/`
var textPath = `${path}${vrabr}/${vrabr}Verses.json`;
var verses = fs.readFileSync(textPath, 'utf8');

function verseReplace() {

    for (let alp in alph) {
        verses = verses.replaceAll(`:${alph[alp].id}`, `: ${alph[alp].id}`);
        verses = verses.replaceAll(`,\\"${alph[alp].id}`, `,\\" ${alph[alp].id}`);
        verses = verses.replaceAll(`.\\"${alph[alp].id}`, `.\\" ${alph[alp].id}`);
        verses = verses.replaceAll(`!\\"${alph[alp].id}`, `!\\" ${alph[alp].id}`);
        verses = verses.replaceAll(`?\\"${alph[alp].id}`, `?\\" ${alph[alp].id}`);
        verses = verses.replaceAll(`:\\"${alph[alp].id}`, `:\\" ${alph[alp].id}`);
        verses = verses.replaceAll(`,${alph[alp].id}`, `, ${alph[alp].id}`);
    };
    verses = verses.replaceAll(` \\"a`, `\\" a`);
    verses = verses.replaceAll(`\\"a`, `\\" a`);
    verses = verses.replaceAll(`\\"f`, `\\" f`);
    verses = verses.replaceAll(`\\"o`, `\\" o`);
    verses = verses.replaceAll(`\\"s`, `\\" s`);
    fs.writeFile(textPath, verses, err => {
        if (err) { console.error(err.message); };
    });

};

function startUp() {
    console.log(vrabr);
    verseReplace();
    console.log('finished');
};

startUp();