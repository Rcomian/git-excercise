const fs = require('fs');
const path = require('path');

function printDate() {
    const now = new Date();
    console.log(`Today's date is: ${now.toLocaleDateString()}`);
    console.log(`Current time is: ${now.toLocaleTimeString()}`);

    // Calculate days remaining in the year
    const endOfYear = new Date(now.getFullYear(), 11, 31); // December 31st
    const msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day
    const daysRemaining = Math.round((endOfYear - now) / msPerDay);

    console.log(`Days remaining in the year: ${daysRemaining}`);
    
    const days = [
        { day: "Sunday", motivation: "Reflect on the past week and plan the next one." },
        { day: "Monday", motivation: "A fresh start, embrace the week ahead!" },
        { day: "Tuesday", motivation: "Keep the momentum going!" },
        { day: "Wednesday", motivation: "Halfway there, stay strong!" },
        { day: "Thursday", motivation: "The weekend is almost in sight." },
        { day: "Friday", motivation: "Finish strong, you've got this!" },
        { day: "Saturday", motivation: "Time to relax and recharge." },
    ];

    const dayIndex = now.getDay();
    const dayName = days[dayIndex].day;
    const motivationalQuote = days[dayIndex].motivation;

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
