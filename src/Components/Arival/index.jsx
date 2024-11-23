import React from 'react'
import RowHeading from '../Top-Component/RowHeading'
import TopRowpath from '../Top-Component/Row'
import ArivalCard from './ArivalCard'

const Data =[
    {
        imges:"/bus.svg",
        head:"FREE AND FAST DELIVERY",
        para:"Free delivery for all orders over $140"
    },
    {
        imges:"/Hadphone.svg",
        head:"24/7 CUSTOMER SERVICE",
        para:"Friendly 24/7 customer support"
    },
    {
        imges:"/true.svg",
        head:"MONEY BACK GUARANTEE",
        para:"We reurn money within 30 days"
    }
]
const Arival = () => {

    return (
        <div className='md:px-20 px-5 my-16'>
            <TopRowpath para={"new Arival"} />
            <RowHeading heading={"New Arivals"} />
            <div className='flex justify-around flex-wrap mt-10'>
                {/* <ArivalCard />
                <ArivalCard />
                <ArivalCard /> */}
                {Data.map((item,index)=>(
                    <ArivalCard  key={index}  Data={item} />
                ))}
            </div>
        </div>
    )
}

export default Arival