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
        `${timeOfDayGreeting} ${name}! Ready to dive deeper into our project?`,
        `${timeOfDayGreeting}, ${name}. Let's navigate through our demo together.`,
        `${timeOfDayGreeting} ${name}, discover what we've prepared for you.`,
        `${timeOfDayGreeting}, ${name}! Embrace the new challenges and opportunities.`,
        `${timeOfDayGreeting} ${name}! Today is a perfect day for a fresh start.`,
        `${timeOfDayGreeting}, ${name}. Let's make today productive and fun.`,
        `${timeOfDayGreeting} ${name}, your curiosity will lead to amazing discoveries.`,
        `${timeOfDayGreeting}, ${name}. We're thrilled to have you with us on this journey.`
    ];

    // Select a random greeting
    const greeting = greetings[Math.floor(Math.random() * greetings.length)];
    console.log(greeting);
}

module.exports = printGreeting;
