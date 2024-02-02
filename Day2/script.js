const fs = require('fs');
const path = require('path');

function writeToFile(filePath, content) {
    const directory = path.dirname(filePath);
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
    }

    fs.writeFile(filePath, content, 'utf8', (err) => {
        if (err) {
            console.error("Error writing to file:", err);
        } else {
            console.log("Data written to " + filePath);
        }
    });
}

// Test case 1:
writeToFile('test-files/output1.txt', 'Sample content.');
// Test case 2:
writeToFile('file.txt', 'Content in a non-existent folder.');
