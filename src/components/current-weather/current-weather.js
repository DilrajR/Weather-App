import "./current-weather.css"

const CurrentWeather = ({data}) => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{data.city} </p>
                    <p className="weather-description">{data.weather[0].main}</p>
                </div>
                <img alt="weather" className="weather-icon" src={`weathericons/${data.weather[0].icon}.png`}></img>
            </div>
            <div className="bottom">
                <p className="temperature">{Math.round(data.main.temp)}°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label">Feels Like:    </span>
                        <span className="parameter-value">{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Highest:  </span>
                        <span className="parameter-value">{Math.round(data.main.temp_max)}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Lowest:   </span>
                        <span className="parameter-value">{Math.round(data.main.temp_min)}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity:</span>
                        <span className="parameter-value"> {Math.round(data.main.humidity)}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind:</span>
                        <span className="parameter-value"> {Math.round(data.wind.speed)} m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure:</span>
                        <span className="parameter-value"> {Math.round(data.main.pressure)} hPa</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Visibility:</span>
                        <span className="parameter-value"> {Math.round((data.visibility) / 1000)} km</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather;