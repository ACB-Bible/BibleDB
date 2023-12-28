//** Transfer-SQL-to-Text.js */
const fs = require('fs');
var bookList = require('../../DATA/1-Misc/WorkBooks.js');
var workVersions = [];

var versionidx = 0;
var path = `./DATA/1-Misc/`;
var vrs = fs.readFileSync(`${path}WorkVersions.json`, 'utf8');
workVersions = JSON.parse(vrs);
var vrabr = workVersions[versionidx].ar;
var aFile = `${workVersions[versionidx].vn}:\n`;
var books = bookList.setBook(vrabr);
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

async function writeFile(apath) {

    return new Promise((resolve, reject) => {
        fs.writeFile(apath, aFile, err => {
            if (err) { console.error(err.message); reject(false); } else { resolve(true); };
        });
    });
};

async function mdFile(apath) {

    aFile = `#### ${apath}(${vrabr}):\n---\n ##### The ${vrabr} folder contains the complete Verses of the "${apath}" bible in these various data formats:\n* JavaScript\n* JSON\n* JSONC\n* Plain-Text\n* SQLite3 database\n---`;

    console.log('test')
    Promise.resolve(true);
;
}
async function startUp() {

    let res = false;
    res = await sqlTransfer();

    textPath = `${path}${vrabr}/${vrabr}verses.txt`;
    if (res) { res = await writeFile(textPath); };
    let text = workVersions[versionidx].vn.slice(0, -5);
    textPath = `${path}${vrabr}/${vrabr} ${text}`;
    if (res) { mdFile(text); };
    textPath = `${path}${vrabr}/${vrabr} ${text}.md`;
    if (res) { res = await writeFile(textPath); };
    if (res) { console.log('Finished!') };
};

startUp();