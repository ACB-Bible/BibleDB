//** Transfer-Text-to-SQL.js */
//** This App reads the machine readable text files that are stored in the same structure as the AKJVerses.txt file, it iterates each verse and inserts them into the SQLite3 BibleDB.db database Verses table for each BibleDB Project version. */
// #region Top level Variables: bid = BookID, cn = ChapterNumber, vn = VerseNumber, text = VerseText, chapterID = ChapterID, versionID = VersionID, vrabr = Book abreviation, path = Path to plain text file, dbPath = Path to SQLite3 database
var bookList = require('../../DATA/1-Misc/WorkBooks.js');
const fs = require('fs');
var workVersions = [];
var versionidx = 18;

var bid = '';
var cn = '';
var vn = '';
var text = '';
var title = '';
var chapterID = 0;
var volumeID = 1;

var path = `./DATA/1-Misc/`;
var vrs = fs.readFileSync(`${path}WorkVersions.json`, 'utf8');
workVersions = JSON.parse(vrs);
var versionID = `${workVersions[versionidx].id}`;
var vrabr = `${workVersions[versionidx].ar}`;
//var versionName = `${workVersions[versionidx].vn}`;
var textPath = `./DATA/${vrabr}/${vrabr}Verses.txt`;

var dbPath = `./DATA/BibleDB.db`;
const sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRIT, (err) => {
    if (err) { console.error(err.message); };
});
// #endregion Top level Variables:

async function loadSQL() {

    bid = Number(bid);
    cn = Number(cn);
    vn = Number(vn);
    if (vn === 1) { chapterID++; };

    let sql = `INSERT INTO AATMPVerses (BookID, ChapterNumber, VerseNumber, VerseText, ChapterID, VersionID, volumeID) VALUES(?, ?, ?, ?, ?, ?, ?)`;
    let values = [bid, cn, vn, text, chapterID, versionID, volumeID];
    db.run(sql, values);
};

function setBookID(books) {

    if (title === 'SongofSolomon') { title = 'Song of Solomon' };
    if (title === 'Psalm') { title = 'Psalms' };
    if (volumeID === 1) { if (title === 'Matthew'){volumeID = 2} };

    let i = books.findIndex(bks => bks.t === title);
    bid = books[i].id;
    console.log(`${title}   ID: ${bid}`)
};

function setNum(str) {
    let i = 0;
    let first = true;
    title = '';
    cn = '';
    vn = '';

    if (str.charAt(0) === '1' || str.charAt(0) === '2' || str.charAt(0) === '3') {
        title = `${str.charAt(0)} `;
    }
    for (const char of str) {
        if (!isNaN(char) && char !== ' ' && i > 3) {
            if (first) {
                cn += char;
            } else {
                vn += char;
            };
        };
        if (char === ':') { first = false };
        if (!first && char === ' ') { return i; };
        i++;
        if (isNaN(char) && first) { title += char };
    };
};

async function verses(files, books) {

    let aLine = '';
    let i = 0;
    let x = 0;

    const file = fs.readFileSync(files, 'utf8');
    const lines = file.split(/\r?\n/);

    for (const line of lines) {
        if (x > 0) {
            aLine = line.replace(/\t/g, ' ').trim();
            i = setNum(aLine);
            text = aLine.slice(i, aLine.length).trim();
            setBookID(books);
            loadSQL();
        };
        x++;
    };
    db.close();
    Promise.resolve(true);
};

async function startUp() {

    let books = bookList.setBook(vrabr);
    let res = false;
    if (books) { res = verses(textPath, books) };
    if (res) { console.log(`Finished: ${vrabr}`); };
};

startUp();
