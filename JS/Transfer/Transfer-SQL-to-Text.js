//** Transfer-SQL-to-Text.js */
const fs = require('fs');
var workVersions = [];

var versionidx = 0;
var path = `./DATA/1-Misc/Unprocessed/`;
var vrs = fs.readFileSync(`${path}WorkVersions.json`, 'utf8');
workVersions = JSON.parse(vrs);
var vrabr = workVersions[versionidx].ar;
var aFile = `${workVersions[versionidx].vn}:\n`;

var path = `./DATA/`
var textPath = `${path}${vrabr}/${vrabr}Verses.txt`;
var dbPath = `${path}BibleDB.db`;

const sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRIT, (err) => {
    if (err) { console.error(err.message); };
});
// #endregion Top level Variables

async function sqlTransfer() {

    let sql = `SELECT AJsonBooks.t, ${vrabr}Verses.ChapterNumber, ${vrabr}Verses.VerseNumber, ${vrabr}Verses.VerseText FROM ${vrabr}Verses JOIN AJsonBooks ON ${vrabr}Verses.BookID = AJsonBooks.id`;

    return new Promise((resolve, reject) => {
        db.serialize(() => {
            db.each(sql, (err, row) => {
                if (err) { console.error(err.message); reject(false) }
                aFile += `${row.t} ${row.ChapterNumber}:${row.VerseNumber} ${row.VerseText}\n`
                //console.log(aFile);
            });
            db.close((err) => {
                if (err) { console.error(err.message); reject(false); }
                resolve(true);
            });
        });
    });
}

async function writeFile() {

    return new Promise((resolve, reject) => {
        fs.writeFile(textPath, aFile, err => {
            if (err) { console.error(err.message); reject(false); } else { resolve(true); };
        });
    });
};

async function makeFile() {

    let aVersion = aFile.slice(0, -7);
    textPath = `${path}${vrabr}/${vrabr} ${aVersion} - Read-Me.md`;
    aFile = `#### ${aFile}----\n##### The ${vrabr} folder contains the complete Verses of the "${aVersion}" bible in these various data formats:\n* SQLite3 database\n* JavaScript\n* JSON\n* JSONC\n* Plain-Text`;

    /*
    if (vrabr === 'CPD' || vrabr === 'TYN') {
        aFile += `\n###### This folder also contains a Json file listing the books, including the chapter count for each book of the "${aVersion}", because it contains different books than other versions of the bible.`
    }*/

    Promise.resolve(true);
;
}
async function startUp() {

    let res = false;
    res = await sqlTransfer();
    res = true
    if (res) { makeFile(); };
    if (res) { res = await writeFile(); };
    if (res) { console.log('Finished!') };

};

startUp();