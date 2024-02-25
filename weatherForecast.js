function printWeatherForecast(city = "New York") {
    const forecasts = [
        { city: "New York", forecast: "Sunny with a high of 75°F and a low of 65°F." },
        { city: "San Francisco", forecast: "Foggy in the morning, sunny in the afternoon." },
        { city: "Seattle", forecast: "Cloudy with occasional rain showers." },
        { city: "Miami", forecast: "Hot and humid with a chance of thunderstorms." },
        { city: "London", forecast: "Light rain and cool temperatures." },
    ];

    // Simulate fetching forecast for the specified city
    const forecast = forecasts.find(f => f.city === city)?.forecast || "Forecast not available for your city.";

    console.log(`Weather Forecast for ${city}: ${forecast}`);
}

module.exports = printWeatherForecast;
