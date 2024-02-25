const printGreeting = require('./greetingPrinter');
const printDate = require('./datePrinter');
const printWeatherForecast = require('./weatherForecast');

printGreeting("John Doe");
printDate();
printWeatherForecast("London"); // Now specifying "London" to get its weather forecast
