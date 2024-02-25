function printGreeting() {
    const greetings = [
        "Hello, welcome to our exciting demo project!",
        "Hi there! Glad you're here to explore with us.",
        "Warm greetings, adventurer! Ready to dive deeper?",
        "Welcome aboard! Let's navigate through our demo together.",
        "Hey! Discover what we've prepared for you.",
        "Good day! Embark on a journey of discovery.",
        "Hello! We're thrilled to showcase our efforts.",
        "Welcome! Let your curiosity lead the way.",
        "Salutations! Prepare to be intrigued.",
        "Hi! Embrace today's challenges with enthusiasm."
    ];

    // Select a random greeting
    const greeting = greetings[Math.floor(Math.random() * greetings.length)];
    console.log(greeting);
}

module.exports = printGreeting;
