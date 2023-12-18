//** Transfer-Text-Bibles-to-SQL.js */

// #region Old & New Testament Books
var books = [{"c":50,"id":1,"t":"Genesis"},{"c":40,"id":2,"t":"Exodus"},{"c":27,"id":3,"t":"Leviticus"},{"c":36,"id":4,"t":"Numbers"},{"c":34,"id":5,"t":"Deuteronomy"},{"c":24,"id":6,"t":"Joshua"},{"c":21,"id":7,"t":"Judges"},{"c":4,"id":8,"t":"Ruth"},{"c":31,"id":9,"t":"1 Samuel"},{"c":24,"id":10,"t":"2 Samuel"},{"c":22,"id":11,"t":"1 Kings"},{"c":25,"id":12,"t":"2 Kings"},{"c":29,"id":13,"t":"1 Chronicles"},{"c":36,"id":14,"t":"2 Chronicles"},{"c":10,"id":15,"t":"Ezra"},{"c":13,"id":16,"t":"Nehemiah"},{"c":10,"id":17,"t":"Esther"},{"c":42,"id":18,"t":"Job"},{"c":150,"id":19,"t":"Psalms"},{"c":31,"id":20,"t":"Proverbs"},{"c":12,"id":21,"t":"Ecclesiastes"},{"c":8,"id":22,"t":"Song of Solomon"},{"c":66,"id":23,"t":"Isaiah"},{"c":52,"id":24,"t":"Jeremiah"},{"c":5,"id":25,"t":"Lamentations"},{"c":48,"id":26,"t":"Ezekiel"},{"c":12,"id":27,"t":"Daniel"},{"c":14,"id":28,"t":"Hosea"},{"c":3,"id":29,"t":"Joel"},{"c":9,"id":30,"t":"Amos"},{"c":1,"id":31,"t":"Obadiah"},{"c":4,"id":32,"t":"Jonah"},{"c":7,"id":33,"t":"Micah"},{"c":3,"id":34,"t":"Nahum"},{"c":3,"id":35,"t":"Habakkuk"},{"c":3,"id":36,"t":"Zephaniah"},{"c":2,"id":37,"t":"Haggai"},{"c":14,"id":38,"t":"Zechariah"},{"c":4,"id":39,"t":"Malachi"},{"c":28,"id":40,"t":"Matthew"},{"c":16,"id":41,"t":"Mark"},{"c":24,"id":42,"t":"Luke"},{"c":21,"id":43,"t":"John"},{"c":28,"id":44,"t":"Acts"},{"c":16,"id":45,"t":"Romans"},{"c":16,"id":46,"t":"1 Corinthians"},{"c":13,"id":47,"t":"2 Corinthians"},{"c":6,"id":48,"t":"Galatians"},{"c":6,"id":49,"t":"Ephesians"},{"c":4,"id":50,"t":"Philippians"},{"c":4,"id":51,"t":"Colossians"},{"c":5,"id":52,"t":"1 Thessalonians"},{"c":3,"id":53,"t":"2 Thessalonians"},{"c":6,"id":54,"t":"1 Timothy"},{"c":4,"id":55,"t":"2 Timothy"},{"c":3,"id":56,"t":"Titus"},{"c":1,"id":57,"t":"Philemon"},{"c":13,"id":58,"t":"Hebrews"},{"c":5,"id":59,"t":"James"},{"c":5,"id":60,"t":"1 Peter"},{"c":3,"id":61,"t":"2 Peter"},{"c":5,"id":62,"t":"1 John"},{"c":1,"id":63,"t":"2 John"},{"c":1,"id":64,"t":"3 John"},{"c":1,"id":65,"t":"Jude"},{"c":22,"id":66,"t":"Revelation"}]
// #endregion Books

// #region Top level Variables: bid = BookID, cn = ChapterNumber, vn = VerseNumber, text = VerseText, chapterID = ChapterID, versionID = VersionID, vrabr = Book abreviation, path = Path to plain text file, dbPath = Path to SQLite3 database

const fs = require('fs');
var workVersions = [];
var versionidx = 5;

var bid = '';
var cn = '';
var vn = '';
var text = '';
var title = '';
var chapterID = 0;

var path = `./DATA/1-Misc/`;
var vrs = fs.readFileSync(`${path}WorkVersions.json`, 'utf8');
workVersions = JSON.parse(vrs);
var versionID = `${workVersions[versionidx].id}`;
var vrabr = `${workVersions[versionidx].ar}`;
var versionName = `${workVersions[versionidx].vn}`;
var textPath = `${path}${vrabr}${versionName}.txt`;

var dbPath = `./DATA/BibleDB.db`;
const sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRIT, (err) => {
    if (err) { console.error(err.message); };
});
// #endregion vrabr

async function loadSQL() {

    bid = Number(bid);
    cn = Number(cn);
    vn = Number(vn);
    if (vn === 1) { chapterID++; };

    let sql = `INSERT INTO AATMPVerses (BookID, ChapterNumber, VerseNumber, VerseText, ChapterID, VersionID) VALUES(?, ?, ?, ?, ?, ?, ?)`;
    let values = [bid, cn, vn, text, chapterID, versionID];
    db.run(sql, values);
};

function setBookID() {

    if (title === 'SongofSolomon') { title = 'Song of Solomon' };
    if (title === 'Psalm') { title = 'Psalms' };
    let i = books.findIndex(bks => bks.t === title);
    bid = books[i].id;
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

async function verses(files) {

    let aLine = '';
    let i = 0;
    let x = 0;
    let res = false;
    const file = fs.readFileSync(files, 'utf8');
    const lines = file.split(/\r?\n/);

    for (const line of lines) {
        if (x > 0) {
            aLine = line.replace(/\t/g, ' ').trim();
            i = setNum(aLine);
            text = aLine.slice(i, aLine.length).trim();
            setBookID();
            loadSQL();
            console.log(`Title: ${title}   bid: ${bid}`);
        };
        x++;
    };
    db.close();
};

async function startUp() {

    verses(textPath);
    console.log(`Finished: ${vrabr}`);
};

startUp();
