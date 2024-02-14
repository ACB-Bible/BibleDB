SELECT VerseID, BookID, ChapterNumber, ParagraphNumber,
VerseNumber, VerseText, JesusQuote FROM TWFVerses WHERE
rowid >= (SELECT rowid FROM TWFVerses ORDER BY RANDOM() LIMIT 1)
ORDER BY rowid LIMIT 3;