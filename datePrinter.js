const fs = require('fs');
const path = require('path');

function printDate() {
    const now = new Date();
    console.log(`Today's date is: ${now.toLocaleDateString()}`);
    console.log(`Current time is: ${now.toLocaleTimeString()}`);

    // Define the path to the custom message file
    const messageFilePath = path.join(__dirname, 'customMessage.txt');

    // Read the custom message from the file and print it
    fs.readFile(messageFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Could not read custom message file:", err);
            return;
        }
        console.log(`Custom message: ${data}`);
    });
}

module.exports = printDate;
