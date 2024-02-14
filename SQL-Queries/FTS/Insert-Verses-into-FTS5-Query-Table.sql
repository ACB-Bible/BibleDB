INSERT INTO KJVquery (bid, cn, jq, vid, vt, vrsn) SELECT BookID, ChapterNumber,
JesusQuote, VerseID, VerseText, 1 FROM KJVVerses;

