const printGreeting = require('./greetingPrinter');
const printDate = require('./datePrinter');
const printWeatherForecast = require('./weatherForecast');

printGreeting("John Doe");
printDate();
// Call the weather forecast function with a city of your choice
printWeatherForecast("San Francisco");
