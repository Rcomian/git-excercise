function printGreeting(name = "Guest", theme = "General") {
    const hour = new Date().getHours();
    let timeOfDayGreeting;

    if (hour < 12) {
        timeOfDayGreeting = "Good morning";
    } else if (hour < 18) {
        timeOfDayGreeting = "Good afternoon";
    } else {
        timeOfDayGreeting = "Good evening";
    }

    const generalGreetings = [
        `${timeOfDayGreeting}, ${name}. Welcome to our exciting demo project!`,
        `${timeOfDayGreeting} ${name}! Glad you're here to explore with us.`,
        `${timeOfDayGreeting} ${name}, ready to dive deeper into our project?`,
        `Hey ${name}, ${timeOfDayGreeting}! Let's make today productive.`,
        `${timeOfDayGreeting} ${name}! Looking forward to another fantastic day.`,
        `${timeOfDayGreeting}, ${name}. Let's achieve great things today.`,
        `${timeOfDayGreeting} ${name}! Every day brings new opportunities.`,
        `A very ${timeOfDayGreeting}, ${name}. Let's start the day with a smile.`,
        `${timeOfDayGreeting} ${name}, let's tackle today's challenges together.`,
        `${timeOfDayGreeting}, ${name}. Here's to a day full of possibilities.`
    ];

    const holidayGreetings = [
        `Merry Christmas, ${name}! Wishing you a joyful holiday season.`,
        `Happy Holidays, ${name}! May your days be filled with peace and joy.`,
        `Season's Greetings, ${name}! Wishing you a wonderful holiday time.`,
        `Happy New Year, ${name}! Here's to a year full of blessings and beyond.`
    ];

    const workGreetings = [
        `${timeOfDayGreeting}, ${name}. Ready to conquer the workday?`,
        `Good day at work, ${name}! Let's achieve great things today.`,
        `${timeOfDayGreeting} ${name}, let's be productive and positive today.`,
        `Here's to a successful day at work, ${name}!`
    ];

    const weekendGreetings = [
        `Happy Weekend, ${name}! Time to relax and enjoy.`,
        `${timeOfDayGreeting}, ${name}. Enjoy your weekend to the fullest!`,
        `It's the weekend, ${name}! Have a fantastic time.`,
        `Weekend wishes, ${name}! May your days off be a joy.`
    ];

    let greetings;

    switch (theme) {
        case "Holiday":
            greetings = holidayGreetings;
            break;
        case "Work":
            greetings = workGreetings;
            break;
        case "Weekend":
            greetings = weekendGreetings;
            break;
        default:
            greetings = generalGreetings;
    }

    // Select a random greeting from the appropriate list
    const greeting = greetings[Math.floor(Math.random() * greetings.length)];
    const log = require('./logger');
    log(greeting, {toFile: true}); // Now logs to both console and file. Adjust as needed.
}

module.exports = printGreeting;
