var fs = require("fs");
function readFileContent(filePath) {
    if (fs.existsSync(filePath)) {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error("Error reading file:", err);
            } else {
                console.log(data);
            }
        });
    } else {
        console.error("File does not exist:", filePath);
    }
}
// testcase-1
readFileContent("Day1/file.txt");
// testcase-2
readFileContent("Day1/empty-file.txt");
// testcase-3
readFileContent("Day1/file2.txt");