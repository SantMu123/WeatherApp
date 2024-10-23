import React from "react"

interface Prop {
    title : string,
    flag : boolean
}

const Card: React.FC<Prop> = ({title, flag}) => {
    const subComponenteUno = [
        <div className="flex justify-center hover:bg-purple-hover hover:text-purple-words active:bg-purple-hover focus:outline-none items-center focus:ring focus:ring-violet-300 bg-purple-custom rounded-2xl h-[3.5em] w-[9em]">
            {title}
       </div> 
    ]

    const subComponenteDos = [
        <div className="flex justify-center hover:bg-purple-hover hover:text-purple-words active:bg-purple-hover focus:outline-none items-center focus:ring focus:ring-violet-300 bg-white rounded-2xl h-[3.5em] w-[9em]">
            {title}
       </div> 
    ]
    return flag ? subComponenteDos : subComponenteUno
}

export default Card