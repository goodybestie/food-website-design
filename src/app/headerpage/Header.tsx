
import React from 'react'

interface HeaderProps {
    h1: string
}

export default function Headers({ h1 }: HeaderProps) {


    return (

        <div>
            <div className="text-center mt-[30%]  md:mt-[20%] lg:mt-[12%] p-10">
                <h1 className="font-playfair font-semibold text-[#2C2F24] text-3xl md:text-5xl lg:text-7xl pb-2">{h1}</h1>
                <p className="text-sm font-dmSans text-[#495460] max-w-xs sm:max-w-sm mx-auto pt-2">We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
            </div>
        </div>
    )
}
