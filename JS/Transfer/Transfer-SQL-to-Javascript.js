//** Transfer-SQL-to-Javascript */
//** This App reads the SQLite3 BibleDB.db database Verses table, formats the data to a Javascript array object, assembles it into a Javascript file, and writes it to disc with the same structure as the AKJVerses.js file for each BibleDB Project version. */
const fs = require('fs');
var bookList = require('../../DATA/1-Misc/WorkBooks.js');
var workVersions = [];

var versionidx = 15;
var path = `./DATA/1-Misc/`;
var vrs = fs.readFileSync(`${path}WorkVersions.json`, 'utf8');
workVersions = JSON.parse(vrs);
var vrabr = `${workVersions[versionidx].ar}`;
var vTitle = workVersions[versionidx].vn;
var aComment = `//${vTitle}:`;

//var bk = 'Genesis';
//var cn = 1;
path = `./DATA/`
var textPath = `${path}${vrabr}/${vrabr}Verses.js`;
var dbPath = `${path}BibleDB.db`;

const sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRIT, (err) => {
    if (err) { console.error(err.message); };
});

async function writeFile() {

    return new Promise((resolve, reject) => {
        fs.writeFile(textPath, aFile, err => {
            if (err) { console.error(err.message); reject(false); } else { resolve(true); };
        });
    });
};

function fixFile(bk, cn, book, chapterNumber, verseNumber, text) {


    text = text.replace(/"/g, "\\\"");
    if (bk !== book) {
        aFile += `\n   },\n},\n"${book}": {\n"${chapterNumber}": {\n`;
    } else {
        if (cn !== chapterNumber) { aFile += `      },\n"${chapterNumber}": {\n` };
    };
    aFile += `         "${verseNumber}": "${text}",\n`;
    //bk = book;
    //cn = chapterNumber;
};

async function sqlTransfer(books) {

    let i = 0;
    let bid = 1;
    let bk = books[0].t;
    let cn = 1;

    let sql = `SELECT ${vrabr}Verses.BookID, ${vrabr}Verses.ChapterNumber, ${vrabr}Verses.VerseNumber, ${vrabr}Verses.VerseText FROM ${vrabr}Verses ORDER BY ${vrabr}Verses.BookID`;

    return new Promise((resolve, reject) => {
        db.serialize(() => {
            db.each(sql, (err, row) => {
                if (err) { console.error(err.message); reject(false) };
                fixFile(bk, cn, books[bid - 1].t, row.ChapterNumber, row.VerseNumber, row.VerseText);
                bk = books[bid - 1].t;
                bid = Number(row.BookID);
                cn = Number(row.ChapterNumber);
                console.log(books[bid - 1].t);
            });
            db.close((err) => {
                if (err) { console.error(err.message); reject(false); }
                resolve(true);
            });
        });
    });
};

async function startUp() {

    let res = false;
    let books = bookList.setBook(vrabr);
    aFile = `${aComment}\n const json = {\n   "${books[0].t}": {\n   "1": {\n`;
    res = await sqlTransfer(books);
    if (res) { aFile += `}}};\n`; res = await writeFile(); };
    if (res) { console.log('Finished!') };
};

startUp();