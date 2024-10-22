import React from "react"

interface intoCard {
    day:string,
    img:string,
    temp:number
}

const WeatherDay: React.FC<intoCard> = ({day, img, temp}) => {
    return(
        <div className="flex flex-col gap-2">
            <h3>{day}</h3>
            <img src={img}/>
            <label>{temp}</label>
        </div>
    )
}

export default WeatherDay