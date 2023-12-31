#### Catholic Public Domain Version(CPD):
----
###### The CPD folder contains the complete verses of the "Catholic Public Domain Version" bible in various data formats, including:
* CSV
* JavaScript
* JSON
* JSONC
* Plain-Text
* SQLite3 database
---

###### The Catholic Public Domain Version of the bible, contains books and paragraphs that are not in other versions.

These additional paragraphs are not included in the data files located in the CPD folder. The verse structure for the Catholic bible varies from the verse structure of other bible versions. They are included here for reference for anyone that wants to include them in their own computerized bible project.

---

<br>

##### MarkDown Contents:
* [1. Markdown List of Catholic Public Domain Version Old Testament Books](#cpdvotb)
* [2. Markdown List of Catholic Public Domain Version New Testament Books](#cpdvntb)
<br>

##### Json Contents:
###### Extra Paragraphs:
* [1. First Extra Paragraph from the Catholic Public Domain Version Book of Sirach](#fep)
* [2. Second Extra paragraph that is only in the Catholic Book of Lamentations](#sep)

###### Json Lists:
* [1. Json List of All Biblically Sorted Catholic Public Domain Version Books](#jlpabs)
---

<br>

##### Markdown Content:
###### 1. Markdown List of Catholic Public Domain Version Old Testament Books:{#cpdvotb}
|ID|Book| Chapters|
| ---: | --- | ---: |
| 1| Genesis| 50|
| 2| Exodus	| 40|
| 3| Leviticus| 27|
| 4| Numbers| 36|
| 5| Deuteronomy| 34|
| 6| Joshua| 24|
| 7| Judges| 21|
| 8| Ruth| 4|
| 9| 1 Samuel| 31|
| 10| 2 Samuel| 24|
| 11| 1 Kings| 22|
| 12| 2 Kings| 25|
| 13| 1 Chronicles| 29|
| 14| 2 Chronicles| 36|
| 15| Ezra| 10|
| 16| Nehemiah| 13|
| 17| Tobit| 14|
| 18| Judith| 16|
| 19| Esther| 10|
| 20| Job| 42|
| 21| Psalms| 150|
| 22| Proverbs| 31|
| 23| Ecclesiastes| 12|
| 24| Song of Solomon| 8|
| 25| Wisdom| 19|
| 26| Sirach| 51|
| 27| Isaiah| 66|
| 28| Jeremiah| 52|
| 29| Lamentations| 5|
| 30| Baruch| 6|
| 31| Ezekiel| 48|
| 32| Daniel| 12|
| 33| Hosea| 14|
| 34| Joel| 3|
| 35| Amos| 9|
| 36| Obadiah| 1|
| 37| Jonah| 4|
| 38| Micah| 7|
| 39| Nahum| 3|
| 40| Habakkuk| 3|
| 41| Zephaniah| 3|
| 42| Haggai| 2|
| 43| Zechariah| 14|
| 44| Malachi| 4|
| 45| 1 Maccabees| 16|
|46| 2 Maccabees| 15|
---

###### 2. Markdown List of Catholic Public Domain Version New Testament Books:{#cpdvntb}

|ID| Book| Chapters|
| ---: | --- | ---: |
| 47| Matthew| 28|
| 48| Mark| 16|
| 49| Luke| 24|
| 50| John| 21|
| 51| Acts| 28|
| 52| Romans| 16|
| 53| 1 Corinthians| 16|
| 54| 2 Corinthians| 13|
| 55| Galatians| 6|
| 56| Ephesians| 6|
| 57| Philippians| 4|
| 58| Colossians| 4|
| 59| 1 Thessalonians| 5|
| 60| 2 Thessalonians| 3|
| 61| 1 Timothy| 6|
| 62| 2 Timothy| 4|
| 63| Titus| 3|
| 64| Philemon| 1|
| 65| Hebrews| 13|
| 66| James| 5|
| 67| 1 Peter| 5|
| 68| 2 Peter| 3|
| 69| 1 John| 5|
| 70| 2 John| 1|
| 71| 3 John| 1|
| 72| Jude| 1|
| 73| Revelation| 22|
---
<br>

##### Json Content:

##### 1. A Paragraph that's only in the Catholic Public Domain at the beginning of the Book of Sirach:{#fep}

```json
"P": {
        "1": "The wisdom of many great things has been revealed to us through the law, and the prophets, and the other books that followed these. Concerning these things, Israel ought to be praised, because of doctrine and wisdom. For it is necessary, not only for those who are speaking, but even for outsiders, to be skillful, both in speaking and in writing, so as to become very learned",
        "2": "My grandfather Jesus, after he gave himself fully to a diligent reading of the law, and the prophets, and the other books that were handed down to us by our ancestors, also wanted to write something himself, about the things that pertain to doctrine and wisdom, so that those who desire to learn and to become skillful in these things would be more and more attentive in mind, and would be strengthened to live according to the law",
        "3": "And so, I exhort you to approach with benevolence, and to perform the reading with attentive study, and to be forbearing in these things when we may seem, while pursuing the image of wisdom, to fall short in the composition of words",
        "4": "For the Hebrew words are deficient when they have been translated into another language.",
        "5": "And not only these words, but also the law itself, and the prophets, and the remainder of the books, have no small difference from when they have been spoken in their own language",
        "6": "For in the time of king Ptolemy Euergetes, in the thirty-eighth year after I had arrived in Egypt, after I had been there for a long time, I found, left behind there, books with a doctrine neither small nor contemptible",
        "7": "And so I considered it to be both good and necessary for me to apply some significant diligence and labor in order to translate this book",
        "8": "Then, after much attentiveness to doctrine over a length of time, I brought to a close the things being considered, so as to offer this book for those who are willing to apply their mind and to learn how they ought to conduct their way of life",
        "9": "for those who have decided to form their life in accord with the law of the Lord"
    },
```
<br>

##### 2. A Paragraph that's only in the Catholic Public Domain at the beginning of the Book of Lamentations:{#sep}

```json
"P": {
        "1": "And it happened that, after Israel was driven into captivity, and Jerusalem was deserted,",
        "2": "the prophet Jeremiah sat weeping, and he wailed this lamentation in Jerusalem",
        "3": "And sighing with a bitter soul, and mourning, he said"
    },
```
---

<br>

##### 1. Json List of All Biblically Sorted Catholic Public Domain Version Books:{#jlpabs}

```json
/*
SQLIte3 BibleDB.db ABibleBooks Table Field Names Mapped to CatholicBooks.jsonc Key Value Pairs
-------------------------
    Key:    Field:
    c       Chapters
    id      BookID
    t       Title
*/
[
    {
        "c": 50,
        "id": 1,
        "t": "Genesis"
    },
    {
        "c": 40,
        "id": 2,
        "t": "Exodus"
    },
    {
        "c": 27,
        "id": 3,
        "t": "Leviticus"
    },
    {
        "c": 36,
        "id": 4,
        "t": "Numbers"
    },
    {
        "c": 34,
        "id": 5,
        "t": "Deuteronomy"
    },
    {
        "c": 24,
        "id": 6,
        "t": "Joshua"
    },
    {
        "c": 21,
        "id": 7,
        "t": "Judges"
    },
    {
        "c": 4,
        "id": 8,
        "t": "Ruth"
    },
    {
        "c": 31,
        "id": 9,
        "t": "1 Samuel"
    },
    {
        "c": 24,
        "id": 10,
        "t": "2 Samuel"
    },
    {
        "c": 22,
        "id": 11,
        "t": "1 Kings"
    },
    {
        "c": 25,
        "id": 12,
        "t": "2 Kings"
    },
    {
        "c": 29,
        "id": 13,
        "t": "1 Chronicles"
    },
    {
        "c": 36,
        "id": 14,
        "t": "2 Chronicles"
    },
    {
        "c": 10,
        "id": 15,
        "t": "Ezra"
    },
    {
        "c": 13,
        "id": 16,
        "t": "Nehemiah"
    },
    {
        "c": 14,
        "id": 17,
        "t": "Tobit"
    },
    {
        "c": 16,
        "id": 18,
        "t": "Judith"
    },
    {
        "c": 10,
        "id": 19,
        "t": "Esther"
    },
    {
        "c": 42,
        "id": 20,
        "t": "Job"
    },
    {
        "c": 150,
        "id": 21,
        "t": "Psalms"
    },
    {
        "c": 31,
        "id": 22,
        "t": "Proverbs"
    },
    {
        "c": 12,
        "id": 23,
        "t": "Ecclesiastes"
    },
    {
        "c": 8,
        "id": 24,
        "t": "Song of Solomon"
    },
    {
        "c": 19,
        "id": 25,
        "t": "Wisdom"
    },
    {
        "c": 51,
        "id": 26,
        "t": "Sirach"
    },
    {
        "c": 66,
        "id": 27,
        "t": "Isaiah"
    },
    {
        "c": 52,
        "id": 28,
        "t": "Jeremiah"
    },
    {
        "c": 5,
        "id": 29,
        "t": "Lamentations"
    },
    {
        "c": 6,
        "id": 30,
        "t": "Baruch"
    },
    {
        "c": 48,
        "id": 31,
        "t": "Ezekiel"
    },
    {
        "c": 12,
        "id": 32,
        "t": "Daniel"
    },
    {
        "c": 14,
        "id": 33,
        "t": "Hosea"
    },
    {
        "c": 3,
        "id": 34,
        "t": "Joel"
    },
    {
        "c": 9,
        "id": 35,
        "t": "Amos"
    },
    {
        "c": 1,
        "id": 36,
        "t": "Obadiah"
    },
    {
        "c": 4,
        "id": 37,
        "t": "Jonah"
    },
    {
        "c": 7,
        "id": 38,
        "t": "Micah"
    },
    {
        "c": 3,
        "id": 39,
        "t": "Nahum"
    },
    {
        "c": 3,
        "id": 40,
        "t": "Habakkuk"
    },
    {
        "c": 3,
        "id": 41,
        "t": "Zephaniah"
    },
    {
        "c": 2,
        "id": 42,
        "t": "Haggai"
    },
    {
        "c": 14,
        "id": 43,
        "t": "Zechariah"
    },
    {
        "c": 4,
        "id": 44,
        "t": "Malachi"
    },
    {
        "c": 16,
        "id": 45,
        "t": "1 Maccabees"
    },
    {
        "c": 15,
        "id": 46,
        "t": "2 Macabees"
    },
    {
        "c": 28,
        "id": 47,
        "t": "Matthew"
    },
    {
        "c": 16,
        "id": 48,
        "t": "Mark"
    },
    {
        "c": 24,
        "id": 49,
        "t": "Luke"
    },
    {
        "c": 21,
        "id": 50,
        "t": "John"
    },
    {
        "c": 28,
        "id": 51,
        "t": "Acts"
    },
    {
        "c": 16,
        "id": 52,
        "t": "Romans"
    },
    {
        "c": 16,
        "id": 53,
        "t": "1 Corinthians"
    },
    {
        "c": 13,
        "id": 54,
        "t": "2 Corinthians"
    },
    {
        "c": 6,
        "id": 55,
        "t": "Galatians"
    },
    {
        "c": 6,
        "id": 56,
        "t": "Ephesians"
    },
    {
        "c": 4,
        "id": 57,
        "t": "Philippians"
    },
    {
        "c": 4,
        "id": 58,
        "t": "Colossians"
    },
    {
        "c": 5,
        "id": 59,
        "t": "1 Thessalonians"
    },
    {
        "c": 3,
        "id": 60,
        "t": "2 Thessalonians"
    },
    {
        "c": 6,
        "id": 61,
        "t": "1 Timothy"
    },
    {
        "c": 4,
        "id": 62,
        "t": "2 Timothy"
    },
    {
        "c": 3,
        "id": 63,
        "t": "Titus"
    },
    {
        "c": 1,
        "id": 64,
        "t": "Philemon"
    },
    {
        "c": 13,
        "id": 65,
        "t": "Hebrews"
    },
    {
        "c": 5,
        "id": 66,
        "t": "James"
    },
    {
        "c": 5,
        "id": 67,
        "t": "1 Peter"
    },
    {
        "c": 3,
        "id": 68,
        "t": "2 Peter"
    },
    {
        "c": 5,
        "id": 69,
        "t": "1 John"
    },
    {
        "c": 1,
        "id": 70,
        "t": "2 John"
    },
    {
        "c": 1,
        "id": 71,
        "t": "3 John"
    },
    {
        "c": 1,
        "id": 72,
        "t": "Jude"
    },
    {
        "c": 22,
        "id": 73,
        "t": "Revelation"
    }
]
```
<br>

<h5 align="center">Good Luck With Your Efforts!</h3>