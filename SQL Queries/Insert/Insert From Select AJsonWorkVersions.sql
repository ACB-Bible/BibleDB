INSERT INTO AJsonWorkVersions (id, ar, vn, idx)
SELECT VersionID, Abreviation, VersionName, ROW_NUMBER() OVER (ORDER BY VersionName) - 1
FROM ABibleVersions WHERE Available = 1;
