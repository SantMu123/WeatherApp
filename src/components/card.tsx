import React from "react"

interface Prop {
    title : string
}

const Card: React.FC<Prop> = ({title}) => {
    return(
       <div className="flex justify-center hover:bg-sky-700 active:bg-violet-700 focus:outline-none items-center focus:ring focus:ring-violet-300 bg-red-500 rounded-2xl h-[3.5em] w-[9em]">
            {title}
       </div> 
    )
}

export default Card