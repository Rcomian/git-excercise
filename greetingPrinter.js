function printGreeting() {
    const greetings = [
        "Hello, welcome to our demo project!",
        "Hi there! Glad you're checking this out.",
        "Greetings, explorer! Dive into our project.",
        "Welcome aboard! Enjoy our little demo.",
        "Hey! Hope you find this interesting."
    ];

    // Select a random greeting
    const greeting = greetings[Math.floor(Math.random() * greetings.length)];
    console.log(greeting);
}

module.exports = printGreeting;
