import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import './forecast.css';
const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const Forecast = ({ data }) => {
    const date = new Date().getDay();
    const forecastDay = weekdays.slice(date, weekdays.length).concat(weekdays.slice(0, date));
    return (
        <>
            <label className="title">Next 7 Days:</label>
            <Accordion allowZeroExpanded>
                {data.list.slice(0, 7).map((item, index) => (
                    <AccordionItem key={index} >
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="dailyItem">
                                    <img alt="weather" className="icon-small" src={`weathericons/${item.weather[0].icon}.png`} />
                                    <label className="day">{forecastDay[index]}</label>
                                    <label className="description">{item.weather[0].main}</label>
                                    <label className="min-max">{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="dailyDetailsBox">
                                <div className="dailyDetail">
                                    <label>Feels Like:</label>
                                    <label>{Math.round(item.main.feels_like)} °C</label>
                                </div>
                                <div className="dailyDetail">
                                    <label>Humidity:</label>
                                    <label>{item.main.humidity} %</label>
                                </div>
                                <div className="dailyDetail">
                                    <label>Wind Speed:</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className="dailyDetail">
                                    <label>Pressure:</label>
                                    <label>{item.main.pressure} hPa</label>
                                </div>
                                <div className="dailyDetail">
                                    <label>Visibility:</label>
                                    <label>{Math.round((item.visibility) / 1000)} km</label>
                                </div>
                                <div className="dailyDetail">
                                    <label>Sea Level:</label>
                                    <label>{Math.round((item.main.sea_level) / 1000)} km</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    )
}

export default Forecast;