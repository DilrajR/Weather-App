import './App.css';
import Search from './components/search/search';
import Forecast from './components/forecast/forecast';
import CurrentWeather from './components/current-weather/current-weather';
import { useState } from 'react';
import { WeatherApiURL, WeatherApiKey } from './api';

var weatherNow;
function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setforecastWeather] = useState(null);
  const handleOnSearchChange = (searchData) => {
    const [latitude, longitude] = searchData.value.split(" ");
    const currentWeatherFetch = fetch(`${WeatherApiURL}/weather?lat=${latitude}&lon=${longitude}&appid=${WeatherApiKey}&units=metric`);
    const forecastWeatherFetch = fetch(`${WeatherApiURL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WeatherApiKey}&units=metric`);
    Promise.all([currentWeatherFetch, forecastWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setforecastWeather({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  }
  if (currentWeather != null) {
    weatherNow = currentWeather.weather[0].main;
    if (currentWeather.weather[0].icon[2] == 'n') {
      weatherNow = weatherNow + 'N';
    }
  }
  return (
    <div className={weatherNow}>
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecastWeather && <Forecast data={forecastWeather} />}
    </div>
  );
}

export default App;
