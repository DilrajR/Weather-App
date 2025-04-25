export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_GEO_API_KEY,
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GeoApiURL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const WeatherApiURL = "https://api.openweathermap.org/data/2.5";

export const WeatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;

console.log("Geo Key:", process.env.REACT_APP_GEO_API_KEY);
console.log("Weather Key:", process.env.REACT_APP_WEATHER_API_KEY);
