//** ZTransfer-Finish.js */
//** This App deletes all files from the NCB Production DATA folder except for the verses.json files which are used by the American Computerized Bible App and the New Christian Bible App. */
const fs = require('fs');
// #region workVersions
var workVersions = [];
// #endregion workVersions
//Do not change versionidx in ZTransfer-Finish.js
var versionidx = 0;

var workVersionsPath = `./DATA/1-Misc/`;
var vrs = fs.readFileSync(`${workVersionsPath}WorkVersions.json`, 'utf8');
workVersions = JSON.parse(vrs);
var vrabr = `${workVersions[versionidx].ar}`;
var versionName = `${workVersions[versionidx].vn}`;
versionName = versionName.slice(0, -5);
var path = `./Production Data/`

function deleteFiles() {

    let deletePath = `${path}${vrabr}/${vrabr} ${versionName}.md`;
    if (fs.existsSync(`${deletePath}`)) {
        fs.rmSync(`${deletePath}`, { recursive: true });
    };

    deletePath = `${path}${vrabr}/${vrabr}.db`;
    if (fs.existsSync(`${deletePath}`)) {
        fs.rmSync(`${deletePath}`, { recursive: true });
    };

    deletePath = `${path}${vrabr}/${vrabr}Verses.js`;
    if (fs.existsSync(`${deletePath}`)) {
        fs.rmSync(`${deletePath}`, { recursive: true });
    };

    deletePath = `${path}${vrabr}/${vrabr}Verses.jsonc`;
    if (fs.existsSync(`${deletePath}`)) {
        fs.rmSync(`${deletePath}`, { recursive: true });
    };

    deletePath = `${path}${vrabr}/${vrabr}Verses.txt`;
    if (fs.existsSync(`${deletePath}`)) {
        fs.rmSync(`${deletePath}`, { recursive: true });
    };

    deletePath = `${path}BibleDB.db`;
    if (fs.existsSync(`${deletePath}`)) {
        fs.rmSync(`${deletePath}`, { recursive: true });
    };

    deletePath = `${path}1-Misc`
    if (fs.existsSync(`${deletePath}`)) {
        fs.rmdirSync(`${deletePath}`, { recursive: true });
    };
};

function doAll() {

    console.log("Started!");
    let deletePath = `${path}ABV/ABV Folder Books & Versions.md`;
    if (fs.existsSync(`${deletePath}`)) {
        fs.rmSync(`${deletePath}`, { recursive: true });
    };
    deletePath = `${path}ABV/Books.jsonc`;
    if (fs.existsSync(`${deletePath}`)) {
        fs.rmSync(`${deletePath}`, { recursive: true });
    };
    deletePath = `${path}ABV/Versions.jsonc`;
    if (fs.existsSync(`${deletePath}`)) {
        fs.rmSync(`${deletePath}`, { recursive: true });
    };
    workVersions.forEach(vrsn => {
        vrabr = `${workVersions[versionidx].ar}`;
        versionName = `${workVersions[versionidx].vn}`;
        versionName = versionName.slice(0, -5);
        deleteFiles();
        versionidx++;
        console.log(`Version: ${vrabr}   VersionNum: ${versionidx}`);
    });
    versionidx++;
    console.log(`Version: ${vrabr}   VersionNum: ${versionidx}`);
    console.log("finished!");

};

if (fs.existsSync(path)) {
    doAll();
};

process.exit();