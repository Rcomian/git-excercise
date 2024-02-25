function printGreeting(name = "Guest") {
    const greetings = [
        `Hello ${name}, welcome to our exciting demo project!`,
        `Hi ${name}! Glad you're here to explore with us.`,
        `Warm greetings, ${name}! Ready to dive deeper?`,
        `Welcome aboard, ${name}! Let's navigate through our demo together.`,
        `Hey ${name}! Discover what we've prepared for you.`
    ];

    // Select a random greeting
    const greeting = greetings[Math.floor(Math.random() * greetings.length)];
    console.log(greeting);
}

module.exports = printGreeting;
