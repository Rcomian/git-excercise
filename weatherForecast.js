function printWeatherForecast(city = "New York") {
    const forecasts = [
        { city: "New York", todayForecast: "Sunny with a high of 75°F and a low of 65°F." },
        { city: "San Francisco", todayForecast: "Foggy in the morning, sunny in the afternoon." },
        { city: "Seattle", todayForecast: "Cloudy with occasional rain showers." },
        { city: "Miami", todayForecast: "Hot and humid with a chance of thunderstorms." },
        { city: "London", todayForecast: "Light rain and cool temperatures." },
    ];

    const nextDayForecasts = [
        "Clear skies expected throughout the day.",
        "Intermittent clouds with a chance of light rain.",
        "Sunny, with occasional gusty winds in the afternoon.",
        "Heavy rainfall expected in the evening.",
        "Mild temperatures with overcast skies.",
        "A thunderstorm possible in the afternoon.",
        "Warm with high humidity levels.",
    ];

    // Simulate fetching forecast for the specified city
    const cityForecast = forecasts.find(f => f.city === city)?.todayForecast || "Forecast not available for your city.";
    console.log(`Weather Forecast for ${city} today: ${cityForecast}`);

    // Select a random next-day forecast
    const nextDayForecast = nextDayForecasts[Math.floor(Math.random() * nextDayForecasts.length)];
    const log = require('./logger');
    log(`Weather Forecast for ${city}: ${forecast}`, {toFile: true}); // Now logs to both console and file. Adjust as needed.
}

module.exports = printWeatherForecast;
