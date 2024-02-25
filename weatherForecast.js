function printWeatherForecast(city = "New York") {
    const forecasts = [
        { 
            city: "New York", 
            forecast: "Sunny with a high of 75°F and a low of 65°F.",
            nextDay: "Partly cloudy with a chance of rain."
        },
        { 
            city: "San Francisco", 
            forecast: "Foggy in the morning, sunny in the afternoon.",
            nextDay: "Light fog and winds in the evening."
        },
        { 
            city: "Seattle", 
            forecast: "Cloudy with occasional rain showers.",
            nextDay: "Rain showers continuing, cooler temperatures."
        },
        { 
            city: "Miami", 
            forecast: "Hot and humid with a chance of thunderstorms.",
            nextDay: "Thunderstorms likely, high humidity."
        },
        { 
            city: "London", 
            forecast: "Light rain and cool temperatures.",
            nextDay: "Overcast with breaks of sunshine."
        },
    ];

    // Simulate fetching forecast for the specified city
    const forecast = forecasts.find(f => f.city === city);
    if (forecast) {
        console.log(`Weather Forecast for ${city}: ${forecast.forecast}`);
        console.log(`Next day outlook: ${forecast.nextDay}`);
    } else {
        console.log(`Forecast not available for your city.`);
    }
}

module.exports = printWeatherForecast;
