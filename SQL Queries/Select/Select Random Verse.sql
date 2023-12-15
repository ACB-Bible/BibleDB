SELECT VerseID, BookID, ChapterNumber, ParagraphNumber,
VerseNumber, VerseText, JesusQuote FROM TWFVerses
ORDER BY RANDOM() LIMIT 3;