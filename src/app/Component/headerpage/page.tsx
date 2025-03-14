
import React from 'react'

interface HeaderProps {
    h1: string
}

export default function Headers({ h1 }: HeaderProps) {


    return (

        <div>
            <div className="text-center p-10">
                <h1 className="font-playfair text-5xl md:text-7xl pb-2">{h1}</h1>
                <p className="text-sm font-dmSans max-w-xs sm:max-w-sm mx-auto pt-2">We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
            </div>
        </div>
    )
}
