function printGreeting(name = "Guest") {
    const hour = new Date().getHours();
    let timeOfDayGreeting;

    if (hour < 12) {
        timeOfDayGreeting = "Good morning";
    } else if (hour < 18) {
        timeOfDayGreeting = "Good afternoon";
    } else {
        timeOfDayGreeting = "Good evening";
    }

    const greetings = [
        `${timeOfDayGreeting}, ${name}. Welcome to our exciting demo project!`,
        `${timeOfDayGreeting} ${name}! Glad you're here to explore with us.`,
    ];

    // Select a random greeting
    const greeting = greetings[Math.floor(Math.random() * greetings.length)];
    console.log(greeting);
}

module.exports = printGreeting;
