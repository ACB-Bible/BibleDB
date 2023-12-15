INSERT INTO CPDVerses (BookID, ChapterNumber, VerseNumber, VerseText,
ChapterID, VolumeID, VersionID) SELECT BookID, ChapterNumber, VerseNumber,
VerseText, ChapterID, VolumeID, VersionID FROM AATMPVerses ORDER BY BookID ASC,
ChapterNumber ASC, VerseNumber ASC;