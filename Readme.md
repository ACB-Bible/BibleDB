<h3 align="center">BibleDB Project</h3>

---

The "BibleDB" project is part of the "Bible Code" Project which is a collection of GitHub repositories containing source code and data that can be used to develop your own computerized Bible project. The "BibleDB" project is the foundation of the "Bible Code" project, it contains all the data files used by the other projects being developed. All the data and source code for each of these projects is in the public domain and free of copyrights, therefore it's free for you to use in your own ministry or Bible project. If you use or alter any of this data or source code, please change the name of your project so people don't get confused.

---

#### Other Active Bible Code Repositories

The "Bible Code" GitHub repositories that are actively being developed.

1. [American Computerized Bible](https://github.com/ACB-Bible/AmericanComputerizedBible) - The "American Computerized Bible" is a project with complete CSS, HTML, Javascript source code, and Json file  examples that use data from the "BibleDB" project for developing an online Bible.
2. [New Christian Bible Project](https://github.com/ACB-Bible/NCB) - The "New Christian Bible" is a project with complete CSS, HTML, Javascript source code, and Json file  examples that use data from the "BibleDB" project for developing an online Bible.
3. [Bible Code Documentation](https://github.com/ACB-Bible/DOC) - Complete documentation for all "Bible Code" projects.

Operational webpages can be viewed here:
1.  [ACB Webpage](https://acbible.com)

[Back to Top](#top)

---

#### Table of Contents

1. [DATA Folder](#data-folder)
    
---

##### DATA Folder

The DATA folder contains all the Bible verse data in the BibleDB project.

1. BibleDB.db 
    * An SQLite3 database that is the master database file for the Bibledb project. All the other data files are derived from the BibleDB.db database, including the .db, .csv, .js, .json, .jsonc. The plain text .txt files are machine readable files of the Bible versions that were used to load the BibleDB.db database

##### 1-Misc Folder

1. [Template]()
    * An SQLite3 database file that is the template for the database file in each Bible version folder.

2. [Work Books](/DATA/1-Misc/WorkBooks.js)
    * A file that contains Javascript arrays for each version of the Bible of the books in each version. These books arrays are only used in the BibleDB project with the Javascript programs in the JS folder, which is why they are named WorkBooks.js.

2. [Work Versions](/DATA/1-Misc/WorkVersions.json)
    * A file that contains a Json array for each version of the Bible. This file is only used in the BibleDB project with the Javascript programs in the JS folder, which is why they are named WorkVersions.json.

* ##### Unprocessed Folder


    The Unprocessed folder is a place to store files that have not been processed on yet.

* ##### ABV Folder
    The ABV folder contains version and book lists for all of the Bible versions included in the BibleDB project
    <br>
    * [Bible Books List](/DATA/ABV/BibleBookLists.md)
    
        * A complete markdown list of all the books in most public domain versions of the bible.

    * ###### Json Folder
        * The Json folder contains Json minified versions of all the files located in the Jsonc folder.

            1. [24-New Testament Books](/DATA/ABV/Json/24-NewTestamentBooks.json)
                * A Jsonc file listing the 24 New Testament books in the Jewish Publication Society's Tanakh 1917 OT(JPS).

            2. [27-New Testament Books](/DATA/ABV/Json/27-NewTestamentBooks.json)
                * A Jsonc file listing the 24 New Testament books in the Tyndale Bible(TYN) and the Weymouth New Testament(WEY).

            3. [Books](/DATA/ABV/Json/Books.json)
                * A Jsonc file listing all the books in most Public Domain versions of the Bible.

            4. [Catholic Books](/DATA/ABV/Json/CatholicBooks.json)
                * A Jsonc file listing the 73 books in the Catholic Public Domain Bible version.

            5. [Versions](/DATA/ABV/Json/Versions.json)
                * A Jsonc file listing all the Bible versions in the BibleDB project. 

    * ###### Jsonc Folder

        * Jsonc files are Json files that contain comments. The Jsonc folder contains Jsonc versions of all the Bible books and versions of the Bibles in the BibleDB project.

            1. [24-New Testament Books](/DATA/ABV/Jsonc/24-NewTestamentBooks.jsonc)
                * A Jsonc file listing the 24 New Testament books in the Jewish Publication Society's Tanakh 1917 OT(JPS).

            2. [27-New Testament Books](/DATA/ABV/Jsonc/27-NewTestamentBooks.jsonc)
                * A Jsonc file listing the 24 New Testament books in the Tyndale Bible(TYN) and the Weymouth New Testament(WEY).

            3. [Books](/DATA/ABV/Jsonc/Books.jsonc)
                * A Jsonc file listing all the books in most Public Domain versions of the Bible.

            4. [Catholic Books](/DATA/ABV/Jsonc/CatholicBooks.jsonc)
                * A Jsonc file listing the 73 books in the Catholic Public Domain Bible version.

            5. [Versions](/DATA/ABV/Jsonc/Versions.jsonc)
                * A Jsonc file listing all the Bible versions in the BibleDB project.    

---
<br>

[Back To Top](#read-me)

<h6 align="center" title="God's Word Is Not For Sale">BibleDB Project - No Copyright © It's Free - Inspired by God!</h3>
<h6 align="center">Good luck with your efforts!</h6>