INSERT INTO JsonVerses (vid, bid, cn, pn, vn, vt, jq) SELECT VerseID, BookID, ChapterNumber, ParagraphNumber,
VerseNumber, VerseText, JesusQuote FROM TWFVerses;