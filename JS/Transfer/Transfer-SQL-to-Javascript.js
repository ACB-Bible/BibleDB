//** Transfer-SQL-to-Javascript */
const fs = require('fs');
var workVersions = [];

var versionidx = 0;
var path = `./DATA/1-Misc/Unprocessed/`;
var vrs = fs.readFileSync(`${path}WorkVersions.json`, 'utf8');
workVersions = JSON.parse(vrs);
var vrabr = `${workVersions[versionidx].ar}`;
var vTitle = workVersions[versionidx].vn;
var aComment = `//${vTitle}:`;

var bk = 'Genesis';
var cn = 1;
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

function fixFile(book, chapterNumber, verseNumber, text) {

    text = text.replace(/"/g, "\\\"");
    if (bk !== book) {
        aFile += `\n   },\n},\n"${book}": {\n"${chapterNumber}": {\n`;
    } else {
        if (cn !== chapterNumber) { aFile += `      },\n"${chapterNumber}": {\n` };
    };
    aFile += `         "${verseNumber}": "${text}",\n`;
    bk = book;
    cn = chapterNumber;
};

async function sqlTransfer() {

    let sql = `SELECT AJsonBooks.t, ${vrabr}Verses.ChapterNumber, ${vrabr}Verses.VerseNumber, ${vrabr}Verses.VerseText FROM ${vrabr}Verses JOIN AJsonBooks ON ${vrabr}Verses.BookID = AJsonBooks.id`;

    return new Promise((resolve, reject) => {
        db.serialize(() => {
            db.each(sql, (err, row) => {
                if (err) { console.error(err.message); reject(false) }
                fixFile(row.t, row.ChapterNumber, row.VerseNumber, row.VerseText)
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
    aFile = `${aComment}\n const json = {\n   "${bk}": {\n   "${cn}": {\n`;
    res = await sqlTransfer();
    if (res) { aFile += `}}};\n`; res = await writeFile(); };
    if (res) { console.log('Finished!') };
};

startUp();