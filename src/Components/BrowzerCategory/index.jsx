import React from 'react'
import BroCard from './BroCard'
import RowHeading from '../Top-Component/RowHeading'
import TopRowpath from '../Top-Component/Row'
import Image from 'next/image'

const BrowzerCards = () => {
    return (
        <div className='md:px-20 px-5'>
            BrowzerCards
            <TopRowpath para={"Category"} />
            <RowHeading heading={"Browse By Category"} />
            <div className='flex  justify-between mt-10'>
                <BroCard
                    cardname={"phone"}
                    svgimg={"/brosvg/phone.svg"}
                />
                <BroCard
                    cardname={"Camara"}
                    svgimg={"/brosvg/camara.svg"} />
                <BroCard
                    cardname={"Computer"}
                    svgimg={"/brosvg/computer.svg"} />
                <BroCard
                    cardname={"Smartwatch"}
                    svgimg={"/brosvg/smartwatch.svg"} />
                <BroCard
                    cardname={"Game"}
                    svgimg={"/brosvg/game.svg"} />
                <BroCard
                    cardname={"phone"}
                    svgimg={"/brosvg/phone.svg"} />
            </div>
        </div>
    )
}

export default BrowzerCards