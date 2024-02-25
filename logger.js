const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, 'application.log');

function logToConsole(message) {
    console.log(message);
}

function logToFile(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp} - ${message}\n`;

    fs.appendFile(logFilePath, logMessage, err => {
        if (err) {
            console.error("Failed to write to log file:", err);
        }
    });
}

function log(message, { toConsole = true, toFile = false } = {}) {
    if (toConsole) {
        logToConsole(message);
    }

    if (toFile) {
        logToFile(message);
    }
}

module.exports = log;
