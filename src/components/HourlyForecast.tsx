import React from "react"
import WeatherDay from "./weatherDay"
import nights from "../storage/img/nights_stay.png"
import clock from "../storage/img/history_toggle_off.png"
import SunCloudy from "../storage/img/Sun_Cloudy.png"

const HourlyForecast: React.FC = () => {
    return(
        <>
            <div className="flex flex-col bg-purple-custom h-[10em] rounded-2xl">
                <div className="flex gap-4 p-3">
                    <img src={clock}/>
                    <h2>Hourly Forecast</h2>
                </div>
                <div className="grid grid-flow-col px-4 auto-cols-max gap-6 w-[23.8em] overflow-x-auto">
                    <WeatherDay day="Now" img={SunCloudy} temp = "10"/>
                    <WeatherDay day="Now" img={nights} temp = "10"/>
                    <WeatherDay day="Now" img={nights} temp = "10"/>
                    <WeatherDay day="Now" img={SunCloudy} temp = "10"/>
                    <WeatherDay day="Now" img={SunCloudy} temp = "10"/>
                    <WeatherDay day="Now" img={SunCloudy} temp = "10"/>
                    <WeatherDay day="Now" img={nights} temp = "10"/>

                </div>
            </div>
        </>
    )
}

export default HourlyForecast