const printGreeting = require('./greetingPrinter');
const printDate = require('./datePrinter');
const printWeatherForecast = require('./weatherForecast');

// Example of specifying a name and theme for the greeting
printGreeting("John Doe", "Holiday"); // Adjust the theme as needed: "General", "Holiday", "Work", "Weekend"

printDate();
printWeatherForecast("London"); // You can change the city to your preference
