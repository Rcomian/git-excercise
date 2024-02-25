const fs = require('fs');
const path = require('path');

function printDate() {
    const now = new Date();
    console.log(`Today's date is: ${now.toLocaleDateString()}`);
    console.log(`Current time is: ${now.toLocaleTimeString()}`);

    // Array of days with corresponding fun facts
    const days = [
        { day: "Sunday", fact: "Did you know? More people check into hotels on this day than any other."},
        { day: "Monday", fact: "Did you know? Monday is the only day of the week that is an anagram for a single word: 'dynamo'."},
        { day: "Tuesday", fact: "Did you know? 'Tuesday' is named after the Norse god of war, Tyr."},
        { day: "Wednesday", fact: "Did you know? The day is named after Odin, the chief Norse god."},
        { day: "Thursday", fact: "Did you know? It's named after Thor, the Norse god of thunder."},
        { day: "Friday", fact: "Did you know? In maritime folklore, it's considered unlucky to begin a voyage on Fridays."},
        { day: "Saturday", fact: "Did you know? It's the only day of the week that retains its Roman origin in English, named after Saturn."},
    ];

    const dayIndex = now.getDay(); // Sunday - 0, Monday - 1, ..., Saturday - 6
    const dayName = days[dayIndex].day;
    const funFact = days[dayIndex].fact;

    console.log(`It's ${dayName}. ${funFact}`);

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
