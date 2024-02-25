const fs = require('fs');
const path = require('path');

function printDate() {
    const now = new Date();
    console.log(`Today's date is: ${now.toLocaleDateString()}`);
    console.log(`Current time is: ${now.toLocaleTimeString()}`);

    const days = [
        { day: "Sunday", fact: "Reflect on the past week and plan the next one." },
        { day: "Monday", fact: "A fresh start, embrace the week ahead!" },
        { day: "Tuesday", fact: "Keep the momentum going!" },
        { day: "Wednesday", fact: "Halfway there, stay strong!" },
        { day: "Thursday", fact: "The weekend is almost in sight." },
        { day: "Friday", fact: "Finish strong, you've got this!" },
        { day: "Saturday", fact: "Time to relax and recharge." },
    ];

    const dayIndex = now.getDay();
    const dayName = days[dayIndex].day;
    const motivationalQuote = days[dayIndex].fact;

    console.log(`It's ${dayName}. ${motivationalQuote}`);

    const messageFilePath = path.join(__dirname, 'customMessage.txt');

    fs.readFile(messageFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Could not read custom message file:", err);
            return;
        }
        console.log(`Custom message: ${data}`);
    });
}

module.exports = printDate;
