import React from "react"

interface Prop {
    img : string, 
    title : string,
    number: Float32Array,
    decimal: Float32Array
}

const Card2: React.FC<Prop> = ({img, title, number, decimal}) => {
    return(
       <div className="flex justify-center gap-3 items-center bg-purple-custom rounded-2xl h-[5em] w-[11em]">
            <img src={img}/>
            <div className="flex flex-col justify-center h-[4em]">
                <h3>{title}</h3>
                <div className="flex flex-row">
                    <label>{number}</label>
                    <p>Km/h</p>
                </div> 
            </div>
            <div className="h-[4em] flex items-end">
                <label>{decimal}</label>
            </div>
            
       </div> 
    )
}

export default Card2