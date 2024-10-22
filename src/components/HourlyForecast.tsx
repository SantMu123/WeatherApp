import React from "react"
import WeatherDay from "./weatherDay"
import nights from "../storage/img/nights_stay.png"

const HourlyForecast: React.FC = () => {
    return(
        <>
            <div className="flex flex-col bg-blue-200 h-[10em] rounded-2xl">
                <div>
                    <img src=""/>
                    <h2>Hourly Forecast</h2>
                </div>
                <div className="grid grid-flow-col my-4 px-4 auto-cols-max gap-6 bg-blue-500 w-[23.8em] overflow-x-auto">
                    <WeatherDay day="Now" img={nights} temp = "10"/>
                    <WeatherDay day="Now" img={nights} temp = "10"/>
                    <WeatherDay day="Now" img={nights} temp = "10"/>
                    <WeatherDay day="Now" img={nights} temp = "10"/>
                    <WeatherDay day="Now" img={nights} temp = "10"/>
                    <WeatherDay day="Now" img={nights} temp = "10"/>
                    <WeatherDay day="Now" img={nights} temp = "10"/>

                </div>
            </div>
        </>
    )
}

export default HourlyForecast